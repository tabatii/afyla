<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\ShippingCompany;
use App\Models\Coupon;
use App\Models\Bag;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getCoupon($id, $subtotal = null)
    {
        $coupon = Coupon::find($id);
        $min = $coupon->min ?? 1;
        $max = $coupon->max ?? 1000000000;
        $subtotal = $subtotal ?? $this->getSubtotal();
        if ($coupon && $coupon->active === 'yes') {
            if ($subtotal >= $min && $subtotal <= $max) {
                if ($coupon->type === 'price') {
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
}
