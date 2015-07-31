<?php
/**
* Created by PhpStorm.
* User: kelvin
* Date: 6/24/2015
* Time: 10:22 AM
*/

namespace Senshi\Transformers;

// use Senshi\Nesters\ArrayNester as ArrayNester;

class FacilityTransformer extends Transformer {

  public function transform($facility)
  {
    $facility = (array)$facility;
    //dd((array)$facility);
    if($facility['latitude']==null || $facility['longitude']==null){
      $facility['latitude']=0;
      $facility['longitude']=0;
    }
    return[
      'message'=>"<h3>$facility[facility]</h3><p><i class='fa fa-building'></i>$facility[owner]</p>",
        'group'=>$facility['province'],
        'lat'=>(float)$facility['latitude'],
        'lng'=>(float)$facility['longitude'],
        'icon'=> [
        'type'=> 'awesomeMarker',
        'icon'=> 'hospital-o',
        'prefix'=>'fa',
        'markerColor'=> 'darkpurple'
    ]
          ];

        }

      }
