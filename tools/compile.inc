<?php

$keep = true;

$indexHtml = <<<EOT
---
pageTitle: %NAME% Charges
---
<!-- /catalog/charges/%NAME%/index.html starts -->
<p>%NAME%</p>

{% include png-gallery.html %}
<!-- /catalog/charges/%NAME%/index.html ends -->
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
    **	Delete any in target dir NOT in source dir
    */

    /* foreach ($targets as $targetItem) {
         if ($targetItem[0] == '.' || $targetItem == "index.html") continue;
         $toFind = mapping($folder, null, substr($targetItem,0,-4)) . ".svg";
         if (!in_array($toFind, $sources)) {
             $doomedFile = "$targetDir/charges/$folder/$targetItem";
             echo "Removing $doomedFile\n";
             unlink ($doomedFile);
         }
     } */

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

function bordures() {

    global $targetDir, $sourceDir;

    $sources = scandir($sourceDir . "ordinaries/bordures" );
    $targets = scandir($targetDir. "ordinaries/bordures" );
    foreach ($sources as $sourceItem) {
        if ($sourceItem[0] == '.' || substr($sourceItem, -4) != '.svg') continue;
        $basename = substr($sourceItem, 0, -4);
        $parts = explode('-', $basename);
        $shape = $parts[0];
        $chief = '';
        $edge = '';
        $compony = '';
        for ($i = 1; $i < count($parts); $i++) {
            switch ($parts[$i]) {
                case 'chief':
                    $chief = " a chief sable ";
                    break;
                case 'impaled':
                    $shape = null;
                    break;
                case 'of16':
                    break; // ignore for now
                case 'compony1':
                    $compony = " and steel ";
                    $edge .= " compony ";
                    break;
                default:
                    $edge .= " $parts[$i] ";
            }
        }
        if ($shape == null) continue;
        if ($shape == 'quarter')
            $blazon = "quarterly of 9 1st argent a bordure $edge sable $compony 2nd grey 3rd argent 4th grey 5th argent 6th grey 7th argent 8th grey 9th argent drawn in a french shape";
        else
            $blazon = "argent $chief a bordure $edge grey $compony drawn in a $shape shape";
        echo $blazon . "\n";
        $blazon = rawurlencode($blazon);
        $execString = 'wget -q -O ' . "$targetDir/ordinaries/bordures/$basename.png" .
            ' "http://test.drawshield.net/include/drawshield.php?blazon=' . $blazon .
            '&outputformat=png&size=400&effect=none"';
//         echo "Executing $execString\n";
        echo "Adding $shape\n";
        exec($execString);

    }

}

function ordinaries() {
    global $ordList, $keep;
    global $targetDir, $sourceDir, $tempDir;

    @mkdir("$targetDir/ordinaries");
    foreach ($ordList as $path) {
        list($folder,$ord) = explode('/',$path);
        if (file_exists("$targetDir/ordinaries/$folder/$ord.png")) continue;
        @mkdir("$targetDir/ordinaries/$folder");
        $specifier = is_numeric($ord[0]) ? ' ' : ' a ';
        $blazon = "argent $specifier " .
            str_replace(array('-','+'),' ',$ord) . " grey";
        $blazon =  rawurlencode($blazon);
        $execString = 'wget -q -O ' . "$targetDir/ordinaries/$folder/$ord.png" .
        ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
        '&outputformat=png&size=400&effect=none&nomask=1"';
        echo "Executing $execString\n";
        exec($execString);
        // $execString2 = "convert $tempDir/ordinary.svg -size 400x480 '$targetDir/ordinaries/$folder/$ord.png'";
        // echo "Executing $execString2\n";
        // exec($execString2);
        // if (!$keep) unlink("$tempDir/ordinary.svg");
    }
}


function achievements() {
    global $achievelist, $keep;
    global $targetDir, $sourceDir, $tempDir;

    @mkdir("$targetDir/achievements");
    foreach ($achievelist as $path) {
        list($folder,$achievement) = explode('/',$path);
        if (file_exists("$targetDir/achievements/$folder/achievement.png")) continue;
        @mkdir("$targetDir/achievements/$folder");
        $blazon = "gray  achievement " .
            str_replace(array('-','+'),' ',achievement);
        $blazon =  rawurlencode($blazon);
        $execString = 'wget -q -O ' . "$targetDir/achievements/$folder/achievement.png" .
        ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
        '&outputformat=png&size=400&effect=none&nomask=1"';
        echo "Executing $execString\n";
        exec($execString);
    }
}


function divisions() {
    global $divList, $keep;
    global $targetDir, $sourceDir, $tempDir;

    @mkdir("$targetDir/divisions");
    foreach ($divList as $path) {
        list($folder,$div) = explode('/',$path);
        if (file_exists("$targetDir/divisions/$folder/$div.png")) continue;
        @mkdir("$targetDir/divisions/$folder");
        $blazon = str_replace(array('-','+'),' ',$div) . 
            " argent and grey";
        if ($folder == "multi")
            $blazon .= " and sable";
        $blazon =  rawurlencode($blazon);
        $execString = 'wget -q -O ' . "$targetDir/divisions/$folder/$div.png" .
        ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
        '&outputformat=png&size=400&effect=none&nomask=1"';
        echo "Executing $execString\n";
        exec($execString);
        // $execString2 = "convert $tempDir/division.svg -size 400x480 '$targetDir/divisions/$folder/$div.png'";
        // echo "Executing $execString2\n";
        // exec($execString2);
        // if (!$keep) unlink("$tempDir/division.svg");
    }
}

