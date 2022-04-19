<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilterRequest;
use App\Models\Product;
use App\Models\Color;
use App\Models\Size;

class ProductController extends Controller
{

    public function index(FilterRequest $request)
    {
        $products = Product::with('colors.color', 'sizes.size')->public()->filter($request->validated())->paginate();
        $colors = Color::all();
        $sizes = Size::all();
        return inertia('Shop', compact('products', 'colors', 'sizes'));
    }

    public function show($id)
    {
        $product = Product::with('colors.color', 'sizes.size')->where('id', $id)->public()->first();
        return inertia('Product', compact('product'));
    }
}
