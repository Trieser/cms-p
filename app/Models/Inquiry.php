<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'inquiry',
        'pax_counts',
        'traveling_date',
        'agent',
        'from_email',
        'status',
        'person_in_charge',
        'inquiry_type',
        'inquiry_received',
        'email_subject'
    ];

    protected $casts = [
        'traveling_date' => 'date',
    ];
}
