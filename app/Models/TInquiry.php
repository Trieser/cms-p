<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TInquiry extends Model
{
    use HasFactory;

    protected $table = 't_inquiry';

    protected $fillable = [
        'inquiry_detail',
        'inquiry',
        'inquiry_id',
    ];

    public function inquiry()
    {
        return $this->belongsTo(Inquiry::class, 'inquiry_id');
    }
}