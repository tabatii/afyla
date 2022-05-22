<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use App\Models\Social;
use App\Models\User;

class GoogleController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        $google = Socialite::driver('google')->user();
        $emailExistsWithoutSocial = User::where('email', $google->getEmail())->doesntHave('social')->exists();
        $emailExistsWithDifferentProvider = User::where('email', $google->getEmail())->whereRelation('social', 'provider', '!=', 'google')->exists();

        if ($emailExistsWithoutSocial || $emailExistsWithDifferentProvider) {
            return redirect()->route('home')->with('auth', 'You already have an account with that email address.');
        }

        if ($account = Social::where('social_id', $google->getId())->first()) {
            auth()->login($account->user);
            return redirect()->route('profile');
        }

        $user = new User;
        $user->firstname = $google->user['given_name'] ?? '';
        $user->lastname = $google->user['family_name'] ?? '';
        $user->email = $google->getEmail();
        $user->password = bcrypt(Str::random(16));
        $user->save();

        $social = new Social;
        $social->user_id = $user->id;
        $social->social_id = $google->getId();
        $social->provider = 'google';
        $social->save();

        auth()->login($user);

        return redirect()->route('profile');
    }
}
