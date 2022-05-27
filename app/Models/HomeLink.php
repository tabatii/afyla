<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;

class HomeLink extends Model
{
    use HasFactory, SoftDeletes;

    protected $appends = ['img'];

    public function getImgAttribute()
    {
        return Voyager::image($this->attributes['image']);
    }
}
