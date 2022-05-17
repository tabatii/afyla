<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Collection;
use App\Models\Category;
use App\Models\Wishlist;
use App\Models\Bag;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $ziggy = new \Tightenco\Ziggy\Ziggy($group = null, $request->url());
        $fields = ['name', 'email', 'email_verified_at', 'country', 'birthday', 'phone', 'sub', 'created_at'];
        $cookie = $request->cookie('cookie_id');
        return array_merge(parent::share($request), [
            'ziggy' => $ziggy->toArray(),
            'admin' => $request->user() && $request->user()->hasRole('admin') ? true : false,
            'auth' => $request->user() ? $request->user()->only($fields) : null,
            'categories' => Category::with('subCategories')->get(),
            'collections' => Collection::all(),
            'settings' => [
                'description' => setting('site.description'),
                'phone' => setting('contact.phone'),
                'email' => setting('contact.email'),
                'whatsapp' => setting('contact.whatsapp'),
                'wechat' => setting('contact.wechat'),
                'instagram' => setting('social.instagram'),
                'facebook' => setting('social.facebook'),
                'twitter' => setting('social.twitter'),
                'youtube' => setting('social.youtube'),
                'linkedin' => setting('social.linkedin'),
            ],
            'flash' => [
                'auth' => $request->session()->get('auth'),
            ],
            'bag' => Bag::when(auth()->check(), function ($query) {
                            $query->where('user_id', auth()->id());
                        }, function ($query) use ($cookie) {
                            $query->whereNotNull('cookie_id')->where('cookie_id', $cookie);
                        })->with('product.sizes.size', 'size')->get(),
            'wishlist' => Wishlist::when(auth()->check(), function ($query) {
                            $query->where('user_id', auth()->id());
                        }, function ($query) use ($cookie) {
                            $query->whereNotNull('cookie_id')->where('cookie_id', $cookie);
                        })->with('product.colors.color', 'product.materials.material', 'product.sizes.size')->get(),
        ]);
    }
}
