<?php


namespace Senshi\Nesters;


class ArrayNester {

  function nest($array,$container,$fields,$divisions=array()){
    $newCollection=array();
    foreach($array as $key=>$value){
        $newCollection[$value['id']][$divisions['main']]=$value;
        $newFields=array();
      foreach($fields as $field){
        $newFields[$field]=$value[$field];
         unset($newCollection[$value['id']][$divisions['secondary']][$field]);
      }
      $newCollection[$value['id']][$container][]=$newFields;
    }
    // Reset Key Values
    $newCollection = array_values($newCollection);
    return $newCollection;
  }
}
