<?php

$targetDir = "../source/_catalog/";
$sourceDir = "/var/www/test/include/svg/";
$host = "http://test.drawshield.home/";

$tempDir = "/tmp";

$action = "charges";

include "compile_data.inc";
include "compile.inc";

compile($argc,$argv);
