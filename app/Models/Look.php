<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;

class Look extends Model
{
    use HasFactory, SoftDeletes;

    protected $appends = ['img'];
    protected $casts = [
        'collection_id' => 'integer',
    ];

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }

    public function products()
    {
        return $this->hasMany(LookProduct::class);
    }

    public function getImgAttribute()
    {
        return Voyager::image($this->attributes['image']);
    }
}
