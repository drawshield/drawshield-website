<?php

$targetDir = '.';
$sourceDir = '../source/_catalog/';

function listCharges($folder) {
    global $targetDir, $sourceDir;

    $montage = [];
    $sources = scandir($sourceDir . "charges/$folder" );
    $retval = '';

    $retval .= 'shieldData["~chg-' . $folder . '~"] = [ "Choose one of the ' . $folder . ' charges",' . "\n";
    foreach ($sources as $sourceItem) {
        if ($sourceItem[0] == '.' || (substr($sourceItem,-4) != '.png')) continue;
        if (count($montage) < 4) {
            $montage[] = "$sourceDir/charges/$folder/$sourceItem";
        }
        $words = substr($sourceItem,0,-4);
        $words = str_replace('-',' ', $words );
        $retval .= "'$words', '$words', '/catalog/charges/$folder/$sourceItem',\n";
    }
    $retval .= "];\n";
     exec('montage -tile 2x -size 120x120 ' . implode(' ', $montage) . " ../source/build/img/chg/$folder.png");
//    echo 'montage -tile 2x -size 120x120 ' . implode(' ', $montage) . " $folder.png";
    return $retval;
}
$buffer = '';
$output = '';
$allCharges = scandir($sourceDir . 'charges');
$output .= 'shieldData["~x-charge~"] = [ "Choose one of these groups of charges",' . "\n";
foreach ($allCharges as $chargeDir) {
    if (strpos($chargeDir, '.') !== false) continue;
    $words = str_replace('-',' ', $chargeDir );
    $output .= "'~chg-$chargeDir~','$words',  'chg/$chargeDir.png',\n";
    $buffer .= listCharges($chargeDir);
}

$output .= "];\n";

file_put_contents('../source/build/charges.js', $output . $buffer);
