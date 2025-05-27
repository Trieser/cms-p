<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\InquiryController;
use App\Http\Controllers\TInquiryController;
use App\Http\Controllers\EmailTemplateController;
use App\Http\Controllers\EmailSyncController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Inquiry
Route::controller(InquiryController::class)->group(function () {
    Route::get('/inquiries', 'index')->name('inquiries.index');
    Route::get('/inquiries/create', 'create')->name('inquiries.create');
    Route::post('/inquiries/store', 'store')->name('inquiries.store');
    Route::get('/inquiries/{id}', 'show')->name('inquiries.show');
    Route::get('/inquiries/{id}/edit', 'edit')->name('inquiries.edit');
    Route::put('/inquiries/{id}', 'update')->name('inquiries.update');
    Route::delete('/inquiries/{id}', 'destroy')->name('inquiries.destroy');
    Route::post('/inquiries/{id}/send-template', 'sendTemplate')->name('inquiries.sendTemplate');
});

// T-Inquiry
Route::controller(TInquiryController::class)->group(function () {
    Route::get('/t-inquiries', 'index');
    Route::post('/t-inquiries', 'store');
    Route::get('/t-inquiries/{id}', 'show');
    Route::put('/t-inquiries/{id}', 'update');
    Route::delete('/t-inquiries/{id}', 'destroy');
});

// Email Template
Route::controller(EmailTemplateController::class)->group(function () {
    Route::post('/email-template', 'store');
    Route::get('/email-template', 'show'); // ← fixed line
});

// Email Sync
Route::post('/email/sync-inquiry', [EmailSyncController::class, 'syncInquiry']);
Route::post('/email/validate-template', [EmailSyncController::class, 'validateTemplate']);


