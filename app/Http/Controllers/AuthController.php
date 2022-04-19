<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except(['register', 'login']);
        $this->middleware('guest')->only(['register', 'login']);
    }

    public function register(RegisterRequest $request)
    {
        $user = new User;
        $user->name = $request->firstname.' '.$request->lastname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        //$user->sendEmailVerificationNotification();
        auth()->login($user);

        return redirect()->route('profile');
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (auth()->attempt($credentials, $request->remember)) {
            return redirect()->route('profile');
        }
        return back()->withErrors(['auth' => __('auth.failed')]);
    }

    public function logout()
    {
        auth()->logout();
        return redirect()->route('home');
    }

    public function profile()
    {
        return inertia('Profile');
    }

    public function redirect()
    {
        return redirect()->route('home');
    }
}
