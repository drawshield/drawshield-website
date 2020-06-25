<?php

$targetDir = "../source/_catalog/";
$sourceDir = "../../ds-code/svg/";

$tempDir = "/tmp";

$action = "charges";

include "compile_data.inc";
include "compile.inc";

compile($argc,$argv);
