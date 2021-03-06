<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddressRequest;
use App\Models\Address;

class AddressController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $addresses = Address::where('user_id', auth()->id())->get();
        return inertia('Addresses', compact('addresses'));
    }

    public function store(AddressRequest $request)
    {
        if ($request->default === true) {
            Address::where('user_id', auth()->id())->update(['default' => false]);
        }
        $address = new Address;
        $address->user_id = auth()->id();
        $address->firstname = $request->firstname;
        $address->lastname = $request->lastname;
        $address->phone = $request->phone;
        $address->street = $request->street;
        $address->city = $request->city;
        $address->state = $request->state;
        $address->zip = $request->zip;
        $address->country = $request->country;
        $address->default = $request->default;
        $address->save();
        return back();
    }

    public function update(AddressRequest $request, $id)
    {
        if ($request->default === true) {
            Address::where('user_id', auth()->id())->update(['default' => false]);
        }
        $address = Address::findOrFail($id);
        $address->firstname = $request->firstname;
        $address->lastname = $request->lastname;
        $address->phone = $request->phone;
        $address->street = $request->street;
        $address->city = $request->city;
        $address->state = $request->state;
        $address->zip = $request->zip;
        $address->country = $request->country;
        $address->default = $request->default;
        $address->save();
        return back();
    }

    public function destroy($id)
    {
        Address::where('id', $id)->delete();
        return back();
    }
}
