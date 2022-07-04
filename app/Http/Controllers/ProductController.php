<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilterRequest;
use App\Models\SubCategory;
use App\Models\Material;
use App\Models\Product;
use App\Models\Color;
use App\Models\Size;

class ProductController extends Controller
{

    public function index(FilterRequest $request)
    {
        $products = Product::with('colors.color', 'sizes.size', 'materials.material')->public()->filter($request->validated())->paginate(15);
        $subs = SubCategory::with('category')->get();
        $colors = Color::all();
        $sizes = Size::all();
        $materials = Material::all();
        return inertia('Shop', compact('products', 'subs', 'colors', 'sizes', 'materials'));
    }

    public function show($id)
    {
        $product = Product::with('categories.category', 'colors.color', 'sizes.size', 'materials.material', 'recommendations.product')
                          ->where('id', $id)->public()->firstOrFail();
        return inertia('Product', compact('product'));
    }
}
