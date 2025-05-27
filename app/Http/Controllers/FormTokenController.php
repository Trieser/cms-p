<?php

namespace App\Http\Controllers;

use App\Models\FormToken;
use App\Models\Inquiry;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class FormTokenController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $token = Str::random(32);
        $formToken = FormToken::create([
            'token' => $token,
            'email' => $request->email,
            'max_uses' => 3,
            'expires_at' => now()->addDays(3),
        ]);

        $link = url("/inquiry-fill/{$token}");
        return response()->json(['token' => $token, 'link' => $link]);
    }

    public function validateToken($token)
    {
        $formToken = FormToken::where('token', $token)->first();

        if (!$formToken || $formToken->isValid()) {
            return response()->json(['message' => 'Token expired or invalid'], 400);
        }

        $formToken->increment('uses');
        return response()->json(['email' => $formToken->email]);
    }

    public function submit(Request $request, $token)
    {
        $formToken = FormToken::where('token', $token)->first();

        if (!formToken || $formToken->isValid()) {
            return response()->json(['message' => 'Token expired or invalid'], 400);
        }

        $validated = $request->validate([
            'inquiry' => 'required|string|max:255|unique:inquiries',
            'pax_counts' => 'required|integer',
            'traveling_date' => 'required|date',
            'agent' => 'required|string|max:255',
            'email_subject' => 'required|string|max:255'
        ]);

        Inquiry::create(array_merge($validated, [
            'from_email' => $formToken->email,
            'status' => 'Open',
            'person_in_charge' => 'Agent Submitted',
            'inquiry_type' => 'Form',
            'inquiry_received' => now()->toDateString()
        ]));

        $formToken->increment('uses');
        return response()->json(['message' => 'Inquiry submitted successfully']);
    }
}

