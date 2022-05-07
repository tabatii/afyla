<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilterRequest;
use App\Models\SubCategory;
use App\Models\Category;
use App\Models\Product;
use App\Models\Color;

class SearchController extends Controller
{

    public function index(FilterRequest $request)
    {
        $value = $request->search;
        $products = isset($value) ? Product::select('id', 'title', 'images')->public()->filter(['search' => $value])->take(3)->get() : [];
        $colors = isset($value) ? Color::where('name', 'like', '%'.$value.'%')->get() : [];
        $categories = isset($value) ? Category::where('name', 'like', '%'.$value.'%')->get() : [];
        $subs = isset($value) ? SubCategory::where('name', 'like', '%'.$value.'%')->get() : [];
        return response()->json(compact('products', 'colors', 'categories', 'subs'));
    }
}
