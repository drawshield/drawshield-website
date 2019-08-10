<?php

if (PHP_OS == "Linux") {
    $targetDir = "/mnt/c/Users/karlw/gdrive/Projects/drawshield/source/_catalog/";
    $sourceDir = "/mnt/c/Users/karlw/gdrive/Projects/draw-code/include/svg/";
} else {
    $targetDir = "/Users/karlw/gdrive/Projects/drawshield/source/_catalog/";
    $sourceDir = "/Users/karlw/gdrive/Projects/draw-code/include/svg/";
}
$tempDir = "/tmp";

include "compile_data.inc";
include "compile.inc";

$action = "addnew";

/*
**	Create a catalog of charge images
*/
function addnew($folder) {
    global $targetDir, $sourceDir, $keep, $tempDir, $colours;

    $sources = scandir($sourceDir . "charges/$folder" );
    $targets = scandir($targetDir. "charges/$folder" );

    /*
    **	Delete any in target dir NOT in source dir
    */

    foreach ($targets as $targetItem) {
        if ($targetItem[0] == '.' || $targetItem == "index.html") continue;
        $toFind = mapping($folder, null, substr($targetItem,0,-4)) . ".svg";
    }

    /*
    **	Create anything in source dir NOT in target dir
    *    OR if source is newer than target
    */
    foreach ($sources as $sourceItem) {
        if ($sourceItem[0] == '.' || substr($sourceItem,-4) != '.svg') continue;
        $toFind = mapping($folder, substr($sourceItem,0,-4), null);
        if (!in_array($toFind, $targets)) {
            $features = getFeatures("$sourceDir/charges/$folder/$sourceItem", "$targetDir/charges/$folder/$toFind.txt");
            $specifier = is_numeric($toFind[0]) ? ' ' : ' a ';
            $blazon = "argent $specifier " .
             str_replace('-',' ',$toFind) . " grey";
            for ($i = 0; $i < count($features); $i++) {
                $blazon .= ' ' . $features[$i] . ' ' . $colours[$i][0];
            }
            $blazon = rawurlencode($blazon);
            $execString = 'wget -q -O ' . "$targetDir/charges/$folder/$toFind.png" .
            ' "http://drawshield.home/include/quickimage.php?blazon=' . $blazon .
            '&outputformat=png&size=400&effect=none&nomask=1"';
            echo "Drawing $blazon\n";
            exec($execString);
        }
    }
}

compile($argc,$argv);
