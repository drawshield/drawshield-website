<?php

$dirs = scandir(".");

$prevIndex = '';
$nextIndex = '';
$target = '';
foreach($dirs as $dir) {
    if (is_dir($dir)) continue;
    if ($target == '') {
        $target = "$dir/index.html";
        continue;
    }
    $nextIndex = "$dir/index.html";
    $data = file($target);
    file_put_contents("$target-", implode($data));
    if ($prevIndex != '') {
        array_splice($data,1,0,"prevIndex: $prevIndex\n");
    }
    if ($nextIndex != '') {
        array_splice($data,1,0,"nextIndex: $nextIndex\n");
    }
    file_put_contents($target,implode($data));
    $prevIndex = $target;
    $target = "$dir/index.html";
}
// last item
$data = file($target);
file_put_contents("$target-", implode($data));
if ($prevIndex != '') {
    array_splice($data,1,0,"prevIndex: $prevIndex\n");
}
file_put_contents($target,implode($data));
