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
        Mail::send(new Contact($request->validated()));
        return back();
    }
}
