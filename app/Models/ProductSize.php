<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSize extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $casts = [
        'product_id' => 'integer',
        'size_id' => 'integer',
        'qty' => 'integer',
    ];

    public function size()
    {
        return $this->belongsTo(Size::class);
    }
}
