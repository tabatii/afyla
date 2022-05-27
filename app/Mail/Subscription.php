<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Subscription extends Mailable
{
    use Queueable, SerializesModels;

    public $coupon;
    public $expire;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($coupon, $expire)
    {
        $this->coupon = $coupon;
        $this->expire = $expire;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Thank you for joining us')->view('emails.subscription');
    }
}
