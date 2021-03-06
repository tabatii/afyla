<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
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
            'ids' => 'nullable|array',
            'ids.*' => 'integer',
            'collections' => 'nullable|array',
            'collections.*' => 'integer',
            'categories' => 'nullable|array',
            'categories.*' => 'integer',
            'subs' => 'nullable|array',
            'subs.*' => 'integer',
            'colors' => 'nullable|array',
            'colors.*' => 'integer',
            'materials' => 'nullable|array',
            'materials.*' => 'integer',
            'sizes' => 'nullable|array',
            'sizes.*' => 'integer',
            'sort' => 'nullable|string|max:10',
            'page' => 'nullable|integer',
            'search' => 'nullable|string|max:100',
            'tag' => 'nullable|string|max:100',
        ];
    }
}
