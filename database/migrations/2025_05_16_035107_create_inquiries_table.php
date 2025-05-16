<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inquiries', function (Blueprint $table) {
            $table->id(); // Creates auto-incrementing BIGINT primary key
            $table->string('inquiry', 255)->unique(); // UNIQUE KEY VARCHAR
            $table->bigInteger('pax_counts'); // BIGINT for passenger counts
            $table->date('traveling_date'); // Date field
            $table->string('agent', 255); // VARCHAR for agent
            $table->string('from_email', 255); // VARCHAR for email
            $table->string('status', 50); // VARCHAR for status
            $table->string('person_in_charge', 255); // VARCHAR for PIC
            $table->string('inquiry_type', 100); // VARCHAR for inquiry type
            $table->string('inquiry_received', 100); // VARCHAR for how inquiry was received
            $table->string('email_subject', 255); // VARCHAR for email subject
            
            // Timestamps for created_at and updated_at
            $table->timestamps();
            
            // Optional: Add soft deletes if needed
            // $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};