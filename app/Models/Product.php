<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;

class Product extends Model
{
    use HasFactory;

    protected $appends = ['gallery', 'wishlist'];

    public function categories()
    {
        return $this->hasMany(ProductCategory::class);
    }

    public function colors()
    {
        return $this->hasMany(ProductColor::class);
    }

    public function sizes()
    {
        return $this->hasMany(ProductSize::class);
    }

    public function getGalleryAttribute()
    {
        $array = [];
        foreach (json_decode($this->attributes['images']) as $image) {
            $array[] = Voyager::image($image);
        }
        return $array;
    }

    public function getWishlistAttribute()
    {
        if (auth()->check() && Wishlist::where('user_id', auth()->id())->where('product_id', $this->attributes['id'])->exists()) {
            return true;
        }
        return false;
    }

    public function scopePublic($query)
    {
        return $query->where('status', true);
    }

    public function scopeFilter($query, $data)
    {
        if (isset($data['search'])) {
            $array = explode(' ', $data['search']);
            foreach ($array as $i => $value) {
                if ($i === 0) {
                    $query->where('title', 'like', '%'.$value.'%');
                    continue;
                }
                $query->orWhere('title', 'like', '%'.$value.'%');
            }
        }
        if (isset($data['categories']) && is_array($data['categories'])) {
            $query->whereHas('categories', function (Builder $q) use ($data) {
                $q->whereIn('category_id', $data['categories']);
            });
        }
        if (isset($data['colors']) && is_array($data['colors'])) {
            $query->whereHas('colors', function (Builder $q) use ($data) {
                $q->whereIn('color_id', $data['colors']);
            });
        }
        if (isset($data['sizes']) && is_array($data['sizes'])) {
            $query->whereHas('sizes', function (Builder $q) use ($data) {
                $q->whereIn('size_id', $data['sizes'])->whereNotNull('qty');
            });
        }
        switch ($data['sort'] ?? 'r') {
            case 'r':
                $query->orderBy('id', 'asc');
                break;
            case 'n':
                $query->orderBy('id', 'desc');
                break;
            case 'lp':
                $query->orderBy('price', 'asc');
                break;
            case 'hp':
                $query->orderBy('price', 'desc');
                break;
        }
        return $query;
    }
}
