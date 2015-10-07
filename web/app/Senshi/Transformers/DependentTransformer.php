<?php
/**
 * Created by PhpStorm.
 * User: kelvin
 * Date: 6/24/2015
 * Time: 10:22 AM
 */

namespace Senshi\Transformers;


abstract class DependentTransformer extends Transformer {

    public function transform($member)
    {

        return[

            "id" =>$member["id"],
            "id_no" =>$member["member_national_id"],
            "member_name"   => $member['member_name'],
            "scheme_name"    => $member['scheme'],
            "member_dob"=>$member["member_dob"],
            "member_phone_no"=>$member["member_phone_no"],
            "nssf_no"=>$member["tsc_no"],
            "nhif_no"=>$member["nhif_no"],
            "in_patient"=>$member["in_patient"],
            "out_patient"=>$member["out_patient"],
            "dental"=>$member["dental"],
            "optical"=>$member["optical"],
            "maternity"=>$member["maternity"],

            "verification_token"=>$member["verification_token"],
            "invoice_amt"=>$member["invoice_amt"],
            "treatment"=>$member["treatment"],
            "treatment_date"=>$member["treatment_date"],
            "dependant"=>$member["dependant_name"],
            "dependant_national_id"=>$member["dependant_national_id"],
            "dependant_phone_no"=>$member["dependant_phone_no"]

        ];


    }

}
