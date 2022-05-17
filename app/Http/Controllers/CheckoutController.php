<?php

namespace App\Http\Controllers;

use App\Models\Address;

class CheckoutController extends Controller
{

    public function __construct()
    {
        $this->middleware('cookie');
    }

    public function index()
    {
        $addresses = Address::where('user_id', auth()->id())->get();
        return inertia('Checkout');
    }
}
