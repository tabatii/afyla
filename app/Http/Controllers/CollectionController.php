<?php

namespace App\Http\Controllers;

use App\Models\Collection;

class CollectionController extends Controller
{

    public function show($id)
    {
        $collection = Collection::findOrFail($id);
        return inertia('Collection', compact('collection'));
    }
}
