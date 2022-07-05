<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutShippingMethodRequest;
use App\Http\Requests\CheckoutAddressRequest;
use App\Http\Requests\CheckoutUserRequest;
use App\Models\Subscription;
use App\Models\OrderProduct;
use App\Models\Address;
use App\Models\Order;
use App\Models\User;
use App\Models\Bag;

class CheckoutController extends Controller
{

    public function __construct()
    {
        $this->middleware('cookie');
        $this->middleware('checkout');
    }

    public function user(CheckoutUserRequest $request)
    {
        if (Order::where('uuid', $request->uuid)->status()->exists()) {
            return inertia()->location(route('checkout'));
        }
        $order = Order::updateOrCreate([
            'uuid' => $request->uuid,
        ], [
            'user_id' => auth()->id(),
            'user_firstname' => $request->firstname,
            'user_lastname' => $request->lastname,
            'user_email' => $request->email,
        ]);
        if ($request->save) {
            $user = new User;
            $user->firstname = $request->firstname;
            $user->lastname = $request->lastname;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            if ($user->save()) {
                $user->sendEmailVerificationNotification();
            }
        }
        if ($request->subscribe && !Subscription::where('email', $request->email)->exists()) {
            $this->subscribe($request->email);
        }
        $this->saveBag($order->id, $request->cookie('cookie_id'));
        return back();
    }

    public function address(CheckoutAddressRequest $request)
    {
        if (auth()->check()) {
            Address::firstOrCreate([
                'user_id' => auth()->id(),
                'firstname' => $request->input('delivery.firstname'),
                'lastname' => $request->input('delivery.lastname'),
                'street' => $request->input('delivery.street'),
                'city' => $request->input('delivery.city'),
                'state' => $request->input('delivery.state'),
                'zip' => $request->input('delivery.zip'),
                'country' => $request->input('delivery.country'),
                'phone' => $request->input('delivery.phone'),
            ], [
                'default' => false,
            ]);
            Address::firstOrCreate([
                'user_id' => auth()->id(),
                'firstname' => $request->input('billing.firstname'),
                'lastname' => $request->input('billing.lastname'),
                'street' => $request->input('billing.street'),
                'city' => $request->input('billing.city'),
                'state' => $request->input('billing.state'),
                'zip' => $request->input('billing.zip'),
                'country' => $request->input('billing.country'),
                'phone' => $request->input('billing.phone'),
            ], [
                'default' => false,
            ]);
        }
        Order::where('uuid', $request->input('delivery.uuid'))->first()->delivery()->create([
            'firstname' => $request->input('delivery.firstname'),
            'lastname' => $request->input('delivery.lastname'),
            'street' => $request->input('delivery.street'),
            'city' => $request->input('delivery.city'),
            'state' => $request->input('delivery.state'),
            'zip' => $request->input('delivery.zip'),
            'country' => $request->input('delivery.country'),
            'phone' => $request->input('delivery.phone'),
        ]);
        Order::where('uuid', $request->input('billing.uuid'))->first()->billing()->create([
            'firstname' => $request->input('billing.firstname'),
            'lastname' => $request->input('billing.lastname'),
            'street' => $request->input('billing.street'),
            'city' => $request->input('billing.city'),
            'state' => $request->input('billing.state'),
            'zip' => $request->input('billing.zip'),
            'country' => $request->input('billing.country'),
            'phone' => $request->input('billing.phone'),
        ]);
        return back();
    }

    public function shipping(CheckoutShippingMethodRequest $request)
    {
        Order::updateOrCreate([
            'uuid' => $request->uuid,
        ], [
            'shipping_company_id' => $request->company,
            'coupon_id' => $request->coupon,
            'order_subtotal' => $this->getSubtotal() - $this->getCoupon($request->coupon),
            'order_shipping' => $this->getShippingPrice($request->company),
        ]);
        return back();
    }

    public function saveBag($id, $cookie)
    {
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $cookie];
        $bag = Bag::with('product.subCategories.subCategory', 'size')->where($condition)->get();
        foreach ($bag as $item) {
            $subCategories = $item->product->subCategories->map(fn ($item) => $item->subCategory->name);
            $product = new OrderProduct;
            $product->order_id = $id;
            $product->product_id = $item->product->id;
            $product->size_id = $item->size->id;
            $product->title = $item->product->title;
            $product->category = implode($subCategories->all());
            $product->qty = $item->qty;
            $product->size = $item->size->name;
            $product->price = $this->getPrice($item->product->price, $item->product->discount);
            $product->save();
        }
    }
}
