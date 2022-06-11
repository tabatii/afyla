<?php

namespace App\Repositories;

class BagRepository
{

    public function getById($id, $cookie) {
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $cookie];
        return $bag = Bag::where($condition)->where('id', $id)->first();
    }

    public function isExists($bag, $cookie) {
        $condition = auth()->check() ? ['user_id' => auth()->id()] : ['cookie_id' => $cookie];
        return $bag->where($condition)->where('product_id', $bag->product_id)->where('size_id', $request->size)->exists()
    }

    public function increment($id, $cookie) {
        $bag = $this->getById($id, $cookie);
        $size = ProductSize::where('product_id', $bag->product_id)->where('size_id', $bag->size_id)->first();
        $bag->qty = ($bag->qty < $size->qty) ? $bag->qty + 1 : $bag->qty;
        return $bag->save();
    }

    public function decrement() {
        $bag = Bag::where('id', $id)->where($condition)->first();
        $bag->qty = ($bag->qty > 1) ? $bag->qty - 1 : $bag->qty;
        return $bag->save();
    }

    public function size($id, $size $cookie)
    {
        $bag = $this->getById($id, $cookie);
        if (! $this->getById($bag, $cookie)) {
            $bag->size_id = $size;
            return $bag->save();
        }
    }
}
