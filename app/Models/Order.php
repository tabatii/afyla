<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['status', 'created_at', 'updated_at', 'deleted_at'];
    protected $casts = [
        'created_at' => 'datetime:d-m-Y',
    ];

    public function products()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }

    public function getPaymentMethodAttribute()
    {
        return strtoupper($this->attributes['payment_method']);
    }

    public function scopeStatus($query)
    {
        return $query->whereNotNull('status');
    }
}
