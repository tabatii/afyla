<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NapsController extends Controller
{

    public function success(Request $request)
    {
        return redirect()->route('orders', [
            'ref' => 'naps_success',
        ]);
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
