<?php

$oldRef = $_GET["ref"];

$newRef = str_pad(10000-$oldRef, 6, "0", STR_PAD_LEFT);
$folder = substr($newRef,0,4);

header("Location: /gallery/$folder/gallery-$newRef.html");

exit();