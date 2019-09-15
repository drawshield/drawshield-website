<?php

// if (PHP_OS == "Linux") {
//     $targetDir = "/mnt/c/Users/karlw/gdrive/Projects/drawshield/source/_catalog/";
//     $sourceDir = "/mnt/c/Users/karlw/gdrive/Projects/draw-code/include/svg/";
// } else {
//     $targetDir = "/Users/karlw/gdrive/Projects/drawshield/source/_catalog/";
//     $sourceDir = "/Users/karlw/gdrive/Projects/draw-code/include/svg/";
// }
$targetDir = "/home/karl/Nextcloud/drawshield/source/_catalog/";
$sourceDir = "/home/karl/Nextcloud/draw-code/include/svg/";

$tempDir = "/tmp";

$action = "charges";

include "compile_data.inc";
include "compile.inc";

compile($argc,$argv);
