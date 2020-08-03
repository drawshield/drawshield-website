<?php

function startsWith($target, $start) {
    return (strncmp($target, $start, strlen($start)) == 0);
}

$prefix = "../source/gallery/";
$filename = "/gallery-";
$ext = ".html";

$path = $prefix . substr($argv[1],0,2). $filename. $argv[1] . $ext;
// echo $path;
$file = file($path);

echo "{\n";

foreach ($file as $line) {
    $line = trim($line);
    if (startsWith($line, 'pageTitle:')) {
        echo '"title": "' . substr($line, 10) . '",' . "\n";
    } elseif (startsWith($line, 'entryNum')) {
        echo '"link": "gallery/' . substr($line, -4) . '",' . "\n";
    } elseif (startsWith($line, '<!-- num=')) {
        $url = substr($line, strpos($line,"'") + 1, -1);
        parse_str(parse_url($url, PHP_URL_QUERY), $args);
        echo '"blazon": "' . $args['blazon'] . '"' . "\n";
    }
}

echo "}\n";
