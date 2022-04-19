<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use App\Models\Product;

class WishlistController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $wishlist = Wishlist::with('product', 'product.colors', 'product.colors.color', 'product.sizes.size')->where('user_id', auth()->id())->get();
        return inertia('Wishlist', compact('wishlist'));
    }

    public function update($id)
    {
        $product = Product::findOrFail($id);
        if ($product->wishlist === false) {
            $wishlist = new Wishlist;
            $wishlist->user_id = auth()->id();
            $wishlist->product_id = $id;
            $wishlist->save();
            return back();
        }
        $this->destroy($id);
        return back();
    }

    public function destroy($id)
    {
        return Wishlist::where('user_id', auth()->id())->where('product_id', $id)->delete();
    }
}
