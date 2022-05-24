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
        $orders = Order::with('products')->where('user_id', auth()->id())->whereNotNull('status')->get();
        return inertia('Orders', compact('orders'));
    }

    public function create()
    {
        $addresses = Address::where('user_id', auth()->id())->get();
        $companies = ShippingCompany::orderBy('orderby')->get();
        return inertia('Checkout', compact('addresses', 'companies'));
    }
}
