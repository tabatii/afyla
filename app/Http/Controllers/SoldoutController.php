<?php

namespace App\Http\Controllers;

use App\Http\Requests\SoldoutRequest;
use App\Models\ProductSize;
use App\Models\Soldout;

class SoldoutController extends Controller
{

    public function __invoke(SoldoutRequest $request)
    {
        $exists = Soldout::where('product_id', $request->product)->where('size_id', $request->size)->where('email', $request->email)->exists();
        $size = ProductSize::where('product_id', $request->product)->where('size_id', $request->size)->first();
        if (!$exists && $size->qty === 0) {
            $soldout = new Soldout;
            $soldout->product_id = $request->product;
            $soldout->size_id = $request->size;
            $soldout->email = $request->email;
            $soldout->save();
        }
        return back();
    }
}
