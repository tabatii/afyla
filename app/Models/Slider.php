<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;

class Slider extends Model
{
    use HasFactory;

    protected $appends = ['web', 'mobile'];

    public function getWebAttribute()
    {
        return Voyager::image($this->attributes['web_image']);
    }

    public function getMobileAttribute()
    {
        return Voyager::image($this->attributes['mobile_image']);
    }
}
