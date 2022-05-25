<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NapsController extends Controller
{

    public function success(Request $request, $uuid)
    {
        $this->afterPayment($request->uuid, 'naps');
        return redirect()->route('orders');
    }

    public function timeout()
    {
        return redirect()->route('checkout', [
            'ref' => 'naps_timeout',
        ]);
    }

    public function fail()
    {
        return redirect()->route('checkout', [
            'ref' => 'naps_fail',
        ]);
    }
}
