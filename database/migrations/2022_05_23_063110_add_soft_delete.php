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
        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('sliders', function (Blueprint $table) {
            if (! Schema::hasColumn('sliders', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('products', function (Blueprint $table) {
            if (! Schema::hasColumn('products', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('collections', function (Blueprint $table) {
            if (! Schema::hasColumn('collections', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('looks', function (Blueprint $table) {
            if (! Schema::hasColumn('looks', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('categories', function (Blueprint $table) {
            if (! Schema::hasColumn('categories', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('sub_categories', function (Blueprint $table) {
            if (! Schema::hasColumn('sub_categories', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('colors', function (Blueprint $table) {
            if (! Schema::hasColumn('colors', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('sizes', function (Blueprint $table) {
            if (! Schema::hasColumn('sizes', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('materials', function (Blueprint $table) {
            if (! Schema::hasColumn('materials', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('orders', function (Blueprint $table) {
            if (! Schema::hasColumn('orders', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('coupons', function (Blueprint $table) {
            if (! Schema::hasColumn('coupons', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('shipping_companies', function (Blueprint $table) {
            if (! Schema::hasColumn('shipping_companies', 'deleted_at')) {
                $table->softDeletes();
            }
        });
        Schema::table('pages', function (Blueprint $table) {
            if (! Schema::hasColumn('pages', 'deleted_at')) {
                $table->softDeletes();
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
        /*Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('sliders', function (Blueprint $table) {
            if (Schema::hasColumn('sliders', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('collections', function (Blueprint $table) {
            if (Schema::hasColumn('collections', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('looks', function (Blueprint $table) {
            if (Schema::hasColumn('looks', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('categories', function (Blueprint $table) {
            if (Schema::hasColumn('categories', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('sub_categories', function (Blueprint $table) {
            if (Schema::hasColumn('sub_categories', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('colors', function (Blueprint $table) {
            if (Schema::hasColumn('colors', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('sizes', function (Blueprint $table) {
            if (Schema::hasColumn('sizes', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('materials', function (Blueprint $table) {
            if (Schema::hasColumn('materials', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('orders', function (Blueprint $table) {
            if (Schema::hasColumn('orders', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('coupons', function (Blueprint $table) {
            if (Schema::hasColumn('coupons', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('shipping_companies', function (Blueprint $table) {
            if (Schema::hasColumn('shipping_companies', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
        Schema::table('pages', function (Blueprint $table) {
            if (Schema::hasColumn('pages', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });*/
    }
};
