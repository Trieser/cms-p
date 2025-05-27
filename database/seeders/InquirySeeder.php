<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inquiry;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class InquirySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        // Clear existing records to avoid duplicate unique inquiry constraint violations
        DB::table('inquiries')->delete();

        $inquiries = [
            [
                'id' => '1',
                'inquiry' => '5D4N',
                'pax_counts' => '4',
                'traveling_date' => Carbon::parse('2025-03-15'),
                'agent' => 'Gladex Travel And Tours',
                'from_email' => 'sales@gladextours.com',
                'status' => 'Booking',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-01'),
                'email_subject' => 'John Smith Family x 4',
            ],
            [
                'id' => '2',
                'inquiry' => '4D3N',
                'pax_counts' => '2',
                'traveling_date' => Carbon::parse('2025-04-10'),
                'agent' => 'Elite Circle Travel Corp',
                'from_email' => 'elitecircleph@gmail.com',
                'status' => 'Quoted',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-05'),
                'email_subject' => 'Honeymoon Package for Mr & Mrs Lee',
            ],
            [
                'id' => '3',
                'inquiry' => '7D6N',
                'pax_counts' => '8',
                'traveling_date' => Carbon::parse('2025-05-20'),
                'agent' => 'Juan World Philippines',
                'from_email' => 'group2.juanworld@gmail.com',
                'status' => 'Payment',
                'person_in_charge' => 'putriganeesha20@gmail.com',
                'inquiry_type' => 'GIT/6-20 pax',
                'inquiry_received' => Carbon::parse('2025-03-10'),
                'email_subject' => 'Company Team Building May 2025',
            ],
            [
                'id' => '4',
                'inquiry' => '3D2N',
                'pax_counts' => '1',
                'traveling_date' => Carbon::parse('2025-06-05'),
                'agent' => 'Personal Agent',
                'from_email' => 'traveler@gmail.com',
                'status' => 'Quoted',
                'person_in_charge' => 'alvin@nexplorer.asia',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-07'),
                'email_subject' => 'Solo Trip Inquiry',
            ],
            [
                'id' => '5',
                'inquiry' => '5D4N',
                'pax_counts' => '12',
                'traveling_date' => Carbon::parse('2025-07-12'),
                'agent' => 'Diwa Travel',
                'from_email' => 'clareneh.diwatravel@gmail.com',
                'status' => 'Booking',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-08'),
                'email_subject' => 'Family Reunion July 2025',
            ],
            [
                'id' => '6',
                'inquiry' => '4D3N',
                'pax_counts' => '6',
                'traveling_date' => Carbon::parse('2025-08-18'),
                'agent' => 'Albressa Travel',
                'from_email' => 'albressa@gmail.com',
                'status' => 'Quoted',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-09'),
                'email_subject' => 'Friends Vacation Package',
            ],
            [
                'id' => '7',
                'inquiry' => '6D5N',
                'pax_counts' => '2',
                'traveling_date' => Carbon::parse('2025-09-22'),
                'agent' => 'Optitravel Holidays',
                'from_email' => 'optitravelholidays@gmail.com',
                'status' => 'Payment',
                'person_in_charge' => 'clarissa.sella@gmail.com',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-11'),
                'email_subject' => 'Anniversary Trip for 2',
            ],
            [
                'id' => '8',
                'inquiry' => '5D4N',
                'pax_counts' => '4',
                'traveling_date' => Carbon::parse('2025-10-15'),
                'agent' => 'Elite Voyages',
                'from_email' => 'amy.l@elitevoyages.com',
                'status' => 'Booking',
                'person_in_charge' => 'Pio Chen',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-12'),
                'email_subject' => 'Villa Booking for 4 Adults',
            ],
            [
                'id' => '9',
                'inquiry' => '3D2N',
                'pax_counts' => '2',
                'traveling_date' => Carbon::parse('2025-11-08'),
                'agent' => 'Wanderlust Travel',
                'from_email' => 'rsvn.wanderlusttravel@gmail.com',
                'status' => 'Quoted',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => Carbon::parse('2025-03-13'),
                'email_subject' => 'Romantic Getaway November',
            ],
            [
                'id' => '10',
                'inquiry' => '4D3N',
                'pax_counts' => '15',
                'traveling_date' => Carbon::parse('2025-12-10'),
                'agent' => 'Rakso Travel',
                'from_email' => 'toursales_210@raksotravel.com',
                'status' => 'Inquiry',
                'person_in_charge' => 'putriganeesha20@gmail.com',
                'inquiry_type' => 'GIT/12+ pax',
                'inquiry_received' => Carbon::parse('2025-03-14'),
                'email_subject' => 'Year-End Company Outing',
            ],
        ];

        foreach ($inquiries as $inquiryData) {
            Inquiry::create($inquiryData);
        }
    }
}