<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inquiries = Inquiry::latest()->paginate(10);
        return response()->json($inquiries);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'inquiry' => 'required|string|max:255|unique:inquiries',
            'pax_counts' => 'required|integer',
            'traveling_date' => 'required|date',
            'agent' => 'required|string|max:255',
            'from_email' => 'required|email|max:255',
            'status' => 'required|string|max:50',
            'person_in_charge' => 'required|string|max:255',
            'inquiry_type' => 'required|string|max:100',
            'inquiry_received' => 'required|string|max:100',
            'email_subject' => 'required|string|max:255'
        ]);

        $inquiry = Inquiry::create($validated);
        return response()->json($inquiry, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Inquiry $inquiry)
    {
        return response()->json($inquiry);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Inquiry $inquiry)
    {
        $validated = $request->validate([
            'inquiry' => 'sometimes|string|max:255|unique:inquiries,inquiry,'.$inquiry->id,
            'pax_counts' => 'sometimes|integer',
            'traveling_date' => 'sometimes|date',
            'agent' => 'sometimes|string|max:255',
            'from_email' => 'sometimes|email|max:255',
            'status' => 'sometimes|string|max:50',
            'person_in_charge' => 'sometimes|string|max:255',
            'inquiry_type' => 'sometimes|string|max:100',
            'inquiry_received' => 'sometimes|string|max:100',
            'email_subject' => 'sometimes|string|max:255'
        ]);

        $inquiry->update($validated);
        return response()->json($inquiry);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();
        return response()->json(null, 204);
    }
}
