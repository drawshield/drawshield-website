<?php
$folders = [
	"parker/a",
	"parker/b",
	"parker/c",
	"parker/d",
	"parker/e",
	"parker/f",
	"parker/g",
	"parker/h",
	"parker/i",
	"parker/j",
	"parker/k",
	"parker/l",
	"parker/m",
	"parker/n",
	"parker/o",
	"parker/p",
	"parker/q",
	"parker/r",
	"parker/s",
	"parker/t",
	"parker/u",
	"parker/v",
	"parker/w",
	"parker/y",
	"elvin/a",
	"elvin/b",
	"elvin/c",
	"elvin/d",
	"elvin/e",
	"elvin/f",
	"elvin/g",
	"elvin/h",
	"elvin/i",
	"elvin/j",
	"elvin/k",
	"elvin/l",
	"elvin/m",
	"elvin/n",
	"elvin/o",
	"elvin/p",
	"elvin/q",
	"elvin/r",
	"elvin/s",
	"elvin/t",
	"elvin/u",
	"elvin/v",
	"elvin/w",
	"elvin/y",
	"elvin/z",
	"public-arms/a",
	"public-arms/b",
	"public-arms/c",
	"public-arms/d",
	"public-arms/e",
	"public-arms/f",
	"public-arms/g",
	"public-arms/h",
	"public-arms/i",
	"public-arms/j",
	"public-arms/k",
	"public-arms/l",
	"public-arms/m",
	"public-arms/n",
	"public-arms/o",
	"public-arms/p",
	"public-arms/q",
	"public-arms/r",
	"public-arms/s",
	"public-arms/t",
	"public-arms/u",
	"public-arms/v",
	"public-arms/w",
//	"public-arms/x",
	"public-arms/y",
	"public-arms/z"
];
$folder = $folders[rand(0,count($folders))];
$dh = opendir($folder);
$possibles = [];
if ($dh) {
	while (($file = readdir($dh)) !== false) {
		$possibles[] = $file;
	}
	closedir($dh);
	do {
		$actual = $possibles[rand(0,count($possibles))];
	} while ($actual == 'index.html' || $actual == 'img');
} else {
	$folder = "/parker/a";
	$actual = "abacot.html";
}
header("HTTP/1.1 307 Temporary Redirect");
header("Location: /reference/" . $folder . "/" . $actual );
exit;
?>