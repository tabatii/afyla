<?php

namespace App\Http\Controllers;

use App\Models\Page;

class PageController extends Controller
{

    public function __invoke($slug)
    {
        $page = Page::where('slug', $slug)->firstOrFail();
        return inertia('Page', compact('page'));
    }
}
