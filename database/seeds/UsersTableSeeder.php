<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class UsersTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
    DB::table('users')->delete();

    User::create(['title'=>'New Member','name'=>'letuky','display_name'=>'Shazia Hamid',
    'cascaded_from'=>'org2'
    ,'weight'=>90,'photo'=>'upload/images/default.jpg',
    'password'=>'f3d28e5757700c704f6a2e140da8de87c4fcdc4ee4ed71b103e26bb31052e4fb9',
    'email'=>'lkyonze@gmail.com',
    'activation_token'=>'ca301da86723eedcab2446a184c3c3d6',
    'last_activation_request'=>1400255691,
    'lost_password_request'=>0,'last_sign_in_stamp'=>1432628675]);
	}

}
