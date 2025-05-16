<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InquiryController;

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

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');

// Dashboard
Route::get('/', function () {
    return view('dashboard');
})->middleware('auth')->name('dashboard');

// Inquiry
Route::middleware('auth')->controller(InquiryController::class)->group(function () {
    Route::get('/inquiries', 'index')->name('inquiries.index');
    Route::get('/inquiries/create', 'create')->name('inquiries.create');
    Route::post('/inquiries/store', 'store')->name('inquiries.store');
    Route::get('/inquiries/{id}', 'show')->name('inquiries.show');
    Route::get('/inquiries/{id}/edit', 'edit')->name('inquiries.edit');
    Route::put('/inquiries/{id}', 'update')->name('inquiries.update');
    Route::delete('/inquiries/{id}', 'destroy')->name('inquiries.destroy');
});

