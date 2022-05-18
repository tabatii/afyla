<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductMaterial extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'product_id' => 'integer',
        'material_id' => 'integer',
    ];

    public function material()
    {
        return $this->belongsTo(Material::class);
    }
}
