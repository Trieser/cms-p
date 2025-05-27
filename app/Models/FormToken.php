<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormToken extends Model
{
    use HasFactory;

    protected $fillable = ['token', 'email', 'uses', 'max_uses', 'expires_at'];

    public function isValid()
    {
        return $this->uses < $this->max_uses && 
            (!this->expires_at || now()->lt($this->expires_at));
    }
}

