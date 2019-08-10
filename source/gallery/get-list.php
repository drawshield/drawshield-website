<?php

$history = array_reverse(file('/home/karlwilc/etc/giotd-list.txt'));

$day = 0;
$output = '';

foreach ($history as $entry) {
    $number = trim($entry);
    if (strlen($number) != 4 || $number[0] == '#') continue;
    $output .= "<p>" . date("l, jS F Y",strtotime("-$day day"));
    $output .= ' <a href="/gallery/gallery-' . $number . '.html">gallery-' . $number . ".html</a></p>\n";
    $day += 1;
}

header("content: text/html");
echo $output;
