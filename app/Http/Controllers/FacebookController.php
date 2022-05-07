<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use App\Models\Social;
use App\Models\User;

class FacebookController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function redirect()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function callback()
    {
        $facebook = Socialite::driver('facebook')->user();
        $emailExistsWithoutSocial = User::where('email', $facebook->getEmail())->doesntHave('social')->exists();
        $emailExistsWithDifferentProvider = User::where('email', $facebook->getEmail())->whereRelation('social', 'provider', '!=', 'facebook')->exists();

        if ($emailExistsWithoutSocial || $emailExistsWithDifferentProvider) {
            return redirect()->route('home')->with('auth', 'You already have an account with that email address.');
        }

        if ($account = Social::where('social_id', $facebook->getId())->first()) {
            auth()->login($account->user);
            return redirect()->route('profile');
        }

        $user = new User;
        $user->name = $facebook->getName();
        $user->email = $facebook->getEmail();
        $user->password = bcrypt(Str::random(16));
        $user->save();

        $social = new Social;
        $social->user_id = $user->id;
        $social->social_id = $facebook->getId();
        $social->provider = 'facebook';
        $social->save();

        auth()->login($user);

        return redirect()->route('profile');
    }
}
