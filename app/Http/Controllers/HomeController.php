<?php

namespace App\Http\Controllers;

use App\Models\Slider;

class HomeController extends Controller
{

    public function index()
    {
        $sliders = Slider::orderBy('order')->get();
        return inertia('Home', compact('sliders'));
    }
}
