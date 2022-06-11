<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutShippingRequest;
use App\Http\Requests\CheckoutAddressRequest;
use App\Http\Requests\CheckoutUserRequest;
use App\Models\Subscription;
use App\Models\OrderProduct;
use App\Models\Order;
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
        $order = Order::updateOrCreate([
            'uuid' => $request->uuid,
        ], [
            'user_id' => auth()->id(),
            'user_firstname' => $request->firstname,
            'user_lastname' => $request->lastname,
            'user_email' => $request->email,
        ]);
        if ($request->subscribe && !Subscription::where('email', $request->email)->exists()) {
            $this->subscribe($request->email);
        }
        $this->saveBag($order->id, $request->cookie('cookie_id'));
        return back();
    }

    public function address(CheckoutAddressRequest $request)
    {
        Order::updateOrCreate([
            'uuid' => $request->uuid,
        ], [
            'address_firstname' => $request->firstname,
            'address_lastname' => $request->lastname,
            'address_street' => $request->street,
            'address_city' => $request->city,
            'address_state' => $request->state,
            'address_zip' => $request->zip,
            'address_country' => $request->country,
            'address_phone' => $request->phone,
        ]);
        return back();
    }

    public function shipping(CheckoutShippingRequest $request)
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
