<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Mail\Subscription as SubscribeMail;
use Illuminate\Support\Facades\Mail;
use App\Models\ShippingCompany;
use App\Models\Subscription;
use App\Models\ProductSize;
use App\Models\Coupon;
use App\Models\Order;
use App\Models\Bag;
use Carbon\Carbon;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function afterPayment($uuid, $method)
    {
        $order = Order::with('products')->where('uuid', $uuid)->firstOrFail();
        if ($order->status === null) {
            $order->payment_method = $method;
            $order->status = Order::PROCESSING;
            $order->save();

            Coupon::where('id', $order->coupon_id)->update(['used' => true]);

            Bag::where(auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $request->cookie('cookie_id')])->delete();

            foreach ($order->products as $item) {
                $size = ProductSize::where('product_id', $item->product_id)->where('size_id', $item->size_id)->first();
                $size->qty = $size->qty - $item->qty;
                $size->save();
            }
        }
    }

    public function getCoupon($id, $subtotal = null)
    {
        $coupon = Coupon::find($id);
        $min = $coupon->min ?? 1;
        $max = $coupon->max ?? 1000000000;
        $subtotal = $subtotal ?? $this->getSubtotal();
        if ($coupon && !$coupon->used && Carbon::parse($coupon->expires_at)->gte(now())) {
            if ($subtotal >= $min && $subtotal <= $max) {
                if ($coupon->type === 'fixed') {
                    return $coupon->value;
                } elseif ($coupon->type === 'percentage') {
                    return ($subtotal * $coupon->value) / 100;
                }
                return 0;
            }
            return 0;
        }
        return 0;
    }

    public function getSubtotal()
    {
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $request->cookie('cookie_id')];
        $bag = Bag::with('product')->where($condition)->get();
        return $bag->sum(function ($item) {
            return $this->getPrice($item->product->price, $item->product->discount) * $item->qty;
        });
    }

    public function getPrice($price, $discount)
    {
        return $discount ? $price - (($price * $discount) / 100) : $price;
    }

    public function getShippingPrice($id)
    {
        $company = ShippingCompany::find($id);
        return $company->price;
    }

    public function subscribe($email)
    {
        $subscription = new Subscription;
        $subscription->email = $email;
        $subscription->save();

        if (! Coupon::where('email', $email)->exists()) {
            $coupon = new Coupon;
            $coupon->email = $email;
            $coupon->type = 'percentage';
            $coupon->value = 25;
            $coupon->expires_at = now()->addMonths(6)->toDateString();
            $coupon->save();

            Mail::to($email)->send(new SubscribeMail($coupon->code, 6));
        }
    }
}
