<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Models\Coupon;
use Carbon\Carbon;

class CouponController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->validate(['code' => 'required|string|exists:coupons,code']);
        $coupon = Coupon::where('code', $request->code)->first();
        if ($coupon->active === 'no') {
            throw ValidationException::withMessages([
                'code' => ['This code has been used or expired.'],
            ]);
        }
        return response()->json(compact('coupon'));
    }
}
