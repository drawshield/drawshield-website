<?php
$latest = intval(file_get_contents("latest.txt"));
$newRef = $latest;
if (array_key_exists("ref", $_GET)) {
    $oldRef = $_GET["ref"];
    $newRef = 10000-$oldRef;
} elseif (array_key_exists("next", $_GET)) {
    $current = $_GET["next"];
    $newRef = intval($current) + 1;
    if ($newRef > $latest) {
        $newRef = 1;
    }
} elseif (array_key_exists("prev", $_GET)) {
    $current = $_GET["prev"];
    $newRef = intval($current) - 1;
    if ($newRef < 1) {
        $newRef = $latest;
    }
} elseif (array_key_exists("last", $_GET)) {
    $newRef = 1;
} elseif (array_key_exists("first", $_GET)) {
    $newRef = $latest;
}

$newRef = str_pad($newRef, 6, "0", STR_PAD_LEFT);
$folder = substr($newRef,0,4);
header("Location: /gallery/$folder/gallery-$newRef.html");

exit();