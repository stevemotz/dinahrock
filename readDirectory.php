<?php

    $dir = $_GET["d"];
    
    $newpath = $_SERVER['DOCUMENT_ROOT']."/oysters/img/lo-res/".$_GET["d"];

    $dir = opendir($newpath);
    
    $mypath = $dir;

    $json = array();
    
    $i = 0;
    while (($file = readdir($dir)) !== false){
        if($ext = end(explode('.', $file))){        
            list($width, $height) = getimagesize($newpath.$file);
            
            $json[$i] = array('images:',
                'img' => $file,
                'height' => $height,
                'width' => $width
            );
            $i++;
                      
        }
        
        sort($json); 
    }
    
            

    print json_encode($json);
    
    closedir($dir);
    
?>

