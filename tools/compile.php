<?php

$targetDir = "../source/_catalog/";
$sourceDir = "../../drawshield-code/svg/";

$tempDir = "/tmp";

$action = "charges";

include "compile_data.inc";
include "compile.inc";

compile($argc,$argv);
