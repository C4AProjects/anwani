<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Bookmark;

class BookmarkTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
    DB::table('bookmarks')->delete();

    Bookmark::create(['name' => 'Luke Skywalker','menu_type' => 'yup',
    'item_type' => '127.0.0.1','item_id' => 'MAC OSX','user_id' => '1']);
	}

}
