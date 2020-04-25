<?php


$folder = "../source/gallery/";
$configFile = "../_config.yml";

function getNextLowest($folder) {
	$lowestDir =999;
	$topdir = opendir($folder);
	while($topEntry = readdir($topdir)) {
		if (strlen($topEntry) == 2 
			&& is_dir($folder . $topEntry) 
			&& ctype_digit($topEntry[0]) 
			&& ctype_digit($topEntry[1]) 
			&& ((int)$topEntry < $lowestDir)) 
				$lowestDir = $topEntry;
	}
	closedir($topdir);
	$subDir = opendir($folder . $lowestDir);
	$lowestFile = 9999;
	while($subEntry = readdir($subDir)) {
		if (preg_match('/gallery-([0-9]{4}).html/', $subEntry, $match)) {
			if ((int)$match[1] < $lowestFile)
				$lowestFile = $match[1];
		}
	}
	return $lowestFile;
}

$lowest = getNextLowest($folder);

$config = file_get_contents($configFile);
$config = preg_replace('/latestGallery:\s*[0-9]{4}/', "latestGallery: $lowest", $config);
file_put_contents($configFile, $config);
exit(0);

