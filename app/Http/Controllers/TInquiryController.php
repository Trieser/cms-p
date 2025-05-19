<?php

namespace App\Http\Controllers;

use App\Models\TInquiry;
use Illuminate\Http\Request;

class TInquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $tInquiries = TInquiry::latest()->paginate(10);

            return response()->json([
                'data' => $tInquiries->items(),
                'meta' => [
                    'current_page' => $tInquiries->currentPage(),
                    'last_page' => $tInquiries->lastPage(),
                    'per_page' => $tInquiries->perPage(),
                    'total' => $tInquiries->total(),
                ]
            ]);
        } catch (\Throwable $e) {
            \Log::error('TInquiryController@index failed: '.$e->getMessage());
            return response()->json(['message' => 'Server error: ' . $e->getMessage()], 500);
        }
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
            'inquiry_detail' => 'required|string|max:255',
            'inquiry' => 'required|string|max:255|unique:t_inquiry',
            'inquiry_id' => 'required|exists:inquiries,id',
        ]);

        try {
            $tInquiry = TInquiry::create($validated);
            return response()->json($tInquiry, 201);
        } catch (\Throwable $e) {
            \Log::error('TInquiryController@store failed: '.$e->getMessage());
            return response()->json(['message' => 'Failed to create T-Inquiry: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $tInquiry = TInquiry::findOrFail($id);
            return response()->json($tInquiry);
        } catch (\Throwable $e) {
            \Log::error('TInquiryController@show failed: '.$e->getMessage());
            return response()->json(['message' => 'T-Inquiry not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $tInquiry = TInquiry::findOrFail($id);
            
            $validated = $request->validate([
                'inquiry_detail' => 'sometimes|string|max:255',
                'inquiry' => 'sometimes|string|max:255|unique:t_inquiry,inquiry,'.$id,
                'inquiry_id' => 'sometimes|exists:inquiries,id',
            ]);

            $tInquiry->update($validated);
            return response()->json($tInquiry);
        } catch (\Throwable $e) {
            \Log::error('TInquiryController@update failed: '.$e->getMessage());
            return response()->json(['message' => 'Failed to update T-Inquiry: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $tInquiry = TInquiry::findOrFail($id);
            $tInquiry->delete();
            return response()->json(null, 204);
        } catch (\Throwable $e) {
            \Log::error('TInquiryController@destroy failed: '.$e->getMessage());
            return response()->json(['message' => 'Failed to delete T-Inquiry: ' . $e->getMessage()], 500);
        }
    }
}