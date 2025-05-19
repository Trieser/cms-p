<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('t_inquiry', function (Blueprint $table) {
            $table->renameColumn('inquiry', 'inquiry_detail');
            $table->renameColumn('code', 'inquiry');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('t_inquiry', function (Blueprint $table) {
            $table->renameColumn('inquiry_detail', 'inquiry');
            $table->renameColumn('inquiry', 'code');
        });
    }
};
