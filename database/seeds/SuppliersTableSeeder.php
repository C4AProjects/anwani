<?php

use Illuminate\Database\Seeder;


class SuppliersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suppliers = ['KEMSA','MEDS','Others'];

        foreach($suppliers as $supplier){
            \App\Supplier::create(
                [
                    'name'=>$supplier
                ]
            );
        }
    }
}
