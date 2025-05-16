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
        DB::table('inquiries')->truncate();

        $inquiries = [
            [
                'no' => '94',
                'inquiry' => 'Bali - (25pax) - Feb. 7 - 9 - Mam Sonia',
                'agent' => 'Aerial Travel & Tours',
                'from_email' => 'aerialtravelandtours08@gmail.com',
                'status' => 'Quoted',
                'person_in_charge' => 'erwin@nexplorer.asia',
                'inquiry_type' => 'FIT/1-8 pax',
                'inquiry_received' => '20/11/2024',
                'notes' => '',
            ],
            [
                'no' => '27',
                'inquiry' => 'Stephen Nico Famorca',
                'agent' => 'Ai to Yume Tour and Travel',
                'from_email' => 'aitoyumetravelandtours@yahoo.com',
                'status' => 'Booking',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'GIT/6-20 pax',
                'inquiry_received' => '15/10/2024',
                'notes' => '',
            ],
            [
                'no' => '174',
                'inquiry' => 'Bryan Seno - 3 pax',
                'agent' => 'Albressa Travel',
                'from_email' => 'albressa@gmail.com',
                'status' => 'Booking',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-12 pax',
                'inquiry_received' => '19/12/2024',
                'notes' => 'May 16-19, 2025 Booking Order | Dr Ramon Jason Javier',
            ],
            [
                'no' => '110',
                'inquiry' => 'Rjay - Bryan Seno',
                'agent' => 'Albressa Travel',
                'from_email' => 'albressa@gmail.com',
                'status' => 'Quoted',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-8 pax',
                'inquiry_received' => '27/11/2024',
                'notes' => 'May 9-12, 2025 Quotation - Rjay',
            ],
            [
                'no' => '14',
                'inquiry' => 'Elena ~ \'more than one\'',
                'agent' => 'Alive Xperiences',
                'from_email' => 'europeoffice@alivexperiences.com',
                'status' => 'Quoted',
                'person_in_charge' => 'alvin@nexplorer.asia',
                'inquiry_type' => 'FIT/1-8 pax',
                'inquiry_received' => '09/10/2024',
                'notes' => '',
            ],
            [
                'no' => '100',
                'inquiry' => 'Dalia Rocio alivexperiences',
                'agent' => 'Alive Xperiences',
                'from_email' => 'europeoffice@alivexperiences.com',
                'status' => 'Quoted',
                'person_in_charge' => 'erwin@nexplorer.asia',
                'inquiry_type' => 'FIT/1-8 pax',
                'inquiry_received' => '22/11/2024',
                'notes' => 'Re: Nexplorer North Kuta Inner Circle Area: Aliv World Ltd. is requesting service(s) confirmation. (A04537)',
            ],
            [
                'no' => '178',
                'inquiry' => 'Jenny Alive Experience',
                'agent' => 'Alive Xperiences',
                'from_email' => 'europeoffice@alivexperiences.com',
                'status' => 'Quoted',
                'person_in_charge' => 'alvin@nexplorer.asia',
                'inquiry_type' => 'GIT/12+ pax',
                'inquiry_received' => '21/12/2024',
                'notes' => 'New quote request',
            ],
            [
                'no' => '127',
                'inquiry' => 'Barbara - Eden 20pax',
                'agent' => 'Althea\'s Travel General Services',
                'from_email' => 'viktoralthea_travel@yahoo.com.ph',
                'status' => 'Quoted',
                'person_in_charge' => 'putriganeesha20@gmail.com',
                'inquiry_type' => 'GIT/12+ pax',
                'inquiry_received' => '03/12/2024',
                'notes' => 'REQUEST FOR QUOTATION FEB 18-22,2025',
            ],
            [
                'no' => '33',
                'inquiry' => 'Christine - Amkor',
                'agent' => 'Amkor Travel',
                'from_email' => 'amkortravelqc02@yahoo.com',
                'status' => 'Quoted',
                'person_in_charge' => 'ymandaa02@gmail.com',
                'inquiry_type' => 'FIT/1-8 pax',
                'inquiry_received' => '18/10/2024',
                'notes' => '',
            ],
            [
                'id' => '46',
                'inquiry' => 'Indonesia Collective Group 25 Pax',
                'agent' => 'Amkor Travel',
                'from_email' => 'mmtismo@yahoo.com',
                'status' => 'Quoted',
                'person_in_charge' => 'clarissa.sella@gmail.com',
                'inquiry_type' => 'GIT/6-20 pax',
                'inquiry_received' => '26/10/2024',
                'notes' => '',
            ],
        ];

        foreach ($inquiries as $inquiryData) {
            Inquiry::create($inquiryData);
        }
    }
}