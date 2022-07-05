<?php


$folder = "../source/gallery/";
$configFile = "../_config.yml";

function getNextHighest($folder) {
	$highestDir =0;
	$topdir = opendir($folder);
	while($topEntry = readdir($topdir)) {
		if (strlen($topEntry) == 4 
			&& is_dir($folder . $topEntry) 
			&& ctype_digit($topEntry[0]) 
			&& ctype_digit($topEntry[1]) 
			&& ctype_digit($topEntry[2]) 
			&& ctype_digit($topEntry[3]) 
			&& ((int)$topEntry > $highestDir)) 
				$highestDir = $topEntry;
	}
	closedir($topdir);
	$subDir = opendir($folder . $highestDir);
	$highestFile = 0;
	while($subEntry = readdir($subDir)) {
		if (preg_match('/gallery-([0-9]{6}).html/', $subEntry, $match)) {
			if ((int)$match[1] > $highestFile)
				$highestFile = $match[1];
		}
	}
	return $highestFile;
}

$highest = getNextHighest($folder);

$config = file_get_contents($configFile);
$config = preg_replace('/latestGallery:\s*[0-9]{6}/', "latestGallery: $highest", $config);
file_put_contents($configFile, $config);
file_put_contents($folder . "latest.txt", $highest);
exit(0);

