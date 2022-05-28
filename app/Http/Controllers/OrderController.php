<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddressRequest;
use App\Http\Requests\GuestRequest;
use Illuminate\Support\Str;
use App\Models\ShippingCompany;
use App\Models\Address;
use App\Models\Order;

class OrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->only(['index']);
        $this->middleware('checkout')->only(['create']);
    }

    public function index()
    {
        $orders = Order::with('products')->where('user_id', auth()->id())->status()->get();
        return inertia('Orders', compact('orders'));
    }

    public function create()
    {
        $addresses = Address::where('user_id', auth()->id())->get();
        $companies = ShippingCompany::orderBy('order')->get();
        return inertia('Checkout', compact('addresses', 'companies'));
    }

    public function show($uuid)
    {
        $order = Order::with('products')->where('uuid', $uuid)->status()->first();
        return response()->json(compact('order'));
    }
}
