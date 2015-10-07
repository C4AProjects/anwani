<?php
/**
* @author Rufus Mbugua
*/

namespace Senshi\Files;

use Flysystem;

use Illuminate\Support\Facades\Config;

use Excel;
use App\Facility;

// you can alias this in config/app.php if you like

ini_set('max_execution_time', 0);
class FileHandler {

  public function test(){
    // echo 'here';
    Flysystem::put('hi.txt', 'foo');
    // // we're done here - how easy was that, it just works!
    //
    return  Flysystem::read('hi.txt'); // this will return foo
  }

  function upload($path){

  }

  function download($connection){

  }

/**
 * [scanDir description]
 * @param  [type] $connection [description]
 * @return [type]             [description]
 */
  function scanDir($connection){
    return Flysystem::connection($connection)->listContents();
  }

/**
 * [readFile description]
 * @param  [type] $file       [description]
 * @param  [type] $connection [description]
 * @return [type]             [description]
 */
  public function readFile($file,$connection){
    // if($file['extension']=='csv'||$file['extension']=='xls'){
      $path = Config::get('flysystem.connections.'.$connection.'.path');

       Excel::filter('chunk')->load($path.'/'.$file['path'])->chunk(50,function($results){
// return $results;
         $results->each(function($row){
           $facility = Facility::create($row->toArray());

         });

    });
    // return $data;
  // }
  }
  //
  //   function handle(FileImport $import){
  //     // get the results
  //     $results = $import->get();
  //   }
}
