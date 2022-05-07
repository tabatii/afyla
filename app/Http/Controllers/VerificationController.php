<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

class VerificationController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only(['verify']);
        $this->middleware('throttle:6,1')->only(['send']);
    }

    public function notice()
    {
        //
    }

    public function verify(EmailVerificationRequest $request)
    {
        $request->fulfill();
        return redirect()->route('home');
    }

    public function send(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        return back();
    }
}
