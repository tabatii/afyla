<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSize extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'product_id',
        'size_id',
        'qty',
    ];

    public function size()
    {
        return $this->belongsTo(Size::class);
    }
}
