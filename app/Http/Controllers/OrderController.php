<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddressRequest;
use App\Http\Requests\GuestRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Address;
use App\Models\Order;

class OrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->only(['index', 'show']);
    }

    public function index()
    {
        $orders = Order::where('user_id', auth()->id())->get();
        return inertia('Orders', compact('orders'));
    }

    public function create()
    {
        $addresses = Address::where('user_id', auth()->id())->get();
        return inertia('Checkout', compact('addresses'));
    }

    public function store(GuestRequest $guest, AddressRequest $address)
    {
        $order = new Order;
        $order->uuid = Str::random(20);
        $order->user_id = auth()->id();

        $order->guest_firstname = $guest->firstname;
        $order->guest_lastname = $guest->lastname;
        $order->guest_email = $guest->email;

        $order->address_firstname = $address->firstname;
        $order->address_lastname = $address->lastname;
        $order->address_street = $address->street;
        $order->address_city = $address->city;
        $order->address_state = $address->state;
        $order->address_zip = $address->zip;
        $order->address_country = $address->country;
        $order->address_phone = $address->phone;

        $order->order_amount = 100;
        $order->save();
    }

    public function show($id)
    {
        //
    }

    public function update(OrderRequest $request, $id)
    {
        //
    }
}
