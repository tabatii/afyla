<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderProcessing;
use App\Mail\OrderDelivered;
use App\Mail\OrderShipped;

class Order extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['status', 'created_at', 'updated_at', 'deleted_at'];
    protected $casts = [
        'shipping_company_id' => 'integer',
        'coupon_id' => 'integer',
        'user_id' => 'integer',
        'order_subtotal' => 'float',
        'order_shipping' => 'float',
        'created_at' => 'datetime:d-m-Y',
    ];

    const PROCESSING = 'processing';
    const SHIPPED = 'shipped';
    const DELIVERED = 'delivered';
    const CANCELLED = 'cancelled';

    public function products()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function delivery()
    {
        return $this->hasOne(DeliveryAddress::class);
    }

    public function billing()
    {
        return $this->hasOne(BillingAddress::class);
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

    protected static function booted()
    {
        static::updated(function ($model) {
            if ($model->status === static::PROCESSING) {
                Mail::to($model->user_email)->queue(new OrderProcessing($model));
            } elseif ($model->status === static::SHIPPED) {
                Mail::to($model->user_email)->queue(new OrderShipped($model));
            } elseif ($model->status === static::DELIVERED) {
                Mail::to($model->user_email)->queue(new OrderDelivered($model));
            }
        });
    }
}
