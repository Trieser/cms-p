<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TInquiry;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TInquirySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('t_inquiry')->truncate();

        $t_inquiry = [
            [
                'inquiry' => '5 days 4 night',
                'code' => '5D4N',
                'inquiry_id' => 1,
            ],
            [
                'inquiry' => '4 days 3 night',
                'code' => '4D3N',
                'inquiry_id' => 2,  
            ],
            [
                'inquiry' => '7 days 6 night',
                'code' => '7D6N',
                'inquiry_id' => 3,  
            ],
            [
                'inquiry' => '3 days 2 night',
                'code' => '3D2N',
                'inquiry_id' => 4,  
            ],
            [
                'inquiry' => '10 days 9 night',
                'code' => '10D9N',
                'inquiry_id' => 5,
            ]
        ];

        foreach ($t_inquiry as $t_inquiryData) {
            TInquiry::create($t_inquiryData);
        }
    }
}