<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', \App\Http\Controllers\HomeController::class)->name('home');

Route::inertia('/about', 'About')->name('about');
Route::inertia('/sustainability', 'Sustainability')->name('sustainability');
Route::inertia('/customer-care', 'CustomerCare')->name('customer');
Route::inertia('/faq', 'Faq')->name('faq');

Route::get('/pages/{slug}', \App\Http\Controllers\PageController::class)->name('page');
Route::get('/search', \App\Http\Controllers\SearchController::class)->name('search');

// Contact routes
Route::get('/contact', [\App\Http\Controllers\ContactController::class, 'create'])->name('contact');
Route::post('/contact', [\App\Http\Controllers\ContactController::class, 'store']);

// Auth routes
Route::post('/auth/register', [\App\Http\Controllers\AuthController::class, 'register'])->name('register');
Route::post('/auth/login', [\App\Http\Controllers\AuthController::class, 'login'])->name('login');
Route::get('/auth/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
Route::get('/auth/facebook/redirect', [\App\Http\Controllers\FacebookController::class, 'redirect'])->name('facebook');
Route::get('/auth/facebook/callback', [\App\Http\Controllers\FacebookController::class, 'callback']);
Route::get('/auth/google/redirect', [\App\Http\Controllers\GoogleController::class, 'redirect'])->name('google');
Route::get('/auth/google/callback', [\App\Http\Controllers\GoogleController::class, 'callback']);

// Verification routes
Route::get('/email/verify', [\App\Http\Controllers\VerificationController::class, 'notice'])->name('verification.notice');
Route::get('/email/verify/{id}/{hash}', [\App\Http\Controllers\VerificationController::class, 'verify'])->name('verification.verify');
Route::post('/email/verification-notification', [\App\Http\Controllers\VerificationController::class, 'send'])->name('verification.send');

// Forgot-password routes
Route::get('/reset-password/{token}', [\App\Http\Controllers\PasswordResetController::class, 'reset'])->name('password.reset');
Route::post('/reset-password', [\App\Http\Controllers\PasswordResetController::class, 'update'])->name('password.update');
Route::post('/forgot-password', [\App\Http\Controllers\PasswordResetController::class, 'send'])->name('password.send');

// Account routes
Route::get('/account/profile', [\App\Http\Controllers\UserController::class, 'profile'])->name('profile');
Route::put('/account/profile', [\App\Http\Controllers\UserController::class, 'editProfile']);
Route::get('/account/password', [\App\Http\Controllers\UserController::class, 'password'])->name('password');
Route::patch('/account/password', [\App\Http\Controllers\UserController::class, 'editPassword']);

// Product routes
Route::get('/shop', [\App\Http\Controllers\ProductController::class, 'index'])->name('shop');
Route::get('/product/{id}', [\App\Http\Controllers\ProductController::class, 'show'])->name('product');

// Collection routes
Route::get('/collection/{id}', \App\Http\Controllers\CollectionController::class)->name('collection');
Route::get('/collection/{id}/looks', \App\Http\Controllers\LookController::class)->name('looks');

// Naps routes
Route::get('/naps/success', [\App\Http\Controllers\NapsController::class, 'success'])->name('naps.success');
Route::get('/naps/timeout', [\App\Http\Controllers\NapsController::class, 'timeout'])->name('naps.timeout');
Route::get('/naps/fail', [\App\Http\Controllers\NapsController::class, 'fail'])->name('naps.fail');

// Paypal routes
Route::post('/paypal/create', [\App\Http\Controllers\PaypalController::class, 'create'])->name('paypal.create');
Route::post('/paypal/capture', [\App\Http\Controllers\PaypalController::class, 'capture'])->name('paypal.capture');

// Order routes
Route::get('/orders', [\App\Http\Controllers\OrderController::class, 'index'])->name('orders');
Route::get('/checkout', [\App\Http\Controllers\OrderController::class, 'create'])->name('checkout');
Route::post('/checkout/steps/user', [\App\Http\Controllers\CheckoutController::class, 'user'])->name('checkout.user');
Route::post('/checkout/steps/address', [\App\Http\Controllers\CheckoutController::class, 'address'])->name('checkout.address');
Route::post('/checkout/steps/shipping', [\App\Http\Controllers\CheckoutController::class, 'shipping'])->name('checkout.shipping');

// Coupon routes
Route::post('/coupon', \App\Http\Controllers\CouponController::class)->name('coupon');

// Bag routes
Route::get('/bag', [\App\Http\Controllers\BagController::class, 'index'])->name('bag');
Route::post('/bag', [\App\Http\Controllers\BagController::class, 'store'])->name('bag.add');
Route::delete('/bag/{id}', [\App\Http\Controllers\BagController::class, 'destroy'])->name('bag.delete');
Route::patch('/bag/plus/{id}', [\App\Http\Controllers\BagController::class, 'plus'])->name('bag.plus');
Route::patch('/bag/minus/{id}', [\App\Http\Controllers\BagController::class, 'minus'])->name('bag.minus');
Route::patch('/bag/size/{id}', [\App\Http\Controllers\BagController::class, 'size'])->name('bag.size');

// Wishlist routes
Route::get('/wishlist', [\App\Http\Controllers\WishlistController::class, 'index'])->name('wishlist');
Route::post('/wishlist/{id}', [\App\Http\Controllers\WishlistController::class, 'toggle'])->name('wishlist.toggle');

// Share routes
Route::post('/share/one', [\App\Http\Controllers\ShareController::class, 'one'])->name('share.one');
Route::post('/share/all', [\App\Http\Controllers\ShareController::class, 'all'])->name('share.all');

// Address routes
Route::get('/addresses', [\App\Http\Controllers\AddressController::class, 'index'])->name('addresses');
Route::post('/address', [\App\Http\Controllers\AddressController::class, 'store'])->name('address.add');
Route::put('/address/{id}', [\App\Http\Controllers\AddressController::class, 'update'])->name('address.edit');
Route::delete('/address/{id}', [\App\Http\Controllers\AddressController::class, 'destroy'])->name('address.delete');

// Subscription routes
Route::post('/subscription', \App\Http\Controllers\SubscriptionController::class)->name('subscription.add');


// Voyager routes
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::get('/login', [\App\Http\Controllers\AuthController::class, 'redirect'])->name('voyager.login');
    Route::post('/login', [\App\Http\Controllers\AuthController::class, 'redirect'])->name('voyager.postlogin');
});

// Artisan routes
/*
Route::group(['prefix' => 'artisan'], function () {
    Route::get('init', function () {
        Artisan::call('config:clear');
        Artisan::call('migrate:fresh');
        Artisan::call('db:seed', [
            '--class' => 'VoyagerDatabaseSeeder',
        ]);
        return 'done';
    });
});
*/