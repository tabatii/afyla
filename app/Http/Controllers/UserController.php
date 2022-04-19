<?php

namespace App\Http\Controllers;

use App\Http\Requests\PasswordRequest;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function firstname(Request $request)
    {
        $request->validate(['firstname' => 'required|alpha']);
        $user = auth()->user();
        $name = explode(' ', $user->name);
        $user->name = $request->firstname .' '. end($name);
        $user->save();
        return back();
    }

    public function lastname(Request $request)
    {
        $request->validate(['lastname' => 'required|alpha']);
        $user = auth()->user();
        $user->name = explode(' ', $user->name)[0] .' '. $request->lastname;
        $user->save();
        return back();
    }

    public function password(PasswordRequest $request)
    {
        $user = auth()->user();
        $user->password = bcrypt($request->new_password);
        $user->save();
        return back();
    }
}
