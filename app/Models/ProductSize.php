<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use App\Mail\Soldout as SoldoutMail;

class ProductSize extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'product_id',
        'size_id',
        'qty',
    ];
    protected $casts = [
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

    protected static function booted()
    {
        static::created(function ($model) {
            $soldout = Soldout::where('product_id', $model->product_id)->where('size_id', $model->size_id)->first();
            $model->load('product', 'size');
            if ($model->qty > 0 && $soldout) {
                Mail::to($soldout->email)->queue(new SoldoutMail($model->product, $model->size));
                $soldout->delete();
            }
        });
    }
}
