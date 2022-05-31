<?php

namespace App\Http\Controllers\Voyager;

use Illuminate\Support\Arr;
use TCG\Voyager\Events\BreadDataUpdated;
use TCG\Voyager\Events\BreadDataAdded;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Request;
use App\Models\ProductSubCategory;
use App\Models\ProductCollection;
use App\Models\ProductCategory;
use App\Models\ProductMaterial;
use App\Models\Recommendation;
use App\Models\SubCategory;
use App\Models\ProductColor;
use App\Models\ProductSize;

class ProductBreadController extends \TCG\Voyager\Http\Controllers\VoyagerBaseController
{
    public function store(Request $request)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Check permission
        $this->authorize('add', app($dataType->model_name));

        // Validate fields with ajax
        $val = $this->validateBread($request->all(), $dataType->addRows)->validate();
        $data = $this->insertUpdateData($request, $slug, $dataType->addRows, new $dataType->model_name());

        $this->storeRelatedData($request->all(), $data->id);

        event(new BreadDataAdded($dataType, $data));

        if (!$request->has('_tagging')) {
            if (auth()->user()->can('browse', $data)) {
                $redirect = redirect()->route("voyager.{$dataType->slug}.index");
            } else {
                $redirect = redirect()->back();
            }

            return $redirect->with([
                'message'    => __('voyager::generic.successfully_added_new')." {$dataType->getTranslatedAttribute('display_name_singular')}",
                'alert-type' => 'success',
            ]);
        } else {
            return response()->json(['success' => true, 'data' => $data]);
        }
    }

    public function update(Request $request, $id)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Compatibility with Model binding.
        $id = $id instanceof \Illuminate\Database\Eloquent\Model ? $id->{$id->getKeyName()} : $id;

        $model = app($dataType->model_name);
        $query = $model->query();
        if ($dataType->scope && $dataType->scope != '' && method_exists($model, 'scope'.ucfirst($dataType->scope))) {
            $query = $query->{$dataType->scope}();
        }
        if ($model && in_array(SoftDeletes::class, class_uses_recursive($model))) {
            $query = $query->withTrashed();
        }

        $data = $query->findOrFail($id);

        // Check permission
        $this->authorize('edit', $data);

        // Validate fields with ajax
        $val = $this->validateBread($request->all(), $dataType->editRows, $dataType->name, $id)->validate();

        // Get fields with images to remove before updating and make a copy of $data
        $to_remove = $dataType->editRows->where('type', 'image')
            ->filter(function ($item, $key) use ($request) {
                return $request->hasFile($item->field);
            });
        $original_data = clone($data);

        $this->insertUpdateData($request, $slug, $dataType->editRows, $data);

        $this->updateRelatedData($request->all(), $id);

        // Delete Images
        $this->deleteBreadImages($original_data, $to_remove);

        event(new BreadDataUpdated($dataType, $data));

        if (auth()->user()->can('browse', app($dataType->model_name))) {
            $redirect = redirect()->route("voyager.{$dataType->slug}.index");
        } else {
            $redirect = redirect()->back();
        }

        return $redirect->with([
            'message'    => __('voyager::generic.successfully_updated')." {$dataType->getTranslatedAttribute('display_name_singular')}",
            'alert-type' => 'success',
        ]);
    }

    public function storeRelatedData($data, $id)
    {
        $collections = $categories = $subCategories = $colors = $materials = $stock = $recommendations = [];
        if (isset($data['collections'])) {
            foreach ($data['collections'] as $i => $collection) {
                $collections[$i]['product_id'] = $id;
                $collections[$i]['collection_id'] = $collection;
            }
            ProductCollection::insert($collections);
        }
        if (isset($data['subCategories'])) {
            foreach ($data['subCategories'] as $i => $sub) {
                $category = SubCategory::with('category')->where('id', $sub)->first()->category;
                $subCategories[$i]['product_id'] = $id;
                $subCategories[$i]['sub_category_id'] = $sub;
                if (count(Arr::where($categories, fn ($value) => $value['category_id'] === $category->id)) === 0) {
                    $categories[$i]['product_id'] = $id;
                    $categories[$i]['category_id'] = $category->id;
                }
            }
            ProductSubCategory::insert($subCategories);
            ProductCategory::insert($categories);
        }
        if (isset($data['colors'])) {
            foreach ($data['colors'] as $i => $color) {
                $colors[$i]['product_id'] = $id;
                $colors[$i]['color_id'] = $color;
            }
            ProductColor::insert($colors);
        }
        if (isset($data['materials'])) {
            foreach ($data['materials'] as $i => $material) {
                $materials[$i]['product_id'] = $id;
                $materials[$i]['material_id'] = $material;
            }
            ProductMaterial::insert($materials);
        }
        if (isset($data['stock'])) {
            foreach ($data['stock'] as $i => $item) {
                $stock[$i]['product_id'] = $id;
                $stock[$i]['size_id'] = $item['size'];
                $stock[$i]['qty'] = $item['qty'];
            }
            ProductSize::insert($stock);
        }
        if (isset($data['recommendations'])) {
            foreach ($data['recommendations'] as $i => $product) {
                $recommendations[$i]['product_id'] = $id;
                $recommendations[$i]['recommendation_id'] = $product;
            }
            Recommendation::insert($recommendations);
        }
    }

    public function updateRelatedData($data, $id)
    {
        $collections = $categories = $subCategories = $colors = $materials = $stock = $recommendations = [];
        if (isset($data['collections'])) {
            foreach ($data['collections'] as $i => $collection) {
                $collections[$i]['product_id'] = $id;
                $collections[$i]['collection_id'] = $collection;
            }
            ProductCollection::where('product_id', $id)->delete();
            ProductCollection::insert($collections);
        }
        if (isset($data['subCategories'])) {
            foreach ($data['subCategories'] as $i => $sub) {
                $category = SubCategory::with('category')->where('id', $sub)->first()->category;
                $subCategories[$i]['product_id'] = $id;
                $subCategories[$i]['sub_category_id'] = $sub;
                if (count(Arr::where($categories, fn ($value) => $value['category_id'] === $category->id)) === 0) {
                    $categories[$i]['product_id'] = $id;
                    $categories[$i]['category_id'] = $category->id;
                }
            }
            ProductSubCategory::where('product_id', $id)->delete();
            ProductCategory::where('product_id', $id)->delete();
            ProductSubCategory::insert($subCategories);
            ProductCategory::insert($categories);
        }
        if (isset($data['colors'])) {
            foreach ($data['colors'] as $i => $color) {
                $colors[$i]['product_id'] = $id;
                $colors[$i]['color_id'] = $color;
            }
            ProductColor::where('product_id', $id)->delete();
            ProductColor::insert($colors);
        }
        if (isset($data['materials'])) {
            foreach ($data['materials'] as $i => $material) {
                $materials[$i]['product_id'] = $id;
                $materials[$i]['material_id'] = $material;
            }
            ProductMaterial::where('product_id', $id)->delete();
            ProductMaterial::insert($materials);
        }
        if (isset($data['stock'])) {
            ProductSize::where('product_id', $id)->delete();
            foreach ($data['stock'] as $i => $item) {
                $stock[$i]['product_id'] = $id;
                $stock[$i]['size_id'] = $item['size'];
                $stock[$i]['qty'] = $item['qty'];
                ProductSize::create($stock[$i]);
            }
        }
        if (isset($data['recommendations'])) {
            foreach ($data['recommendations'] as $i => $product) {
                $recommendations[$i]['product_id'] = $id;
                $recommendations[$i]['recommendation_id'] = $product;
            }
            Recommendation::where('product_id', $id)->delete();
            Recommendation::insert($recommendations);
        }
    }
}
