<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
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
            'firstname' => 'required|string|max:50',
            'lastname' => 'required|string|max:50',
            'email' => 'required|email|max:100|unique:users',
            'country' => 'required|string|max:50',
            'birthday' => 'required|date',
            'subscribe' => 'required|boolean',
            'agree' => 'required|accepted',
            'redirect' => 'sometimes|string',
            'password' => [
                'required',
                Password::defaults(),
                'confirmed',
            ],
        ];
    }

    public function messages()
    {
        return [
            'agree.accepted' => 'You must agree to our terms and conditions.',
        ];
    }
}
