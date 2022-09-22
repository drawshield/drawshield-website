<?php

$targetDir = "../source/_catalog/";
$sourceDir = "/Users/karlw/Sites/include/svg/";
$host = "http://localhost/";

$tempDir = "/tmp";

$action = "charges";

include "compile_data.inc";
include "compile.inc";

compile($argc,$argv);
