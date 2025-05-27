<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\TInquiryController;
use App\Http\Controllers\FormTokenController;

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

// Authentication
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Inquiry Routes
Route::controller(InquiryController::class)->group(function () {
    Route::get('/inquiries', 'index')->name('inquiries.index');
    Route::get('/inquiries/create', 'create')->name('inquiries.create');
    Route::post('/inquiries/store', 'store')->name('inquiries.store');
    Route::get('/inquiries/{id}', 'show')->name('inquiries.show');
    Route::get('/inquiries/{id}/edit', 'edit')->name('inquiries.edit');
    Route::put('/inquiries/{id}', 'update')->name('inquiries.update');
    Route::delete('/inquiries/{id}', 'destroy')->name('inquiries.destroy');
    Route::post('/inquiries/{id}/send-template', 'sendTemplate')->name('inquiries.sendTemplate');
    Route::post('/inquiries/send-email', 'sendEmail')->name('inquiries.sendEmail');
});

// T-Inquiry Routes
Route::controller(TInquiryController::class)->group(function () {
    Route::get('/t-inquiries', 'index');
    Route::post('/t-inquiries', 'store');
    Route::get('/t-inquiries/{id}', 'show');
    Route::put('/t-inquiries/{id}', 'update');
    Route::delete('/t-inquiries/{id}', 'destroy');
});

// Form Token Routes
Route::controller(FormTokenController::class)->group(function () {
    Route::post('/form-token/create', 'create')->name('form-token.create');
    Route::get('/form-token/validate/{token}', 'validateToken')->name('form-token.validate');
    Route::post('/form-token/submit/{token}', 'submit')->name('form-token.submit');
    Route::post('/form-token', 'create'); // Duplicate route, consider removing
});

// Commented out routes for future reference
/*
// Email Template
Route::controller(EmailTemplateController::class)->group(function () {
    Route::post('/email-template', 'store');
    Route::get('/email-template', 'show');
});

// Email Sync
Route::post('/email/sync-inquiry', [EmailSyncController::class, 'syncInquiry']);
Route::post('/email/validate-template', [EmailSyncController::class, 'validateTemplate']);
*/