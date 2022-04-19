<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
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
            'name' => 'required|string|max:100',
            'phone' => 'required|string|max:20',
            'street' => 'required|string|max:190',
            'details' => 'nullable|max:190',
            'city' => 'required|string|max:50',
            'state' => 'required|string|max:50',
            'zip' => 'required|string|max:10',
            'country' => 'required|string|max:50',
        ];
    }
}
