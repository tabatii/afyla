<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;

class OrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $orders = [];
        return inertia('Orders', compact('orders'));
    }

    public function create()
    {
        //
    }

    public function store(OrderRequest $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(OrderRequest $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
