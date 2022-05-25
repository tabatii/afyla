<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/migrate', function () {
    Artisan::call('migrate');
    return 'done';
});

Route::get('/migrate-fresh', function () {
    Artisan::call('migrate:fresh');
    return 'done';
});

Route::get('/migrate-rollback', function () {
    Artisan::call('migrate:rollback');
    return 'done';
});

Route::get('/seed', function () {
    Artisan::call('db:seed');
    return 'done';
});

Route::get('/seed-voyager', function () {
    Artisan::call('db:seed', [
        '--class' => 'VoyagerDatabaseSeeder',
    ]);
    return 'done';
});
