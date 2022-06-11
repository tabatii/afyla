<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NapsController extends Controller
{

    public function success($id)
    {
        $this->afterPayment($id, 'naps');
        return inertia('OrderSuccess');
    }

    public function timeout()
    {
        return inertia('OrderFail');
    }

    public function fail()
    {
        return inertia('OrderFail');
    }
}
