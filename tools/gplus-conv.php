<?php

$sourceFolder = "../resources/Takeout/Heraldry/Posts/";
//$targetFolder = "/scratch/";
$targetFolder = "../source/_gplus/";

$fullFilelist = scandir($sourceFolder, SCANDIR_SORT_ASCENDING);
$filelist = [];
foreach ($fullFilelist as $fileName) {
  if (substr($fileName,-5) == '.html') {
    $filelist[] = $fileName;
  }
}
unset($fullFilelist);

$start = 99;
$limit = 300;

$indexHeader = <<< INDEXEND
---
pageTitle: Google+ Heraldry Community Postings
---
<img src="187le7t8oaqfm.jpg" alt="community logo" class="float-right image-fluid">

<p>The Google+ Heraldy Community was founded by me, in December 2012 and ran, with
the help of other moderators until the closure of Google+ in 2019. During its lifetime
it had 313 members and 717 postings. The introductory commentary read:</p>

<pre>
All Things Heraldic

Found some heraldry?
   Post a photo!
Have a question? 
   Ask it here!
Found a good resource? 
   Add a review!

The place for polite, helpful heraldic chat.
</pre>

<p>Just prior to the closure I used Google "Takeout" to extract the community postings. Sadly,
this did not seem to include the category in which the post was placed or any comments (possibly
my fault for not setting the takeout parameters correctly). However, all the original main
postings and any media associated with them are preserved, organised by date below.</p>

INDEXEND;

$monthNames = [
    '(error)',
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

$year = '';
$month = '';

$doc = new DOMDocument();

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
    fwrite($postFile,  "<$nodeName$attributes");
    if ($nodeName == 'img' || $nodeName == 'br') {
      fwrite($postFile,  "/>");
    } else {
      fwrite($postFile,  ">");
      foreach($node->childNodes as $subNode) {
        copyAll($subNode, $postFile);
      } 
      fwrite($postFile,  "\n</$nodeName>");
    }
  }
}

function videoLink($node, $postFile) {
  foreach($node->childNodes as $subNode) {
    switch ($subNode->nodeName) {
      case 'a':
        $url = $subNode->getAttribute('href');
        fwrite($postFile, "<p><a href=\"$url\">Link to video.</a></p>");
        break;
      case 'div':
        /// ignore
        break;
      default:
        copyAll($postFile,$subNode);
        break;
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
        case 'video':
          videoLink($node, $postFile);
          break;
        case 'author':
          foreach($node->childNodes as $subNode) {
            treeWalk($subNode, $postFile);
          } 
          break;
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
  } elseif ($node->nodeName == 'a' && $node->getAttribute('class') == 'link-embed') {
    $target = $node->getAttribute('href');
    fwrite($postFile,   "<div>\n");
    fwrite($postFile, "<p><a href=\"$target\">$target</a></p>\n");
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
upLink: ../index.html
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

$yearLinks = <<< ENDYEARLINKS
<p>
<a href="#2012">&gt;&gt;&gt;2012&lt;&lt;&lt;</a>&nbsp;&nbsp;
<a href="#2013">&gt;&gt;&gt;2013&lt;&lt;&lt;</a>&nbsp;&nbsp;
<a href="#2014">&gt;&gt;&gt;2014&lt;&lt;&lt;</a>&nbsp;&nbsp;
<a href="#2015">&gt;&gt;&gt;2015&lt;&lt;&lt;</a>&nbsp;&nbsp;
<a href="#2016">&gt;&gt;&gt;2016&lt;&lt;&lt;</a>&nbsp;&nbsp;
<a href="#2017">&gt;&gt;&gt;2017&lt;&lt;&lt;</a>&nbsp;&nbsp;
<a href="#2018">&gt;&gt;&gt;2018&lt;&lt;&lt;</a>&nbsp;&nbsp;
<a href="#2019">&gt;&gt;&gt;2019&lt;&lt;&lt;</a>&nbsp;&nbsp;
</p>
ENDYEARLINKS;

if ($start == 0) {
  $indexFile = fopen($targetFolder . "index.html", "w");
  fwrite($indexFile, $indexHeader);
  fwrite($indexFile, $yearLinks);
}
$prevYear = '';
for ($i = 0; $i < count($filelist); $i++) {
  $file = $filelist[$i];
  $parts = preg_split('/ - /', substr($file,0,-5));
  $postYear = substr($parts[0],0,4);
  $postMonth = substr($parts[0],4,2);
  if ($postYear != $year || $postMonth != $month) {
      $year = $postYear;
      $month = $postMonth;
      if ($year != $prevYear) {
        if ($start == 0) fwrite($indexFile,"<a id=\"$year\"/>\n");
        $prevYear = $year;
      }
      if ($start == 0) fwrite($indexFile,"<h2>$year - " . $monthNames[ltrim($month,'0')] . "</h2>\n");
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
  if ($start == 0)
    fwrite($indexFile, "<p><a href=\"$url\">$date : $title</a></p>\n");
  if ($i >= $start && $i < $start + $limit) {
    $doc->loadHTMLFile($sourceFolder . $file);
    $prev = ($i > 1) ? $filelist[$i - 1] : null;
    $next = ($i < count($filelist) - 1) ? $filelist[$i + 1] : null;
    writeFile($file, $title, $prev, $next, $doc);
  }
}

if ($start == 0) fclose($indexFile);

