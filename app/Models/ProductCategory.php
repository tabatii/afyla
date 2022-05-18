<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'category_id' => 'integer',
        'product_id' => 'integer',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
