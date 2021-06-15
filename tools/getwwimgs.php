<?php

$baseURL = "http://wappenwiki.org/api.php?action=query&list=allimages&ailimit=500&aiprop=url&format=json";
$cont = '';
$count = 0;

while (true) {
    $content = json_decode(file_get_contents($baseURL . $cont));

    foreach($content->query->allimages as $img) {
        echo $img->url . "\n";
    }

    if ($content->{'query-continue'}) {
        $cont = "&aicontinue=" . $content->{'query-continue'}->allimages->aicontinue;
    } elseif ($count++ > 5) {
        break;
    } else {
        break;
    }
}

