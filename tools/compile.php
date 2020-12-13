<?php

$targetDir = "../source/_catalog/";
$sourceDir = "/var/www/html/include/svg/";
$host = "https://drawshield.net/";

$tempDir = "/tmp";

$action = "charges";

include "compile_data.inc";
include "compile.inc";

compile($argc,$argv);
