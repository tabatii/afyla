<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\Wishlist;
use App\Models\User;
use App\Models\Bag;
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
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->country = $request->country;
        $user->birthday = Carbon::parse($request->birthday);
        $user->save();

        if ($request->subscribe) {
            $this->subscribe($user->email);
        }

        auth()->login($user);
        $user->sendEmailVerificationNotification();
        $this->saveGuestData($request->cookie('cookie_id'));

        return inertia()->location($request->redirect ?? route('profile'));
    }

    public function login(LoginRequest $request)
    {
        if (auth()->attempt($request->only(['email', 'password']), $request->remember)) {
            $this->saveGuestData($request->cookie('cookie_id'));
            return inertia()->location($request->redirect ?? route('profile'));
        }

        return back()->withErrors(['auth' => __('auth.failed')]);
    }

    public function logout()
    {
        auth()->logout();
        return redirect()->route('home');
    }

    public function saveGuestData($cookie)
    {
        $bag = Bag::where('user_id', auth()->id())->get();
        $bag->each(function ($item) use ($cookie) {
            Bag::whereNotNull('cookie_id')->where('cookie_id', $cookie)->where('product_id', $item->product_id)->where('size_id', $item->size_id)->delete();
        });
        Bag::whereNotNull('cookie_id')->where('cookie_id', $cookie)->update([
            'user_id' => auth()->id(),
            'cookie_id' => null,
        ]);

        $wishlist = Wishlist::where('user_id', auth()->id())->pluck('product_id');
        Wishlist::whereNotNull('cookie_id')->where('cookie_id', $cookie)->whereIn('product_id', $wishlist)->delete();
        Wishlist::whereNotNull('cookie_id')->where('cookie_id', $cookie)->update([
            'user_id' => auth()->id(),
            'cookie_id' => null,
        ]);

        cookie()->queue(cookie()->forget('cookie_id'));
    }
}
