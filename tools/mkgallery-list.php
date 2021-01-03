<?php

exec ("grep -R 'pageTitle:' ../source/gallery/*/*.html", $output);

//var_dump($output);
//exit(0);

$items = array();


$start = <<< START
[input]
    base_directory = "/var/www/test/gallery"
    frontmatter_handling = "Omit"
    stemming = "None"
    minimum_indexed_substring_length = 3
    files = [

START;
$end = <<< END
]

[output]
    filename = "../source/gallery/gallery.st"

END;

$content = $start;

function extractContent($filename) {
    $extractedContent = '';
    $fileLines = file($filename);
    $inHeader = false;
    $inComment = false;
    foreach($fileLines as $fileLine) {
        if (substr($fileLine,0,3) == '---') {
            $inHeader = !$inHeader;
            continue;
        }
        if ($inHeader) continue;
        if (substr($fileLine,0,9) == '<h3>Notes') continue;
        if (substr($fileLine,0,9) == '<p>If you') continue;
        $fileLine = trim(preg_replace('/<.*?>/','',$fileLine));
        if (substr($fileLine,0,4) == '<!--') {
            $inComment = true;
            continue;
        }
        if (substr($fileLine,0,3) == '-->') {
            $inComment = false;
            continue;
        }
        if ($inComment) continue;
        if ($fileLine) {
            $words = explode(' ',strtolower($fileLine));
            $contentLine = '';
            foreach ($words as $word) {
                if (substr($word,0,4) == 'href') continue;
                if (in_array($word, array (
                    'smaller','larger','very','much', 'slightly', 'shown', 'higher','lower'))) continue;
                $contentLine .= $word . ' ';
            }
            if ($contentLine)
                $extractedContent .= $contentLine . ' ';
        }
    }
    return $extractedContent;
}

// $count = 0;
foreach ($output as $line) {
    $parts = explode(':',$line);
    preg_match("/\d\d\d\d/", $parts[0], $matches);
    $refNum = $matches[0];
    $title = substr($parts[2],1);
    $title = str_replace('"',"'",$title);
    $title = str_replace('-'," ",$title);
    $fileContent = extractContent($parts[0]);
    $fileContent = str_replace('"',"'",$fileContent);
    $fileContent = str_replace('-'," ",$fileContent);
    $fileContent = str_replace('\\',"/",$fileContent);
    $content .= "{ url = \"/gallery/$refNum\", title = \"$title\", contents = \"$fileContent\", filetype=\"PlainText\" },\n";
  //   if ($count++ > 10) break;
}

$content .= $end;

file_put_contents('gallery.toml', $content);



