<?php
// Limits
$limit = 20;
$tries = 1000;

// read entries from file
$allEntries = [];
$list = simplexml_load_file('./list-of-entries.xml');
foreach($list as $entry) {
    $allEntries[] = array($entry->refnum, $entry->title);
}

// generate a list of 20 chosen randomly, no duplicates
$randomList = [];
$found = 0;
$numEntries = count($allEntries);
if ($numEntries < $limit) {
    echo "Not enough entries ($numEmtries)\n";
    exit;
}

while($found < $limit && $tries--) {
    $number = mt_rand(0,$numEntries - 1);
    if (in_array($number, $randomList, true)) continue;
    $randomList[] = $number;
    $found++;
}

foreach($randomList as $randomEntry) {
    $refnum = $allEntries[$randomEntry][0];
    $folder = substr($refnum,0,2);
    $title = $allEntries[$randomEntry][1];
    echo '<div class="gallery gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6">' . "\n<figure>\n";
    echo "<a href=\"$folder/gallery-$refnum.html\"><img src=\"$folder/img/gallery-$refnum.png\" alt=\"Shield image\" class=\"img-fluid\" /></a>\n";
    echo "<figcaption class=\"text-center\"><a href=\"$folder/gallery-$refnum.html\">$title ($refnum)</a> <br>\n";
    echo "<button id=\"button-$refnum\" type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"voteFor('$refnum');\">\n";
    echo "Like <span data-num=\"$refnum\" class=\"badge badge-light votecounter\">0</span>\n";
    echo "</button>\n</figcaption>\n</figure>\n</div>\n";
}
