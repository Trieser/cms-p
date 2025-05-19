<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        $this->call([
            InquirySeeder::class,
            TInquirySeeder::class,
            // Add other seeders here when you create them
        ]);
    }
}