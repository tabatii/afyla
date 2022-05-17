<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Wishlist;
use App\Models\Product;

class WishlistController extends Controller
{

    protected $expire = 86400; // 60 days

    public function index()
    {
        return inertia('Wishlist');
    }

    public function toggle(Request $request, $id)
    {
        $cookie = $request->cookie('cookie_id') ?? Str::random(20);
        $query = auth()->check()
               ? Wishlist::where('user_id', auth()->id())->where('product_id', $id)
               : Wishlist::where('cookie_id', $cookie)->where('product_id', $id);

        if (!$query->exists()) {
            $wishlist = new Wishlist;
            $wishlist->cookie_id = !auth()->check() ? $cookie : null;
            $wishlist->user_id = auth()->check() ? auth()->id() : null;
            $wishlist->product_id = $id;
            $wishlist->save();
            return $this->res($cookie);
        }

        $query->delete();
        return $this->res($cookie);
    }

    public function res($cookie)
    {
        return auth()->check() ? back() : back()->cookie('cookie_id', $cookie, $this->expire);
    }
}
