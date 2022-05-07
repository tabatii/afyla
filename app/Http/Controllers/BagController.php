<?php

namespace App\Http\Controllers;

use App\Http\Requests\BagRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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
        return inertia('Bag');
    }

    public function store(BagRequest $request)
    {
        $cookie = $request->cookie('cookie_id') ?? Str::random(20);
        $query = Bag::where('cookie_id', $cookie)->where('product_id', $request->product)->where('size_id', $request->size);

        if ($query->exists()) {
            $bag = $query->first();
            $bag->qty = $request->qty;
            $bag->save();
            return back()->cookie('cookie_id', $cookie, $this->expire);
        }

        $bag = new Bag;
        $bag->cookie_id = $cookie;
        $bag->user_id = auth()->check() ? auth()->id() : null;
        $bag->product_id = $request->product;
        $bag->size_id = $request->size;
        $bag->qty = $request->qty;
        $bag->save();

        return back()->cookie('cookie_id', $cookie, $this->expire);
    }

    public function destroy(Request $request, $id)
    {
        Bag::where('cookie_id', $request->cookie('cookie_id'))->where('id', $id)->delete();
        return back();
    }

    public function plus(Request $request, $id)
    {
        $cookie = $request->cookie('cookie_id');
        $bag = Bag::where('cookie_id', $cookie)->where('id', $id)->first();
        $bag->qty = ($bag->qty < 100) ? $bag->qty + 1 : $bag->qty;
        $bag->save();
        return back()->cookie('cookie_id', $cookie, $this->expire);
    }

    public function minus(Request $request, $id)
    {
        $cookie = $request->cookie('cookie_id');
        $bag = Bag::where('cookie_id', $cookie)->where('id', $id)->first();
        $bag->qty = ($bag->qty > 1) ? $bag->qty - 1 : $bag->qty;
        $bag->save();
        return back()->cookie('cookie_id', $cookie, $this->expire);
    }

    public function size(Request $request, $id)
    {
        $request->validate(['size' => 'required|integer|exists:sizes,id']);
        $cookie = $request->cookie('cookie_id');
        $bag = Bag::where('cookie_id', $cookie)->where('id', $id)->first();
        $bag->size_id = $request->size;
        $bag->save();
        return back()->cookie('cookie_id', $cookie, $this->expire);
    }
}
