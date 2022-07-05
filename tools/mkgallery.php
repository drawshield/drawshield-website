<?php

$config = yaml_parse_file("../_config.yml");
$targetDir = "../source/gallery/";

$entryNum = $config['latestGallery'];
$increment = $config['incrementGallery'];;
$index = 0;
// remove all index files

$template = <<< ENDTEMPLATE
---
startImg: %start%
endImg: %end%
%prev%
%next%
%first%
%last%
layout: gallery-index
---
ENDTEMPLATE;

// $tweet = "Build-bot has uploaded new gallery submissions. There are now " . number_format(10000 - $entryNum) . " entries! https://drawshield.net/gallery/index.html";
// file_put_contents("tweet.txt",$tweet);

$existing = scandir($targetDir);
foreach($existing as $name) {
    if (substr($name,0,5) == 'index')
        unlink($targetDir . $name);
}
$firstVal = "firstIndex: index.html";
$lastVal = "lastIndex: index" . ceil( $entryNum / $increment ) -1 . ".html";
$counter = 0;

while ($entryNum > 0 ) {
    $start = $entryNum;
    $end = $start - $increment - 1;
    $first = $firstVal;
    $last = $lastVal;
    if ($index == 0) {
        $targetFile = "index.html";
        $prev = "";
        $next = "nextIndex: index1.html";
        $first = '';
    } elseif ($index == 1) {
        $targetFile = "index1.html";
        $prev = "prevIndex: index.html";
        $next = "nextIndex: index2.html";
    } else {
        $targetFile = "index$index.html";
        $prev = "prevIndex: index" . ($index - 1) . ".html";
        $next = "nextIndex: index" . ($index + 1) . ".html";
    }
    if ($end < 0) {
        $end = 1;
        $next = '';
        $last = '';
    }
    // echo "$targetDir$targetFile\n";
    file_put_contents($targetDir . $targetFile, 
        str_replace( array ("%start%", "%end%", "%prev%", "%next%", "%first%", "%last%"),
                      array ($start, $end, $prev, $next, $first, $last), $template));
 //   echo "\n============================\n";  

    $index++;
    $entryNum -= $increment;
}


