<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishlist;
use App\Models\Product;

class WishlistController extends Controller
{

    protected $expire = 86400; // 60 days

    public function __construct()
    {
        $this->middleware('cookie')->except(['index', 'toggle']);
    }

    public function index()
    {
        return inertia('Wishlist');
    }

    public function toggle(Request $request, $id)
    {
        $cookie = $request->cookie('cookie_id') ?? Str::random(20);
        $query = Wishlist::where('cookie_id', $cookie)->where('product_id', $id);

        if (!$query->exists()) {
            $wishlist = new Wishlist;
            $wishlist->cookie_id = $cookie;
            $wishlist->user_id = auth()->check() ? auth()->id() : null;
            $wishlist->product_id = $id;
            $wishlist->save();
            return back()->cookie('cookie_id', $cookie, $this->expire);
        }

        $query->delete();
        return back()->cookie('cookie_id', $cookie, $this->expire);
    }
}
