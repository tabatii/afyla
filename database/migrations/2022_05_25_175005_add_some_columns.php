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
        Schema::table('sliders', function (Blueprint $table) {
            if (! Schema::hasColumn('sliders', 'button')) {
                $table->string('button')->after('url');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        /*Schema::table('sliders', function (Blueprint $table) {
            if (Schema::hasColumn('sliders', 'button')) {
                $table->drop('button');
            }
        });*/
    }
};
