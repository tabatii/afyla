<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'firstname' => 'required|alpha|max:50',
            'lastname' => 'required|alpha|max:50',
            'email' => 'required|email|max:100|unique:users',
            'password' => 'required|string|min:6|max:100|confirmed',
            'country' => 'required|alpha|max:50',
            'birthday' => 'required|date',
            'subscribe' => 'required|boolean',
            'agree' => 'required|accepted',
        ];
    }

    public function messages()
    {
        return [
            'agree.accepted' => 'You must agree to our terms and conditions.',
        ];
    }
}