function arrangements() {
    global $arrList, $keep;
    global $targetDir, $sourceDir, $tempDir;

    @mkdir("$targetDir/arrangements");
    foreach ($arrList as $example) {
        if (file_exists("$targetDir/arrangements/$example.png")) continue;
        $blazon = 'argent ' . str_replace(array('-','+'),' ',$example) . 
            " grey";
        $blazon =  rawurlencode($blazon);
        $execString = 'wget -q -O ' . "$targetDir/arrangements/$example.png" .
        ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
        '&outputformat=png&size=400&effect=none&nomask=1"';
        echo "Executing $execString\n";
        exec($execString);
    }
}

function orientations() {
    global $oriList, $keep;
    global $targetDir, $sourceDir, $tempDir;

    @mkdir("$targetDir/orientations");
    foreach ($oriList as $example) {
        if (file_exists("$targetDir/orientations/$example.png")) continue;
        $blazon = 'argent ' . str_replace(array('-','+'),' ',$example) . 
            " grey";
        $blazon =  rawurlencode($blazon);
        $execString = 'wget -q -O ' . "$targetDir/orientations/$example.png" .
        ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
        '&outputformat=png&size=400&effect=none&nomask=1"';
        echo "Executing $execString\n";
        exec($execString);
    }
}

function treatments() {
    global $treatList, $keep;
    global $targetDir, $sourceDir, $tempDir;

    @mkdir("$targetDir/treatments");
    foreach ($treatList as $path) {
        list($folder,$treat) = explode('/',$path);
        if (file_exists("$targetDir/treatments/$folder/$treat.png")) continue;
        @mkdir("$targetDir/treatments/$folder");
        if ($folder == "furs") 
            $blazon = str_replace(array('-','+'),' ',$treat);
        elseif ($folder == "fixed")
            $blazon .= "grey " . str_replace(array('-','+'),' ',$treat);
        else
            $blazon = "argent " . str_replace(array('-','+'),' ',$treat) . " grey";
        $blazon =  rawurlencode($blazon);
        $execString = 'wget -q -O ' . "$tempDir/treatment.svg" .
        ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
        '&outputformat=svg&size=400&effect=none&nomask=1"';
        echo "Executing $execString\n";
        exec($execString);
        $execString2 = "convert $tempDir/treatment.svg -size 400x480 '$targetDir/treatments/$folder/$treat.png'";
        echo "Executing $execString2\n";
        exec($execString2);
        if (!$keep) unlink("$tempDir/treatment.svg");
    }
}

function edges() {
    global $edgeList, $keep;
    global $targetDir, $sourceDir, $tempDir;

    @mkdir("$targetDir/edges");
    foreach ($edgeList as $path) {
        list($folder,$edge) = explode('/',$path);
        if (file_exists("$targetDir/edges/$folder/$edge.png")) continue;
        @mkdir("$targetDir/edges/$folder");
        $specifier = is_numeric($edge[0]) ? ' ' : ' a fess ';
        $blazon = rawurlencode("argent $specifier " .
            str_replace(array('-','+'),' ',$edge) . " grey");
        $execString = 'wget -q -O ' . "$tempDir/edge.svg" .
        ' "http://test.drawshield.net/include/quickimage.php?blazon=' . $blazon .
        '&outputformat=svg&size=400&effect=none&nomask=1"';
        echo "Executing $execString\n";
        exec($execString);
        $execString2 = "convert $tempDir/edge.svg -size 400x480 '$targetDir/edges/$folder/$edge.png'";
        echo "Executing $execString2\n";
        exec($execString2);
        if (!$keep) unlink("$tempDir/edge.svg");
    }
}

function compile($argc, $argv) {
    global $sourceDir, $targetDir, $tempDir, $ignoreFolders, $action, $indexHtml;

    @mkdir($tempDir);

    $allCharges = false;
    $ords = false;
    $edges = false;
    $divs = false;
    $treats = false;
    $achs = false;
    $arr = false;
    $ori = false;
    $bor = false;

    if ($argc > 1) { // must be a subset
        if (substr($argv[1], 0, 3) == 'ord') {
            $ords = true;
        } elseif (substr($argv[1], 0, 3) == 'edg') {
            $edges = true;
        } elseif (substr($argv[1], 0, 3) == 'div') {
            $divs = true;
        } elseif (substr($argv[1], 0, 3) == 'tre') {
            $treats = true;
        } elseif (substr($argv[1], 0, 3) == 'ach') {
            $achs = true;
        } elseif (substr($argv[1], 0, 3) == 'arr') {
            $arr = true;
        } elseif (substr($argv[1], 0, 3) == 'ori') {
            $ori = true;
        } elseif (substr($argv[1], 0, 3) == 'bor') {
            $bor = true;
        } else {
            $allCharges = array_splice($argv, 1);
            $ords = false;
        }
    } else { // otherwise do everything
        $allCharges = scandir($sourceDir . "/charges");
        $ords = $edges = $divs = true;
    }
    if ($allCharges) {
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
    if ($ords) {
        ordinaries();
    }
    if ($edges) {
        edges();
    }
    if ($divs) {
        divisions();
    }
    if ($treats) {
        treatments();
    }
    if ($achs) {
        achievements();
    }
    if ($arr) {
        arrangements();
    }
    if ($bor) {
        bordures();
    }
    if ($ori) {
        orientations();
    }
}