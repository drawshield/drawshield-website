<?php

$source = "../source/gallery/";

$header = <<<ENDHEAD
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<list>
ENDHEAD;

$trailer = "</list>\n";

$galleryDirs = scandir($source);

function startsWith($start, $target) {
	return (strncmp($target, $start, strlen($start)) == 0);
}


$content = '';

foreach($galleryDirs as $galleryDir) {
    if (!ctype_digit($galleryDir[0]) || !ctype_digit($galleryDir[1]) || !ctype_digit($galleryDir[2]) || !ctype_digit($galleryDir[3])) continue;
    $htmlFiles = scandir($source . $galleryDir);
    foreach($htmlFiles as $htmlFile) {
        if ($htmlFile[0] == 'i' || $htmlFile[0] == '.') continue;
        $filename = $source . '/' . $galleryDir . '/' . $htmlFile;
        $lines = file($filename);
        for ($i = 0; $i < count($lines); $i++) {
            $line = $lines[$i];
            if (startsWith("pageTitle:",$line)) {
                $title = html_entity_decode(trim(substr($line, 10)));
                continue;
            }
            if (startsWith("entryNum:",$line)) {
                $refNum = trim(substr($line, 9));
                continue;
            }
            if (startsWith("<pre>",$line)) {
                break;
            }
        }
        $content .= "<item>\n\t<refnum>$refNum</refnum>\n\t<title>$title</title>\n</item>\n";
    }
}

file_put_contents("../source/gallery/list-of-entries.xml",$header . $content .$trailer);
