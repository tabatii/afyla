<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Http\Requests\PasswordRequest;
use App\Models\Subscription;
use Carbon\Carbon;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function profile()
    {
        return inertia('Profile');
    }

    public function editProfile(ProfileRequest $request)
    {
        $user = auth()->user();
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->country = $request->country;
        $user->birthday = Carbon::parse($request->birthday);
        $user->phone = $request->phone;
        $user->save();

        if ($request->subscribe && !$user->sub) {
            $this->subscribe($user->email);
        } elseif (!$request->subscribe && $user->sub) {
            Subscription::where('email', $user->email)->delete();
        }

        return back();
    }

    public function password()
    {
        return inertia('PasswordChange');
    }

    public function editPassword(PasswordRequest $request)
    {
        $user = auth()->user();
        $user->password = bcrypt($request->new_password);
        $user->save();
        auth()->logoutOtherDevices($request->new_password);
        return back();
    }
}
