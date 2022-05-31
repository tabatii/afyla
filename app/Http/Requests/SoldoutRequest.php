<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SoldoutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
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
            'email' => 'required|email|max:100',
        ];
    }
}
