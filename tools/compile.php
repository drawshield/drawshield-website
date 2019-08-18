<?php

// if (PHP_OS == "Linux") {
//     $targetDir = "/mnt/c/Users/karlw/gdrive/Projects/drawshield/source/_catalog/";
//     $sourceDir = "/mnt/c/Users/karlw/gdrive/Projects/draw-code/include/svg/";
// } else {
//     $targetDir = "/Users/karlw/gdrive/Projects/drawshield/source/_catalog/";
//     $sourceDir = "/Users/karlw/gdrive/Projects/draw-code/include/svg/";
// }
$targetDir = "/media/sf_gdrive/Projects/drawshield/source/_catalog/";
$sourceDir = "/media/sf_gdrive/Projects/draw-code/include/svg/";

$tempDir = "/tmp";

$action = "charges";

include "compile_data.inc";
include "compile.inc";

compile($argc,$argv);
