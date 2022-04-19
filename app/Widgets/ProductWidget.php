<?php

namespace App\Widgets;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;
use App\Models\Product;

class ProductWidget extends BaseDimmer
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = Product::count();
        $string = trans_choice('Product|Products', $count);

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-shop',
            'title'  => "{$count} {$string}",
            'text'   => 'You have '.$count.' '.Str::lower($string).' in your database. Click on button below to view all products.',
            'button' => [
                'text' => 'View all products',
                'link' => route('voyager.products.index'),
            ],
            'image' => voyager_asset('images/widget-backgrounds/02.jpg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', app(Product::class));
    }
}
