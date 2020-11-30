<?php


$targetDir = "../source/_catalog/";
$sourceDir = "../../ds-code/svg/";

$tempDir = "/tmp";

$indexHtml = <<<EOT
---
pageTitle: %NAME% Charge metadata
---

<p>%NAME%</p>
<div class="row">
%CONTENT%
</div>

EOT;

function nameonly($keyword) {
    $pos = strpos($keyword,'/');
    if ($pos) $keyword = substr($keyword,$pos + 1);
    return $keyword;
}

function matchBoth($folder, $keyword, $match) {
    $pos = strpos($keyword,'/');
    if ($pos) {
        return "$folder/$match" == $keyword;
    } // else
    return $keyword == $match;

}


function mapping($folder, $source, $target = null) {
    global $mappings;

    $mapCount = count($mappings);

    if ($source == null) { // translate target back to source
        for ($i = 1; $i < $mapCount; $i += 2) {
            if ($target == $mappings[$i]) {
                return nameonly($mappings[$i-1]);
            }
        }
        return $target;
    } else { // translate source to target
        for ($i = 0; $i < $mapCount; $i += 2) {
            if (matchBoth($folder, $mappings[$i], $source)) {
                return $mappings[$i+1];
            }
        }
        return $source;
    }
    return null; // shouldn't happen
}

$colours = array (
    array ('gules','red'),
    array ('azure','blue'),
    array ('vert','green'),
    array ('purpure','purple'),
    array ('brunatre','brown'),
    array ('orange','orange'),
);

function getFeatures($sourceSVG,$targetTXT) {
    global $features, $colours;

    $haystack = file_get_contents($sourceSVG);
    $retval = array();
    $result = '';
    $counter = 0;
    foreach ($features as $needle) {
        if (preg_match("/\"$needle(-[1-9])?\"/",$haystack)) {
            if ($needle == 'crowned') {
                $span = '{crowned}';
            } else {
                $retval[] = $needle;
                $colour = $colours[$counter++][1];
                $span = "<span style=\"color: $colour;\">$needle</span>";
            }
            if ($result)
                $result .= ", $span";
            else
                $result = $span;
        }
    }
    if ($result) {
        file_put_contents($targetTXT,$result);
        echo "features: " . implode($retval,' ') . "\n";
    } else {
        if (file_exists($targetTXT))
            unlink($targetTXT);
    }
    return $retval;
}

function features($folder) {
    global $targetDir, $sourceDir;

    $sources = scandir($sourceDir . "charges/$folder" );
    foreach ($sources as $sourceItem) {
        if ($sourceItem[0] == '.' || substr($sourceItem,-4) != '.svg') continue;
        $toFind = mapping($folder, substr($sourceItem,0,-4), null);
        getFeatures("$sourceDir/charges/$folder/$sourceItem", "$targetDir/charges/$folder/$toFind.txt");
    }
}

/*
**	Create a catalog of charge images
*/
function charges($folder)
{
    global $targetDir, $sourceDir, $keep, $tempDir, $colours;

    $sources = scandir($sourceDir . "charges/$folder");
    $targets = scandir($targetDir . "charges/$folder");


    /*
    **	Create anything in source dir NOT in target dir
    *    OR if source is newer than target
    */

    foreach ($sources as $sourceItem) {
        if ($sourceItem[0] == '.' || substr($sourceItem, -4) != '.svg') continue;
        $toFind = mapping($folder, substr($sourceItem, 0, -4), null);
        // echo $toFind . '.png ' . (in_array($toFind  . '.png', $targets) ? 'found ' : 'not found ') .  filemtime("$sourceDir/charges/$folder/$sourceItem") . ' ' .
        //filemtime("$targetDir/charges/$folder/$toFind.png") . PHP_EOL;
        if (!in_array($toFind . '.png', $targets) /*||
                filemtime("$sourceDir/charges/$folder/$sourceItem") >
                filemtime("$targetDir/charges/$folder/$toFind.png") */) {
            $features = getFeatures("$sourceDir/charges/$folder/$sourceItem", "$targetDir/charges/$folder/$toFind.txt");
            $specifier = is_numeric($toFind[0]) ? ' ' : ' a ';
            $blazon = "argent $specifier " .
                str_replace('-', ' ', $toFind) . " grey";
            for ($i = 0; $i < count($features); $i++) {
                $blazon .= ' ' . $features[$i] . ' ' . $colours[$i][0];
            }
            $blazon = rawurlencode($blazon);
            $execString = 'wget -q -O ' . "$targetDir/charges/$folder/$toFind.png" .
                ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
                '&outputformat=png&size=400&effect=none&nomask=1"';
            // echo "Executing $execString\n";
            echo "Adding $toFind\n";
            exec($execString);
        }
    }
}


function compile($argc, $argv) {
    global $sourceDir, $targetDir, $tempDir, $ignoreFolders, $action, $indexHtml;

    @mkdir($tempDir);

    $allCharges = false;

    if ($argc > 1) { // must be a subset
            $allCharges = array_splice($argv, 1);
    } else { // otherwise do everything
        $allCharges = scandir($sourceDir . "/charges");
    }

    foreach($allCharges as $chargeDir) {
        if (!file_exists("$sourceDir/charges/$chargeDir")) {
            echo "No source folder named $chargeDir\n";
            continue;
        }
        if (in_array($sourceDir, $ignoreFolders)) continue;
        if ($chargeDir[0] == '.') continue;
        if (!file_exists("$targetDir/charges/$chargeDir")) {
            mkdir("$targetDir/charges/$chargeDir");
            file_put_contents(
                "$targetDir/charges/$chargeDir/index.html",
                str_replace('%NAME%',ucwords($chargeDir),$indexHtml));
        }
        $action($chargeDir);
        // features($chargeDir);
    }

}