<?php

namespace App\Http\Controllers;

use App\Models\Collection;

class CollectionController extends Controller
{

    public function __invoke($id)
    {
        $collection = Collection::findOrFail($id);
        return inertia('Collection', compact('collection'));
    }
}
