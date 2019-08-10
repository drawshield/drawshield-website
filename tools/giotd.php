<?php

/* 
 * Choose a random file from the image gallery every day at midnight,
 * (by cron job) and put its 4 digit reference in text file in /etc
 */

function RandomFile($folder='', $extensions='.*'){
 
    // fix path:
    $folder = trim($folder);
    $folder = ($folder == '') ? './' : $folder;
 
    // check folder:
    if (!is_dir($folder)){ die('invalid folder given!'); }
 
    // create files array
    $files = array();
 
    // open directory
    if ($dir = @opendir($folder)){
 
        // go trough all files:
        while($file = readdir($dir)){
 
            if (!preg_match('/^\.+$/', $file) and 
                preg_match('/\.('.$extensions.')$/', $file)){
 
                // feed the array:
                $files[] = $file;                
            }            
        }        
        // close directory
        closedir($dir);    
    }
    else {
        die('Could not open the folder "'.$folder.'"');
    }
 
    if (count($files) == 0){
        die('No files where found :-(');
    }
 
    // seed random function:
    mt_srand((double)microtime()*1000000);
 
    // get an random index:
    $rand = mt_rand(0, count($files)-1);
 
    // check again:
    if (!isset($files[$rand])){
        die('Array index was not found! very strange!');
    }
 
    // return the random file:
    return $folder . $files[$rand];
 
}

$giotd = substr(RandomFile('/home/karlwilc/drawshield.net/gallery/img/','png'),-8,4);

file_put_contents('/home/karlwilc/etc/giotd.txt', $giotd);
file_put_contents('/home/karlwilc/etc/giotd-list.txt', $giotd, FILE_APPEND);

echo "Gallery Image of the Day is number $giotd\n";
