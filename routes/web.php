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

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Auth routes
Route::post('/auth/register', [\App\Http\Controllers\AuthController::class, 'register'])->name('register');
Route::post('/auth/login', [\App\Http\Controllers\AuthController::class, 'login'])->name('login');
Route::get('/auth/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');

// Account routes
Route::get('/account/profile', [\App\Http\Controllers\AuthController::class, 'profile'])->name('profile');
Route::post('/account/firstname', [\App\Http\Controllers\UserController::class, 'firstname'])->name('firstname');
Route::post('/account/lastname', [\App\Http\Controllers\UserController::class, 'lastname'])->name('lastname');
Route::post('/account/password', [\App\Http\Controllers\UserController::class, 'password'])->name('password');

// Product routes
Route::get('/shop', [\App\Http\Controllers\ProductController::class, 'index'])->name('shop');
Route::get('/product/{id}', [\App\Http\Controllers\ProductController::class, 'show'])->name('product');

// Order routes
Route::get('/orders', [\App\Http\Controllers\OrderController::class, 'index'])->name('orders');

// Bag routes
Route::get('/bag', [\App\Http\Controllers\BagController::class, 'index'])->name('bag');
Route::post('/bag', [\App\Http\Controllers\BagController::class, 'store'])->name('bag.add');
Route::delete('/bag/{id}', [\App\Http\Controllers\BagController::class, 'destroy'])->name('bag.delete');

// Wishlist routes
Route::get('/wishlist', [\App\Http\Controllers\WishlistController::class, 'index'])->name('wishlist');
Route::post('/wishlist/{id}', [\App\Http\Controllers\WishlistController::class, 'update'])->name('wishlist.edit');

// Address routes
Route::get('/addresses', [\App\Http\Controllers\AddressController::class, 'index'])->name('addresses');
Route::post('/address', [\App\Http\Controllers\AddressController::class, 'store'])->name('address.add');
Route::put('/address/{id}', [\App\Http\Controllers\AddressController::class, 'update'])->name('address.edit');
Route::delete('/address/{id}', [\App\Http\Controllers\AddressController::class, 'destroy'])->name('address.delete');

// Subscription routes
Route::post('/subscription', [\App\Http\Controllers\SubscriptionController::class, 'store'])->name('subscription.add');


// Voyager routes
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::get('/login', [\App\Http\Controllers\AuthController::class, 'redirect'])->name('voyager.login');
    Route::post('/login', [\App\Http\Controllers\AuthController::class, 'redirect'])->name('voyager.postlogin');
});
