<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscription;

class SubscriptionController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->validate(['email' => 'required|email|max:100|unique:subscriptions']);
        $subscription = new Subscription;
        $subscription->email = $request->email;
        $subscription->save();
        return back();
    }
}
