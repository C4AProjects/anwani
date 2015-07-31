<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\AuditTrail;

class AuditTrailTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
    DB::table('audit_trails')->delete();

    AuditTrail::create(['user' => 'Luke Skywalker','browser' => 'chrome',
    'ip_address' => '127.0.0.1','os' => 'MAC OSX']);
	}

}
