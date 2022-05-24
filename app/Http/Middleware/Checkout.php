<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Bag;
use App\Models\ProductSize;
use Illuminate\Http\Request;

class Checkout
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $request->cookie('cookie_id')];
        $bag = Bag::where($condition)->get();
        if ($bag->count() === 0) {
            return redirect()->route('shop');
        }
        foreach ($bag as $item) {
            $size = ProductSize::where('product_id', $item->product_id)->where('size_id', $item->size_id)->first();
            if ($size->qty < $item->qty) {
                return redirect()->route('shop');
            }
        }
        return $next($request);
    }
}
