<?php

$latest = intval(file_get_contents('latest.txt'));
$increment = intval(file_get_contents('increment.txt'));

if (isset($_GET['of'])) {
    $current = intval($_GET['of']);
    $index = intval(($latest - $current) / $increment);
    if ($index == 0) $index = '';
    header("Location: /gallery/index$index.html", true, 302);
    exit();

} // else
header("Location: /gallery/index.html" , true, 302);
exit();
