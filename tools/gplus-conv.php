<?php

$sourceFolder = "../resources/Takeout/Heraldry/Posts/";
//$targetFolder = "/scratch/";
$targetFolder = "../source/_gplus";

$fullFilelist = scandir($sourceFolder, SCANDIR_SORT_ASCENDING);
$filelist = [];
foreach ($fullFilelist as $fileName) {
  if (substr($fileName,-5) == '.html') {
    $filelist[] = $fileName;
  }
}
unset($fullFilelist);


$limit = 10;

$indexHeader = <<< INDEXEND
---
pageTitle: Google+ Heraldry Community Postings
---

INDEXEND;

$monthNames = [
    '01' => "January",
    '02' => "February",
    '03' => "March",
    '04' => "April",
    '05' => "May",
    '06' => "June",
    '07' => "July",
    '08' => "August",
    '09' => "September",
    '10' => "October",
    '11' => "November",
    '12' => "December",
];

$indexFile = fopen($targetFolder . "index.html", "w");
fwrite($indexFile, $indexHeader);
$year = '';
$month = '';

$doc = new DOMDocument();

function output($string) {
  echo $string;
}

function copyAll($node, $postFile) {
  if ($node->nodeType == XML_TEXT_NODE) {
    fwrite($postFile,  $node->nodeValue);
  } elseif ($node->nodeType == XML_ELEMENT_NODE) {
    $nodeName = $node->nodeName;
    $attributes = '';
    if ($node->hasAttributes()) {
      foreach($node->attributes as $attrib) {
        $value = $attrib->nodeValue;
        switch($attrib->nodeName) {
          case 'href':
          case 'alt':
            $attributes .= ' ' . $attrib->nodeName . '="' . $value . '"';
            break;
          case 'src':
            if (substr($value,0,4) != 'http') {
              $value = '../img/' . $value;
            }
            $attributes .= ' class="img-fluid" src="' . $value . '"';
          break;
          default:
            // echo "ignoring attribute: " . $attrib->nodeName . "\n";
          break;
        }
      }
    }
    fwrite($postFile,  "<$nodeName$attributes>");
    foreach($node->childNodes as $subNode) {
      copyAll($subNode, $postFile);
    } 
    if ($nodeName == 'img' || $nodeName == 'br') {
      fwrite($postFile,  "/>");
    } else {
      fwrite($postFile,  "\n</$nodeName>");
    }
  }
}

function treeWalk($node, $postFile) {
  global $monthNames;

  if ($node->nodeName == 'span') {
    $itemProp = $node->getAttribute('itemprop');
    if ($itemProp) {
      switch($itemProp) {
        case 'dateCreated':
          $cDate = date_parse($node->firstChild->nodeValue);
          fwrite($postFile, "<p><strong>Created on:</strong> " . $monthNames[$cDate['month']] . ' ' . $cDate['day'] 
              . ' ' . $cDate['year'] . ' at ' . $cDate['hour'] . ':' .
              $cDate['minute'] . "</p>\n");
          break;
        case 'name':
          fwrite($postFile, "<p><strong>Posted by:</strong> " . $node->firstChild->nodeValue . "</p>\n");
          break;
        case 'text':
        fwrite($postFile,  "<div>");
          foreach($node->childNodes as $subNode) {
            copyAll($subNode, $postFile);
          } 
          fwrite($postFile,  "</div>\n");
          break;
        case 'author':
        case 'audience':
          // No action required
          break;
        default:
          echo "Unknown itemProp: $itemProp\n";
          foreach($node->childNodes as $subNode) {
            treeWalk($subNode, $postFile);
          } 
          break;
      }
    }
  } elseif ($node->nodeName == 'a' && $node->getAttribute('class') == 'media-link') {
    fwrite($postFile,   "<div>\n");
    foreach($node->childNodes as $subNode) {
      copyAll($subNode, $postFile);
    } 
    fwrite($postFile,   "\n</div>");
  } else {
    if ($node->hasChildNodes()) {
      foreach($node->childNodes as $subnode) {
        treeWalk($subnode, $postFile);
      }
    }
  }
}

$postHeader = <<< POSTEND
---
pageTitle: %TITLE%
upLink: index.html
%PREV%
%NEXT%
---

POSTEND;

function writeFile($current, $title, $previous, $next, $doc) {
  global $targetFolder, $postHeader;

  $postFile = fopen($targetFolder . "/posts/$current", "w");
  if (!$postFile) {
    echo "Error opening " . $targetFolder . "/posts/$current";
    return;
  }
  $head = $postHeader;
  $head = preg_replace('/%TITLE%/', $title, $head);
  if ($previous) $previous = "prevLink: " . rawurlencode($previous);;
  if ($next) $next = "nextLink: " . rawurlencode($next);
  $head = preg_replace('/%PREV%/', $previous, $head);
  $head = preg_replace('/%NEXT%/', $next, $head);
  fwrite($postFile,$head);
  fwrite($postFile,"<p><strong>Posted to:</strong> The Google+ Heraldry Community</p>\n");

  foreach($doc->documentElement->childNodes as $node) {
    if ($node->nodeName == 'body') {
      treeWalk($node, $postFile);
    }
  }
  fclose($postFile);
}

for ($i = 0; $i < count($filelist); $i++) {
  $file = $filelist[$i];
  $parts = preg_split('/ - /', substr($file,0,-5));
  $postYear = substr($parts[0],0,4);
  $postMonth = substr($parts[0],4,2);
  if ($postYear != $year || $postMonth != $month) {
      $year = $postYear;
      $month = $postMonth;
      fwrite($indexFile,"<h2>$year - " . $monthNames[$month] . "</h2>\n");
  }
  $date = $postYear . '-' . $postMonth . '-' . substr($parts[0],6,2);
  if ($parts[1] == 'Post') {
      $title = "(Untitled Post)";
  } else {
    $end = 30;
    while ($end < strlen($parts[1]) && !ctype_space($parts[1][$end])) $end++;
    $title = substr($parts[1],0,$end) . '....';
  }
  $title = str_replace('_s',"'s",$title);
  $url = "posts/" . rawurlencode($file);
  fwrite($indexFile, "<p><a href=\"$url\">$date : $title</a></p>\n");
  $doc->loadHTMLFile($sourceFolder . $file);
  $prev = ($i > 1) ? $filelist[$i - 1] : null;
  $next = ($i < count($filelist) - 1) ? $filelist[$i + 1] : null;
  writeFile($file, $title, $prev, $next, $doc);
  if ( $limit-- < 1) break;
}

fclose($indexFile);

