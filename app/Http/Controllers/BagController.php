<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\BagRequest;
use App\Models\ShippingCompany;
use App\Models\ProductSize;
use App\Models\Bag;

class BagController extends Controller
{

    protected $expire = 86400; // 60 days

    public function __construct()
    {
        $this->middleware('cookie')->except(['index', 'store']);
    }

    public function index()
    {
        $companies = ShippingCompany::orderBy('order')->get();
        return inertia('Bag', compact('companies'));
    }

    public function store(BagRequest $request)
    {
        $cookie = $request->cookie('cookie_id') ?? Str::random(20);
        $query = auth()->check()
               ? Bag::where('user_id', auth()->id())->where('product_id', $request->product)->where('size_id', $request->size)
               : Bag::where('cookie_id', $cookie)->where('product_id', $request->product)->where('size_id', $request->size);

        if ($query->exists()) {
            $bag = $query->first();
            $bag->qty = $request->qty;
            $bag->save();
            return $this->res($cookie);
        }

        $bag = new Bag;
        $bag->cookie_id = !auth()->check() ? $cookie : null;
        $bag->user_id = auth()->id();
        $bag->product_id = $request->product;
        $bag->size_id = $request->size;
        $bag->qty = $request->qty;
        $bag->save();

        return $this->res($cookie);
    }

    public function destroy(Request $request, $id)
    {
        $cookie = $request->cookie('cookie_id');
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $cookie];
        Bag::where('id', $id)->where($condition)->delete();
        return $this->res($cookie);
    }

    public function plus(Request $request, $id)
    {
        $cookie = $request->cookie('cookie_id');
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $cookie];

        $bag = Bag::where('id', $id)->where($condition)->first();
        $size = ProductSize::where('product_id', $bag->product_id)->where('size_id', $bag->size_id)->first();

        $bag->qty = ($bag->qty < $size->qty) ? $bag->qty + 1 : $bag->qty;
        $bag->save();

        return $this->res($cookie);
    }

    public function minus(Request $request, $id)
    {
        $cookie = $request->cookie('cookie_id');
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $cookie];

        $bag = Bag::where('id', $id)->where($condition)->first();
        $bag->qty = ($bag->qty > 1) ? $bag->qty - 1 : $bag->qty;
        $bag->save();

        return $this->res($cookie);
    }

    public function size(Request $request, $id)
    {
        $request->validate(['size' => 'required|integer|exists:sizes,id']);
        $cookie = $request->cookie('cookie_id');
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $cookie];

        $bag = Bag::where('id', $id)->where($condition)->first();
        $bag->size_id = $request->size;
        $bag->save();

        return $this->res($cookie);
    }

    public function res($cookie)
    {
        return auth()->check() ? back() : back()->cookie('cookie_id', $cookie, $this->expire);
    }
}
