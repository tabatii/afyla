<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SubscriptionController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:100|unique:subscriptions',
        ], [
            'email.unique' => 'This :attribute is already subscribed.'
        ]);

        $this->subscribe($request->email);

        return back();
    }
}
