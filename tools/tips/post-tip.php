<?php


$content = '';
$type = '';
$source = '';

// Check urgent folder first
$urgent = scandir('urgent');

foreach ($urgent as $urgentItem) {
    if ($urgentItem[0] == '.' || (substr($urgentItem,-4) != '.txt')) continue;
    $source = 'urgent/' . $urgentItem;
    $target = 'used/' . $urgentItem;
    $content = file_get_contents($source);
    $content = preg_replace('/\n/','',$content);
    $parts = explode('-',$urgentItem);
    $type = $parts[0];
    break; // only use first one, leave others for later
}

if ($content == '' || $type == '') { // nothing urgent found
    $pool = scandir('pool');
    for ($i = 0; $i < 10; $i++) {
        $poolItem = $pool[rand(0,count($pool) - 1)];
        if ($poolItem[0] == '.' || (substr($poolItem, -4) != '.txt')) continue;
        $source = 'pool/' . $poolItem;
        $target = 'used/' . $poolItem;
        $content = file_get_contents($source);
	$content = preg_replace('/\n/','',$content);
        $parts = explode('-', $poolItem);
        $type = $parts[0];
        break; // only use first one, leave others for later
    }

}

if ($content != '' && $type != '') {
    $tweet = "Build-bot's $type of the day: $content";
    system( '/home/ubuntu/gems/bin/t update ' . escapeshellarg($tweet));
//    echo  '/home/ubuntu/gems/bin/t update ' . escapeshellarg($tweet);
    rename($source, $target);
}

