<?php namespace Senshi\Transformers;

   abstract class Transformer{


       /**
        * @param $items
        * @return array
        */
       public function transformCollection(array $items)
       {
           return array_map([$this , 'transform'],$items);

       }

       public abstract  function transform($item);


    }
