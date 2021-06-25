<?php
// Global variables
$success = '';   # Return value goes in here
$error = '';     # If not empty, fail (whatever the state of $success)
$imgFormat = 'jpg';

// Arguement processing
// Required arguments
if (!isset($_GET['action'])) {
    $error = 'No action in request';
} else {
    $action = $_GET['action'];
}

if (!isset($_GET['arg'])) {
    $error = 'No argument in request';
} else {
    $arg = $_GET['arg'];
}
// Optional arguments (all requests)
$format = @$_GET['format'] ?: 'json';
$source = @$_GET['source'] ?: '*';
$match = @$_GET['match'] ?: 'fuzzy';

// Main dispatch based on action
if ( !$error ) {
    switch ($action) {
        case 'define':
            doDefine($arg);
            break;
        case 'giotd':
            doGiotd($arg);
            break;
        case 'challenge':
            doChallenge($arg);
        break;
        case 'catalog':
            doCatalog($arg);
        break;
        case 'gallery':
            doGallery($arg);
        break;
        default:
            $error = "Unknown action";
            break;
    }
}

// Output processing
if ($error) {
	if ($format == 'html') {
		$headerContent = 'content-type: text/html';
		$dataContent = "<p>Drawshield API Error: " . $error . "</p>";
	} else {
		$headerContent = 'content-type: application/json';
		$dataContent = json_encode(array('error' => $error));
	}
} else {
	switch ($format) {
        case 'text':
            $headerContent = 'content-type: text/plain';
            $dataContent = $success;
            break;
		case 'html':
			$headerContent = 'content-type: text/html';
			$dataContent = $success;
			break;
		case 'json':
			$headerContent = 'content-type: application/json';
			$dataContent = json_encode($success);
			break;
		case 'img':
			$headerContent = "content-type: image/$imgFormat";
			$dataContent = file_get_contents($success);
			break;
		case 'redirect':
			header("HTTP/1.1 301 Moved Permanently");
			header("Location: " . $success);
			exit(); 
			break;
		default:
			$headerContent = 'content-type: application/json';
			$dataContent = json_encode('unknown output format');
			break;
	}
}

header($headerContent);
echo($dataContent);

// Force exit
exit;

// Actions, as required
function lookup($source, $term, $format, $exact = false) {
    $term = strtolower($term);
    $term = str_replace(' ', '-', $term);
    $targetDir = "../reference/$source/" . $term[0] . '/';
    $targetEntry = false;

    if ( !is_dir($targetDir)) {
        $error = "Internal error, no source";
        return '';
    }

    if ($exact ) {
        if (file_exists($targetDir . $term . '.html')) {
            $targetEntry = $term . '.html';
        }
    } else {
        $len = strlen($term);
        $dh = opendir($targetDir);
        $bestMatch = '';
        $bestScore = 9999;
        while (($file = readdir($dh)) !== false) {
            $match = levenshtein($term, substr($file,0,-5));
            if ($match < $bestScore) {
                $bestMatch = $file;
                $bestScore = $match;
            }
        }
        if ($bestScore < 7) {
            $targetEntry = $bestMatch;
        }
    }
    if ($targetEntry) {
        $dom = new DOMDocument;
        @$dom->loadHTMLFile($targetDir . $targetEntry);
        $paras = $dom->getElementsByTagName('p');
        $result = $paras->item(0);
        if ($format == 'json') {
            return array ( 'content' => $result->nodeValue, 'URL' => "https://drawshield.net/reference/$source/$term[0]/$targetEntry");
        } else {
            return $dom->saveHTML($result);
        }
    }
    return '';
}

function doDefine($term) {
    global $success, $error, $format, $source, $match;
     switch ( $source ) {
        case 'parker':
        case 'elvin':
            if (($success = lookup($source, $term, $format, $match == 'exact')) == '') {
                $error = "Term not found";
            }
            break;
        case '*':
            $result = lookup('parker', $term, $format, true); // try to find exact match in parker first
            if ($result == '') $result = lookup('elvin', $term, $format, true); // then exact match in elvin
            if ($match != 'exact' && $result == '') $result = lookup('parker', $term, $format, false); // then fuzzy match in parker
            if ($match != 'exact' && $result == '') $result = lookup('elvin', $term, $format, false); // then fuzzy match in parker
            if ($result == '') 
                $error = "Term not found";
            else
                $success = $result;
            break;
        default:
            $error = "Unknown source";
            break;
    }
}

function doGallery($arg) {
    global $success, $format, $error;
    
    if (preg_match('/\d+/', $arg)) { // get a numbered entry, if it exists
       $folder = substr($arg,0,2); 
       if (!file_exists("../gallery/$folder/gallery-$arg.html")) {
           $error = "No gallery entry found";
           return;
       } else {
           $image = "http://${_SERVER['SERVER_NAME']}/gallery/$folder/img/gallery-$arg.png";
           if ($format == 'html') $image = "<a href=\"$image\">Gallery $arg</a>";
           $comments = '';
           if (file_exists('/var/www/etc/credentials.inc')) {
              include('/var/www/etc/credentials.inc');
              $database = mysqli_connect($db_addr,$db_user,$db_password,$db_database);
              if ($database !== false) {
                  $sql = "SELECT content, timestamp FROM comments WHERE refnum = '$arg' AND status = 'approved'";
                  if ($res = mysqli_query($database, $sql)) {
                      if (mysqli_num_rows($res) > 0) {
                          if ($format == 'html') {
                              $comments .=  "<h2>Comments</h2>\n";
                          }
                      }
                      while ($row = mysqli_fetch_array($res)) {
                          if ($format == 'html') {
                              $comments .= '<p class="gallery-comment">' . $row['content'] . "<p>\n";
                              $comments .= '<p class="gallery-timestamp">' . $row['timestamp'] . "<p>\n";
                          } else {
                              $comments .= "${row['timestamp']} - ${row['content']}\n";
                          }
                      }
                  }
                  mysqli_close($database);
               }
           }
           $success = "$image\n$comments";
       }
    } else { // do a search for the terms
        $hits = '';
        $searchTerm = preg_replace('/[^a-zA-Z]/',' ',$arg);
        $output = shell_exec("/home/ubuntu/.cargo/bin/stork --search /var/www/html/gallery/gallery.st \"$searchTerm\" 2>/dev/null");
        $json = json_decode($output);
        foreach ($json->results as $result) {
                $url = $result->entry->url;
                $text = '';
                if (isset($result->excerpts[0]->text)) $text = $result->excerpts[0]->text;
                if (!$text && isset($result->entry->title)) $text = $result->entry->title;
            if ($format == 'html') {
                $hits .= "<p><a href=\"https://drawshield.net/$url\">$url</a> ";
                $hits .= "$text</p>\n";
            } else {
                $ref = str_replace('/gallery/','',$url);
                $hits .= "$ref $text\n";
            }
        }
        if (!$hits) $hits = "Sorry, nothing found\n";
       $success = $hits; 
    }
}

