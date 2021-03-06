<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Coupon extends Model
{
    use HasFactory, SoftDeletes;

    protected $casts = [
        'used' => 'boolean',
        'value' => 'float',
        'min' => 'float',
        'max' => 'float',
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->code)) {
                $model->code = strtoupper(Str::random(10));
            }
        });
    }
}
