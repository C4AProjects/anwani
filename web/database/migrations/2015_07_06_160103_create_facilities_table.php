<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFacilitiesTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('facilities', function(Blueprint $table)
    {
      $table->increments('id');
      $table->string("mflcode")->nullable();;
      $table->string("latitude")->nullable();
      $table->string("longitude")->nullable();
      $table->string("method_geocode")->nullable();
      $table->string("source_geocode")->nullable();
      $table->string("date_geocode")->nullable();
      $table->string("province")->nullable();;
      $table->string("district")->nullable();;
      $table->string("facility")->nullable();;
      $table->string("owner")->nullable();;
      $table->string("type")->nullable();;
      $table->string("division")->nullable();;
      $table->string("location")->nullable();;
      $table->string("sublocation")->nullable();;
      $table->string("nearest_town")->nullable();;
      $table->string("plot_no")->nullable();
      $table->string("constituency")->nullable();;
      $table->string("status")->nullable();
      $table->timestamps();
    });
  }

  /**
  * Reverse the migrations.
  *
  * @return void
  */
  public function down()
  {
    Schema::drop('facilities');
  }
}
