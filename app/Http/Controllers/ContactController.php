<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;
use App\Mail\Contact;

class ContactController extends Controller
{

    public function create()
    {
        return inertia('Contact');
    }

    public function store(ContactRequest $request)
    {
        Mail::to(env('MAIL_FROM_ADDRESS'))->queue(new Contact($request->validated()));
        return back();
    }
}
