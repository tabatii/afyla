<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LookProduct extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'look_id' => 'integer',
        'product_id' => 'integer',
    ];
}
