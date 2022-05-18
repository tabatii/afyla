<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductColor extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'product_id' => 'integer',
        'color_id' => 'integer',
    ];

    public function color()
    {
        return $this->belongsTo(Color::class);
    }
}
