<?php

use Illuminate\Database\Seeder;

use App\ServicePoint;

class ServicePointsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service_points = ['CCC', 'Pharmacy', 'LAB', 'Maternity', 'Injection Room', 'Dressing Room', 'TB Clinic',
            'MCH', 'Diabetic Clinic'
            , 'Youth Friendly Services'];

        foreach ($service_points as $service_point) {
            ServicePoint::create(
                [
                    'name' => $service_point
                ]);
        }
    }
}
