<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recommendation extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'product_id' => 'integer',
        'recommendation_id' => 'integer',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'recommendation_id');
    }
}
