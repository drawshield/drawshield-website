<?php

$source = "../source/gallery/";

$galleryDirs = scandir($source);
$execTarget = '<!-- num=NNNN';
$notesTarget = '<h3>Notes';
$titleTarget = "<pre>";
$execEnd = '-->';

function startsWith($start, $target) {
	return (strncmp($target, $start, strlen($start)) == 0);
}



foreach($galleryDirs as $galleryDir) {
    if (!ctype_digit($galleryDir[0]) || !ctype_digit($galleryDir[1]) || !ctype_digit($galleryDir[2]) || !ctype_digit($galleryDir[3])) continue;
    $htmlFiles = scandir($source . $galleryDir);
    foreach($htmlFiles as $htmlFile) {
        if ($htmlFile[0] == 'i' || $htmlFile[0] == '.') continue;
        $filename = $source . '/' . $galleryDir . '/' . $htmlFile;
        $lines = file($filename);
        $notesPoint = 0;
        $titlePoint = 0;
        $execLine = '';
        for ($i = 0; $i < count($lines); $i++) {
            $line = $lines[$i];
            if (strpos($line,"gallery-prefs")) { // already done this file, so skip
                $execLine = '';
                break;
            }
            if (startsWith($titleTarget,$line)) {
                $titlePoint = $i;
                continue;
            }
            if (startsWith($notesTarget,$line)) {
                $notesPoint = $i;
                continue;
            }
            if (startsWith($execTarget,$line)) {
                $execLine = $line;
                continue;
            }
            if (startsWith($execEnd,$line)) {
                break;
            }
            if ($execLine != '') $execLine .= $line;
        }
        if ($execLine == '') continue; // not all files have this
        // we know have the exec line all in one string
        echo "Processing $filename\n";
        $options = explode('&',$execLine);
        $output = "<p>To reproduce this image exactly you need to set your preferences to:</p>\n<dl class=\"gallery-prefs\" >";
        foreach($options as $option) {
            $parts = explode('=',$option);
            if (count($parts) > 1) $parts[1] = rtrim($parts[1],"' \n");
            switch($parts[0]) {
            case 'shape': 
                    $output .= "<dt>Shield Shape</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'ar': 
                    $output .= "<dt>Aspect Ratio</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'palette': 
                    $output .= "<dt>Palette For Heraldic Tinctures</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'effect': 
                    $output .= "<dt>Visual Appearance</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'webcols': 
                    $output .= "<dt>Named Web Colours</dt><dd>Enabled</dd>\n";
                    break;
            case 'whcols': 
                    $output .= "<dt>Warhammer Colours</dt><dd>Enabled</dd>\n";
                    break;
            default:
                    break;
            }
        }
        $output .= "</dl>\n";
        $newContent = '';
        echo "processing " . $source . '/' . $galleryDir . '/' . $htmlFile . "\n";
        for ($k = 0; $k < count($lines); $k++) {
            if ($k == $notesPoint) $newContent .= $output;
            if ($k == $titlePoint) $newContent .= "<h3>Blazon</h3>\n";
            $newContent .= $lines[$k];
        }
        file_put_contents($filename,$newContent);
    }
}
