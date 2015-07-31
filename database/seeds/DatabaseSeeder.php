<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		$this->call('ServicePointsTableSeeder');
		$this->command->info('Service Points table seeded');


		$this->call('SuppliersTableSeeder');
		$this->command->info('Suppliers Points table seeded');
	}

}
