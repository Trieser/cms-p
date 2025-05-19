<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\InquiryController;
use App\Http\Controllers\TInquiryController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Inquiry
// Route::middleware('auth')->controller(InquiryController::class)->group(function () {
//     Route::get('/inquiries', 'index')->name('inquiries.index');
//     Route::get('/inquiries/create', 'create')->name('inquiries.create');
//     Route::post('/inquiries/store', 'store')->name('inquiries.store');
//     Route::get('/inquiries/{id}', 'show')->name('inquiries.show');
//     Route::get('/inquiries/{id}/edit', 'edit')->name('inquiries.edit');
//     Route::put('/inquiries/{id}', 'update')->name('inquiries.update');
//     Route::delete('/inquiries/{id}', 'destroy')->name('inquiries.destroy');
// });

Route::middleware([])->group(function () {
    Route::get('/inquiries', [InquiryController::class, 'index']);
});

Route::controller(TInquiryController::class)->group(function () {
    Route::get('/t-inquiries', 'index');
    Route::post('/t-inquiries', 'store');
    Route::get('/t-inquiries/{id}', 'show');
    Route::put('/t-inquiries/{id}', 'update');
    Route::delete('/t-inquiries/{id}', 'destroy');
});