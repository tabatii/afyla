<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Soldout extends Mailable
{
    use Queueable, SerializesModels;

    public $product;
    public $size;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($product, $size)
    {
        $this->product = $product;
        $this->size = $size;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('The product you wanted is available now.')->view('emails.soldout');
    }
}
