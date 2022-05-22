<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Look;

class LookController extends Controller
{

    public function __invoke($id)
    {
        $looks = Look::with('collection', 'products')->where('collection_id', $id)->get();
        return inertia('Looks', compact('looks'));
    }
}
