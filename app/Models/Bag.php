<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bag extends Model
{
    use HasFactory;

    protected $casts = [
        'user_id' => 'integer',
        'product_id' => 'integer',
        'size_id' => 'integer',
        'qty' => 'integer',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function size()
    {
        return $this->belongsTo(Size::class);
    }

    public function scopeAuthOrGuest($query)
    {
        if (auth()->check()) {
            return $query->whereNotNull('user_id')->where('user_id', auth()->id());
        }
        return $query->whereNotNull('cookie_id')->where('cookie_id', request()->cookie('cookie_id'));
    }
}
