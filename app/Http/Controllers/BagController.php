<?php

namespace App\Http\Controllers;

use App\Http\Requests\BagRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Product;
use App\Models\Bag;

class BagController extends Controller
{

    public function __construct()
    {
        $this->middleware('bag')->only(['destroy']);
    }

    public function index()
    {
        return inertia('Bag');
    }

    public function store(BagRequest $request)
    {
        $cookie = $request->cookie('bag_id') ?? Str::random(20);
        $query = Bag::where('bag_id', $cookie)->where('product_id', $request->product)->where('size_id', $request->size);

        if ($query->exists()) {
            $bag = $query->first();
            $bag->qty = $request->qty;
            $bag->save();
            return back()->cookie('bag_id', $cookie, 86400); // 86400 = 60 day
        }

        $bag = new Bag;
        $bag->bag_id = $cookie;
        $bag->user_id = auth()->check() ? auth()->id() : null;
        $bag->product_id = $request->product;
        $bag->size_id = $request->size;
        $bag->qty = $request->qty;
        $bag->save();

        return back()->cookie('bag_id', $cookie, 86400); // 86400 = 60 day
    }

    public function destroy(Request $request, $id)
    {
        Bag::where('bag_id', $request->cookie('bag_id'))->where('id', $id)->delete();
        return back();
    }
}
