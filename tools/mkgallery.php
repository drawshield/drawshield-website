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

$existing = scandir($targetDir);
foreach($existing as $name) {
    if (substr($name,0,5) == 'index')
        unlink($targetDir . $name);
}
$firstVal = "firstIndex: index.html";
$lastVal = "lastIndex: index" . ( intdiv((10000 - $entryNum), $increment ) - 1) . ".html";

while ($entryNum < 10000) {
    $start = $entryNum;
    $end = $start + $increment - 1;
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
    if ($end > 10000) {
        $end = 9999;
        $next = '';
        $last = '';
    }
 //   echo "$targetDir$targetFile\n";
    file_put_contents($targetDir . $targetFile, 
        str_replace( array ("%start%", "%end%", "%prev%", "%next%", "%first%", "%last%"),
                      array ($start, $end, $prev, $next, $first, $last), $template));
 //   echo "\n============================\n";  

    $index++;
    $entryNum += $increment;
}
