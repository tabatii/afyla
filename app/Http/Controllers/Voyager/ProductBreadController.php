<?php

namespace App\Http\Controllers\Voyager;

use TCG\Voyager\Events\BreadDataDeleted;
use TCG\Voyager\Events\BreadDataUpdated;
use TCG\Voyager\Events\BreadDataAdded;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
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
        $categories = $colors = $stock = [];
        if (isset($data['categories'])) {
            foreach ($data['categories'] as $i => $category) {
                $categories[$i]['product_id'] = $id;
                $categories[$i]['category_id'] = $category;
            }
            ProductCategory::insert($categories);
        }
        if (isset($data['colors'])) {
            foreach ($data['colors'] as $i => $color) {
                $colors[$i]['product_id'] = $id;
                $colors[$i]['color_id'] = $color;
            }
            ProductColor::insert($colors);
        }
        if (isset($data['stock'])) {
            foreach ($data['stock'] as $i => $item) {
                $stock[$i]['product_id'] = $id;
                $stock[$i]['size_id'] = $item['size'];
                $stock[$i]['qty'] = $item['qty'];
            }
            ProductSize::insert($stock);
        }
    }

    public function updateRelatedData($data, $id)
    {
        $categories = $colors = $stock = [];
        if (isset($data['categories'])) {
            foreach ($data['categories'] as $i => $category) {
                $categories[$i]['product_id'] = $id;
                $categories[$i]['category_id'] = $category;
            }
            ProductCategory::where('product_id', $id)->delete();
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
        if (isset($data['stock'])) {
            foreach ($data['stock'] as $i => $item) {
                $stock[$i]['product_id'] = $id;
                $stock[$i]['size_id'] = $item['size'];
                $stock[$i]['qty'] = $item['qty'];
            }
            ProductSize::where('product_id', $id)->delete();
            ProductSize::insert($stock);
        }
    }
}
