<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\Subscription;
use App\Models\User;
use Carbon\Carbon;

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
        $user->country = $request->country;
        $user->birthday = Carbon::parse($request->birthday);
        $user->save();

        if ($request->subscribe) {
            $subscription = new Subscription;
            $subscription->email = $request->email;
            $subscription->save();
        }

        $user->sendEmailVerificationNotification();
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

    public function redirect()
    {
        return redirect()->route('home');
    }
}
