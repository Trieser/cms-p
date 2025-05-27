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
        DB::table('t_inquiry')->delete();

        $t_inquiry = [
            [
                'inquiry_detail' => '5 days 4 night',
                'inquiry' => '5D4N',
                'inquiry_id' => 1,
            ],
            [
                'inquiry_detail' => '4 days 3 night',
                'inquiry' => '4D3N',
                'inquiry_id' => 2,  
            ],
            [
                'inquiry_detail' => '7 days 6 night',
                'inquiry' => '7D6N',
                'inquiry_id' => 3,  
            ],
            [
                'inquiry_detail' => '3 days 2 night',
                'inquiry' => '3D2N',
                'inquiry_id' => 4,  
            ],
            [
                'inquiry_detail' => '10 days 9 night',
                'inquiry' => '10D9N',
                'inquiry_id' => 5,
            ]
        ];

        foreach ($t_inquiry as $t_inquiryData) {
            TInquiry::create($t_inquiryData);
        }
    }
}