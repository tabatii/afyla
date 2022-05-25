<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NapsController extends Controller
{

    public function success($id)
    {
        $this->afterPayment($id, 'naps');
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
