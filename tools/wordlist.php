<?php

$wordlist = [];

$base = '../source/reference/parker/';
$subs = 'abcdefghijklmnopqrstuvwyz';
#$subs = 'bcd';
$dom = new DOMDocument;

$head = <<< 'ENDHEAD'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
ENDHEAD;

$tail = <<< 'ENDTAIL'
</body>
</html>
ENDTAIL;

for ($j = 0; $j < strlen($subs); $j++) {
    $target = $base . $subs[$j];
    $dh = opendir($target);
    while (($file = readdir($dh)) !== false) {
        if ($file[0] == '.' || $file[0] == '_' || $file == "index.html" || is_dir("$target/$file")) {
            continue;
        }
        echo "Processing $target/$file\n";
        $lines = file($target . '/' . $file);
        $count = 0;
        for ($i = 0; $i < count($lines); $i++ ) {
            if (strncmp('---', $lines[$i], 3 ) === 0) {
                $count = $i;
            }
        }
        $html = implode(' ', array_slice($lines, $count + 1));
        $html = $head . $html . $tail;
        @$dom->loadHTML($html);
        $body = $dom->getElementsByTagName('body');
        $content = iconv("UTF-8", "ASCII//TRANSLIT", $body->item(0)->nodeValue);
        $words = preg_split("/[\[\]\s,:;\.\"'\(\)-]/", $content);
        foreach($words as $word) {
            if (strspn($word, '1234567890') === strlen($word)) {
                continue;
            }
            $word = strtolower($word);
            if (array_key_exists($word, $wordlist)) {
                $wordlist[$word] += 1;
            } else {
                $wordlist[$word] = 1;
            }
        }
    }
}
arsort($wordlist, SORT_NUMERIC);
file_put_contents('goodwords.php',var_export($wordlist, true));
exit;
/* foreach ( $wordlist as $word -> $count ) {
    echo "$word $count\n";
} */

