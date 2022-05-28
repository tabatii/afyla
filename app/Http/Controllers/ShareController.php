<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ShareOneRequest;
use App\Http\Requests\ShareAllRequest;
use App\Models\Product;
use App\Mail\Share;

class ShareController extends Controller
{

    public function one(ShareOneRequest $request)
    {
        $product = Product::where('id', $request->id)->with('colors.color', 'materials.material')->first();
        Mail::to($request->to)->send(new Share($request->from, $product));
        return back();
    }

    public function all(ShareAllRequest $request)
    {
        $products = Product::whereIn('id', $request->ids)->with('colors.color', 'materials.material')->get();
        Mail::to($request->to)->send(new Share($request->from, $products->all()));
        return back();
    }
}
