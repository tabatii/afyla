<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\ProductSize;

class BagRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $size = ProductSize::where('product_id', $this->product)->where('size_id', $this->size)->first();
        if ($this->qty <= $size->qty) {
            return true;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'product' => 'required|integer|exists:products,id',
            'size' => 'required|integer|exists:sizes,id',
            'qty' => 'required|integer|min:1|max:100',
        ];
    }
}
