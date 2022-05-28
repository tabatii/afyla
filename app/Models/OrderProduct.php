<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'order_id' => 'integer',
        'product_id' => 'integer',
        'size_id' => 'integer',
        'qty' => 'integer',
        'price' => 'float',
    ];
}
