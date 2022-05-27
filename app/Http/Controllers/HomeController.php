<?php

namespace App\Http\Controllers;

use App\Models\HomeLink;
use App\Models\Slider;

class HomeController extends Controller
{

    public function __invoke()
    {
        $sliders = Slider::orderBy('order')->get();
        $links = HomeLink::orderBy('order')->get();
        return inertia('Home', compact('sliders', 'links'));
    }
}
