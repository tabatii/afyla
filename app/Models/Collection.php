<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;

class Collection extends Model
{
    use HasFactory;

    protected $appends = ['gallery'];

    public function getGalleryAttribute()
    {
        $array = [];
        foreach (json_decode($this->attributes['images']) as $image) {
            $array[] = Voyager::image($image);
        }
        return $array;
    }
}
