<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCollection extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'product_id' => 'integer',
        'collection_id' => 'integer',
    ];
}
