<?php
// Limits
$limit = 20;
$tries = 1000;

$highest = intval(file_get_contents("./latest.txt"));

// generate a list of 20 chosen randomly, no duplicates
$randomList = [];
$found = 0;

while($found < $limit && $tries--) {
    $number = mt_rand(1,$highest);
    if (in_array($number, $randomList, true)) continue;
    $randomList[] = $number;
    $found++;
}

foreach($randomList as $randomEntry) {
    $refnum = str_pad($randomEntry, 6, "0", STR_PAD_LEFT);
    $folder = substr($refnum,0,4);
    $fileContent = file_get_contents("$folder/gallery-$refnum.html");
    preg_match("/<h1 class=\"text-center\">(.*?)</", $fileContent, $match);
    $title = $match[1];

    if (strlen($title) > 20) {
        $title = substr($title,0,17) . "...";
    }
    echo '<div class="gallery gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6">' . "\n<figure>\n";
    echo "<a href=\"$folder/gallery-$refnum.html\"><img src=\"$folder/img/gallery-$refnum.png\" alt=\"Shield image\" class=\"img-fluid\" /></a>\n";
    echo "<figcaption class=\"text-center\"><a href=\"$folder/gallery-$refnum.html\">$title ($refnum)</a> <br>\n";
    echo "<button id=\"button-$refnum\" type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"voteFor('$refnum');\">\n";
    echo "Like <span data-num=\"$refnum\" class=\"badge badge-light votecounter\">0</span>\n";
    echo "</button>\n</figcaption>\n</figure>\n</div>\n";
}
