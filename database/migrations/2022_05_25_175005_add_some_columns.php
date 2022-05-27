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
        Schema::table('roles', function (Blueprint $table) {
            if (! Schema::hasColumn('roles', 'order')) {
                $table->integer('order')->nullable()->after('display_name');
            }
        });
        Schema::table('sliders', function (Blueprint $table) {
            if (! Schema::hasColumn('sliders', 'button')) {
                $table->string('button')->after('url');
            }
        });
        Schema::table('products', function (Blueprint $table) {
            if (! Schema::hasColumn('products', 'new')) {
                $table->boolean('new')->after('description');
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
        /*Schema::table('roles', function (Blueprint $table) {
            if (Schema::hasColumn('roles', 'order')) {
                $table->drop('order');
            }
        });
        Schema::table('sliders', function (Blueprint $table) {
            if (Schema::hasColumn('sliders', 'button')) {
                $table->drop('button');
            }
        });
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'new')) {
                $table->drop('new');
            }
        });*/
    }
};