function doChallenge($arg) {
    global $success, $format, $error;
    
    $fileNames = [];
    $targets = [];
    if ($handle = opendir('image-links')) {
        if ($arg == 'all') {
            while (false !== ($entry = readdir($handle))) {
                if ($entry != "." && $entry != "..") {
                    $fileNames[] = 'image-links/' . $entry;
                }
            }
            $targets = file($fileNames[rand(0,count($fileNames) - 1)]);
        } else {
            while (false !== ($entry = readdir($handle))) {
                if ($entry != "." && $entry != "..") {
                    if ($arg == '*' || substr($entry, 0, strlen($arg)) === $arg) {
                        $targets = array_merge($targets, file('image-links/' . $entry));
                    }
                }
            }
        }
        closedir($handle);
    }

    $max = count($targets);
    if ($max < 1) {
        $error = "no targets found";
        return;
    }
    $target = '';
    while (strlen($target) < 5) {
        $target = trim($targets[rand(0,$max -1)]);
    }
    if ($format == 'html') {
        $success = "<a href=\"$target\">$target</a>";
    } else {
        $success = $target;
    }
}

function tidyUp($path) {
	$path = preg_replace('/_catalog\//','',$path);
	$path = preg_replace('/\//',' -> ', $path);
	$path = preg_replace('/[-+]*\.png$/','',$path);
	return $path;
}

function doCatalog($arg) {
	global $success, $format, $error;

	$catalogFile = "catalog.txt";
	if (!file_exists($catalogFile)) {
		$error = "Missing catalog file";
		return;
	}
	$matchAll = strpos($arg,'*');
	$catalogList = file($catalogFile);
	$hitList = [];
	if ($matchAll) {
		$arg = preg_replace('/\*/','', $arg);
		$searchTerm = '/' . preg_replace('/  */','.*',$arg) . '/';
	} else {
		$searchTerm = '/\/' . preg_replace('/  */','.*',$arg) . '[-+]*\.png$/';
	}
	$hits = 0;
	$success = ''; // $arg . ' ' . $searchTerm . "\n";
	foreach($catalogList as $listItem) {
		if (preg_match($searchTerm, $listItem)) {
			$hitList[] = trim($listItem);
			$hits++;
		}
		if ($hits > 9) break;
	}
	// we now have up to 10 hits in the hitlist
	if ($hits == 0) {
		$success .= "Sorry, nothing found in catalog";
    } elseif ($hits == 1) { // return link to image
        $hit = $hitList[0];
		$success = 'https://drawshield.net/' . $hit;
        $hit = str_replace(".png",".txt",$hit);
        if (file_exists("/var/www/html/" . $hit)) {
            $features = file_get_contents("/var/www/html/" . $hit);
            $features = str_replace("<span style=\"color:","(",$features);
            $features = str_replace(";\">", ") ", $features);
            $features = str_replace("</span>","",$features);
            $success .= "\nFeatures: $features";
        }
	} else { // more than one, return list of words
		$success .= "Multiple matches found:\n";
		for ($i = 0; $i < $hits; $i++) {
			$success .= tidyUp($hitList[$i]) . "\n";
		}
	}
}


function doGiotd($arg) {
    global $success, $error, $format, $imgFormat;

    $giotdFile = '/var/www/etc/giotd.txt';

        $number = '9999';
    if (file_exists($giotdFile)) {
        $number = file_get_contents($giotdFile);
    }

    $prefix = substr($number,0,2);

    switch($arg) {
        case 'src':
         $format = 'text';
            $success = "https://drawshield.net/gallery/$prefix/img/gallery-$number.png";
            break;
        case 'img':
            $format = 'img';
            $imgFormat = 'png';
            $success = "/var/www/html/gallery/$prefix/img/gallery-$number.png";
            break;
        case 'href':
            $format = 'text';
            $success = "https://drawshield.net/gallery/gallery-$number.html";
            break;
        case 'html':
            $format = 'html';
            $success = "<figure class=\"giotd\" >\n";
            $success .= "<a href=\"https://drawshield.net/gallery/gallery-$number.html\" >\n";
            $success .= "<img class=\"img-fluid\" alt=\"Gallery Image\" src=\"https://drawshield.net/gallery/$prefix/img/gallery-$number.png\" >\n";
            $success .= "</a>\n";
            $success .= "<figcaption class=\"text-center\">" . date("l, jS F Y") . "<br>(Ref. No. $number)</figcaption>";
            $success .= "</figure>";
            break;
        default:
            $error = "Unknown action for gallery image";
            break;
    }
}
