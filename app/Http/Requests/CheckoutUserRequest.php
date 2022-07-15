<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rule;

class CheckoutUserRequest extends FormRequest
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
            'uuid' => 'required|digits:15',
            'firstname' => 'required|string|max:50',
            'lastname' => 'required|string|max:50',
            'email' => [
                'required',
                'email',
                $this->save === true ? 'unique:users' : null,
                'max:100',
            ],
            'password' => [
                Rule::requiredIf($this->save === true),
                'nullable',
                Password::defaults(),
                'confirmed',
            ],
            'save' => 'required|boolean',
            'subscribe' => 'required|boolean',
        ];
    }
}
