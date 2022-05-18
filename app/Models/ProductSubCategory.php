<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSubCategory extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'product_id' => 'integer',
        'sub_category_id' => 'integer',
    ];

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }
}
