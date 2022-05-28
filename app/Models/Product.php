<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $appends = ['gallery'];
    protected $casts = [
        'price' => 'float',
        'discount' => 'float',
        'public' => 'boolean',
    ];

    public function collections()
    {
        return $this->hasMany(ProductCollection::class);
    }

    public function categories()
    {
        return $this->hasMany(ProductCategory::class);
    }

    public function subCategories()
    {
        return $this->hasMany(ProductSubCategory::class);
    }

    public function colors()
    {
        return $this->hasMany(ProductColor::class);
    }

    public function sizes()
    {
        return $this->hasMany(ProductSize::class);
    }

    public function materials()
    {
        return $this->hasMany(ProductMaterial::class);
    }

    public function recommendations()
    {
        return $this->hasMany(Recommendation::class);
    }

    public function getGalleryAttribute()
    {
        $array = [];
        foreach (json_decode($this->attributes['images']) as $image) {
            $array[] = Voyager::image($image);
        }
        return $array;
    }

    public function scopePublic($query)
    {
        return $query->where('public', true);
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
        if (isset($data['ids']) && is_array($data['ids'])) {
            $query->whereIn('id', $data['ids']);
        }
        if (isset($data['discounts'])) {
            $query->whereNotNull('discount')->where('discount', '!=', 0);
        }
        if (isset($data['collections']) && is_array($data['collections'])) {
            $query->whereHas('collections', function (Builder $q) use ($data) {
                $q->whereIn('collection_id', $data['collections']);
            });
        }
        if (isset($data['categories']) && is_array($data['categories'])) {
            $query->whereHas('categories', function (Builder $q) use ($data) {
                $q->whereIn('category_id', $data['categories']);
            });
        }
        if (isset($data['subs']) && is_array($data['subs'])) {
            $query->whereHas('subCategories', function (Builder $q) use ($data) {
                $q->whereIn('sub_category_id', $data['subs']);
            });
        }
        if (isset($data['colors']) && is_array($data['colors'])) {
            $query->whereHas('colors', function (Builder $q) use ($data) {
                $q->whereIn('color_id', $data['colors']);
            });
        }
        if (isset($data['materials']) && is_array($data['materials'])) {
            $query->whereHas('materials', function (Builder $q) use ($data) {
                $q->whereIn('material_id', $data['materials']);
            });
        }
        if (isset($data['sizes']) && is_array($data['sizes'])) {
            $query->whereHas('sizes', function (Builder $q) use ($data) {
                $q->whereIn('size_id', $data['sizes'])->whereNotNull('qty');
            });
        }
        switch ($data['sort'] ?? 'n') {
            case 'n':
                $query->orderBy('id', 'desc');
                break;
            case 'lp':
                $query->orderBy('price', 'asc');
                break;
            case 'hp':
                $query->orderBy('price', 'desc');
                break;
            case 'az':
                $query->orderBy('title', 'asc');
                break;
            case 'za':
                $query->orderBy('title', 'desc');
                break;
        }
        return $query;
    }
}
