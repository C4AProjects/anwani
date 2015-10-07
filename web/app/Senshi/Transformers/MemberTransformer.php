<?php
/**
 * Created by PhpStorm.
 * User: kelvin
 * Date: 6/24/2015
 * Time: 10:22 AM
 */

namespace Senshi\Transformers;

use Senshi\Nesters\ArrayNester as ArrayNester;

class MemberTransformer extends Transformer {

    public function transform($member)
    {


        return[

            "id" =>$member['principal']["id"],
            "id_no" =>$member['principal']["member_national_id"],
            "member_name"   => $member['principal']['member_name'],
            "scheme_name"    => $member['principal']['scheme'],
            "member_dob"=>$member['principal']["member_dob"],
            "member_phone_no"=>$member['principal']["member_phone_no"],
            "nssf_no"=>$member['principal']["tsc_no"],
            "nhif_no"=>$member['principal']["nhif_no"],
            "in_patient"=>$member['principal']["in_patient"],
            "out_patient"=>$member['principal']["out_patient"],
            "dental"=>$member['principal']["dental"],
            "optical"=>$member['principal']["optical"],
            "maternity"=>$member['principal']["maternity"],
            "verification_token"=>$member['principal']["verification_token"],
            "invoice_amt"=>$member['principal']["invoice_amt"],
            "treatment"=>$member['principal']["treatment"],
            "treatment_date"=>$member['principal']["treatment_date"],
            "dependent"=>$member['dependent']

        ];


    }

    public function transformNest($member)
    {
//dd($member->first());

        return[

            "member_name" =>$member->first()->name,
            "scheme_name" => $member->first()->scheme,
            "provider_name" => $member->first()->provider->first()->name,
            "grade" => $member->first()->grade_id,
            "nssf_no" => $member->first()->nssf_no,
            "nhif_no" => $member->first()->nhif_no,
            "in_patient" => $member->first()->in_patient,
            "out_patient" => $member->first()->out_patient,
            "dental" => $member->first()->dental,
            "optical" => $member->first()->optical,
            "maternity" => $member->first()->maternity,
            "verification_token" => $member->first()->template,
            "member_claims" =>$member->fetch('claim'),
            "service_provider" =>$member->fetch('provider'),
            "dependents" =>$member->fetch('dependant')


        ];


    }

}
