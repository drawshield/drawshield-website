<?php

if (!array_key_exists('category',$_GET)) exit;

$dir = $_GET['category'];
$files = scandir($dir); 
$addLink = strncasecmp($dir,'charges',7) == 0;

foreach ($files as $file) {
    if (substr($file,-4) == ".png") {
        $basename = substr($file,0,-4);
        $caption = ucwords(str_replace('-',' ',$basename));
        echo "<div class=\"gallery gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n";
        echo "<figure>\n";
        if ($addLink) {
            echo "<a href=\"https://drawshield.net/create/index.html?blazon=argent%20a%20${basename}%20grey&palette=drawshield&shape=heater&effect=none\">\n";
        }
        echo "<img src=\"/catalog/$dir/$file\" alt=\"$caption\" class=\"img-fluid\" />\n";
        if ($addLink) {
            echo "</a>\n";
        }
        echo "<figcaption class=\"text-center\">$caption</figcaption>\n";
        echo "</figure>\n";
		if (in_array($basename . '.txt', $files, true)) {
			echo "<p>(" . file_get_contents("$dir/$basename.txt") . ")</p>\n";
		}
        echo "</div>\n";
    }
}

