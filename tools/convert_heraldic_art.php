<?php
/**
 * Drawshield PHP Source File
 *
 * Description...
 *
 * @author Karl R. Wilcox <karl@karlwilcox.com>
 * @copyright Karl R. Wilcox 2014
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * Date: 07/08/14
 * Time: 21:01
 */

function getNumbers ( $argString ) {
  $argString = preg_replace('/-/',' -', $argString);
  $argArray = array();
  $length = strlen($argString);
  $numStr = '';
  $expStr = '';
  $component = 'man';

  for ( $count = 0; $count < $length; $count++ ) {
    $char = $argString{$count};
    if ( $char == 'e' ) {
      $component = 'exp';
     // echo "Found exponent - $argString\n";
    } elseif ( ctype_digit($char) or $char == '.' or $char == '-' ) {
      if ( $component == 'man' )
        $numStr .= $char;
      else
        $expStr .= $char;
    } else { // Got a complete number
      if ( strlen($numStr) ) {
        $number = (float) $numStr;
        if ( $component == 'exp' ) {
          $number = 0.0;
        }
        $argArray[] = $number;
        $numStr = '';
        $expStr = '';
        $component = 'man';
      }
    }
  } // Process last number
  if ( strlen($numStr) ) {
    $number = (float) $numStr;
    if ( $component == 'exp' ) {
      $number = 0.0;
    }
    $argArray[] = $number;
  }
  return $argArray;
}


function translatePath( $chunks, $xTrans, $yTrans ) {
  $newPath = '';
  $firstMove = true;
  $numbers = array();
  for ( $i = 0; $i < count($chunks); $i++ ) {
    $command = $chunks[$i];
    if ($command == ' ' or $command == '') continue;
    if ( isset($chunks[$i+1]) )
      $numbers = getNumbers( $chunks[$i+1] );
    switch ( $command ) {
      case 'H':
        $newPath .= sprintf('H%.4g', $numbers[0] + $xTrans);
        break;
      case 'V':
        $newPath .= sprintf('V%.4g', $numbers[0] + $yTrans);
        break;
      case 'M':
      case 'L':
      case 'C':
        $newPath .= $command;
        for ( $j = 0; $j < count($numbers); $j += 2 ) {
          $newPath .= sprintf('%.4g,', ($numbers[$j] + $xTrans));
          $newPath .= sprintf('%.4g ', ($numbers[$j+1] + $yTrans));
        }
        if ( $command == 'M' ) $firstMove = false;
        break;
      case 'm':
        $newPath .= 'm';
        if ( $firstMove ) {
          $newPath .= sprintf('%.4g,', ($numbers[0] + $xTrans));
          $newPath .= sprintf('%.4g ', ($numbers[1] + $yTrans));
          for ( $j = 2; $j < count($numbers); $j += 2 ) {
            $newPath .= sprintf('%.4g,', ($numbers[$j]));
            $newPath .= sprintf('%.4g ', ($numbers[$j+1]));
          }
          $firstMove = false;
        } else {
          for ( $j = 0; $j < count($numbers); $j += 2 ) {
            $newPath .= sprintf('%.4g,', ($numbers[$j]));
            $newPath .= sprintf('%.4g ', ($numbers[$j+1]));
          }
        }
        break;
      case 'a':
        for ( $j = 0; $j < count($numbers); $j += 7 ) {
          list($rx, $ry, $rot, $arc, $sweep, $x, $y) = array_slice($numbers,$j,7);
          $newPath .= sprintf('a%.4g,%.4g %.4g,%d,%d %.4g,%.4g', $rx, $ry, $rot, $arc, $sweep, $x, $y);
        }
        break;
      case 'A':
        for ( $j = 0; $j < count($numbers); $j += 7 ) {
          list($rx, $ry, $rot, $arc, $sweep, $x, $y) = array_slice($numbers,$j,7);
          $newPath .= sprintf('A%.4g,%.4g %.4g,%d,%d %.4g,%.4g', $rx, $ry, $rot, $arc, $sweep, $x + $xTrans, $y + $yTrans);
        }
        break;
      case 'h':
      case 'v': // Pass all unchanged
        $newPath .= $command . sprintf('%.4g', $numbers[0]);
        break;
      case 'l':
      case 'q':
      case 'c':
        $newPath .= $command;
        $odd = true;
        foreach ( $numbers as $number ) {
          $newPath .= (sprintf('%.4g', $number)) . ($odd ? ',':' ');
          $odd = !$odd;
        }
        break;
      case 'Z':
      case 'z':
        $newPath .= $command;
        break;
    }
    $newPath .= ' ';
  }
  return $newPath;
}

function matMul ( $a, $b, $c, $d, $e, $f, $x, $y ) {
  return array ( (($a * $x) + ($c * $y) + $e), (($b * $x) + ($d * $y) + $f) );
}

function matrixPath( $chunks, $a, $b, $c, $d, $e, $f, $element = 'not given' ) {
  $newPath = '';
  $firstMove = true;
  $numbers = array();
  for ( $i = 0; $i < count($chunks); $i++ ) {
    $command = $chunks[$i];
    if ($command == ' ' or $command == '') continue;
    if ( isset($chunks[$i+1]) ) {
      $numbers = getNumbers( $chunks[$i+1] );
      if ($command != 'A' and $command != 'a' and count($numbers) % 2 == 1) {echo "Odd count for $command in $element -\n"; var_dump($chunks);  }
    }
    switch ( $command ) {
      case 'H':
        $coords =  matMul($a, $b, $c, $d, $e, $f, $numbers[0], 0);
        $newPath .= sprintf('l%.4g,%.4g ', $coords[0], $coords[1]);
        break;
      case 'V':
        $coords =  matMul($a, $b, $c, $d, $e, $f, 0, $numbers[0]);
        $newPath .= sprintf('l%.4g,%.4g ', $coords[0], $coords[1]);
        break;
      case 'M':
      case 'L':
      case 'C':
        $newPath .= $command;
        for ( $j = 0; $j < count($numbers); $j += 2 ) {
          $coords =  matMul($a, $b, $c, $d, $e, $f, $numbers[$j], $numbers[$j+1]);
          $newPath .= sprintf('%.4g,', $coords[0]);
          $newPath .= sprintf('%.4g ', $coords[1]);
        }
        if ( $command == 'M' ) $firstMove = false;
        break;
      case 'm':
        $newPath .= 'm';
        if ( $firstMove ) {
          $coords = matMul($a, $b, $c, $d, $e, $f, $numbers[0], $numbers[1]);
          $newPath .= sprintf('%.4g, %.4g ', $coords[0], $coords[1]);
          for ( $j = 2; $j < count($numbers); $j += 2 ) {
            $coords = matMul($a, $b, $c, $d, 0, 0, $numbers[$j], $numbers[$j+1]);
            $newPath .= sprintf('%.4g,', ($coords[0]));
            $newPath .= sprintf('%.4g ', ($coords[1]));
          }
          $firstMove = false;
        } else {
          for ( $j = 0; $j < count($numbers); $j += 2 ) {
            $coords = matMul($a, $b, $c, $d, 0, 0, $numbers[$j], $numbers[$j+1]);
            $newPath .= sprintf('%.4g,', ($coords[0]));
            $newPath .= sprintf('%.4g ', ($coords[1]));
          }
        }
        break;
      case 'a':
        list($rx,$ry,$rot,$arc,$sweep,$x,$y) = $numbers; /* TODO extract rotation & apply */
        $newPath .= sprintf('a%.4g,%.4g %.4g,%d,%d %.4g,%.4g', $rx,$ry, $rot,$arc,$sweep, $x,$y);
        echo "no matrix apply for arc in $element\n";
        break;
      case 'h':
        $coords =  matMul($a, $b, $c, $d, 0, 0, $numbers[0], 0);
        $newPath .= sprintf('l%.4g,%.4g ', $coords[0], $coords[1]);
        break;
      case 'v':
        $coords =  matMul($a, $b, $c, $d, 0, 0, 0, $numbers[0]);
        $newPath .= sprintf('l%.4g,%.4g ', $coords[0], $coords[1]);
        break;
      case 'l':
      case 'q':
      case 'c':
        $newPath .= $command;
        for ( $j = 0; $j < count($numbers); $j += 2 ) {
          $coords = matMul($a, $b, $c, $d, 0, 0, $numbers[$j], $numbers[$j+1]);
          $newPath .= sprintf('%.4g,', ($coords[0]));
          $newPath .= sprintf('%.4g ', ($coords[1]));
        }
        break;
      case 'Z':
      case 'z':
        $newPath .= $command;
        break;
    }
    $newPath .= ' ';
  }
  return $newPath;
}

function getTransform($attrib) {
  $count = 0;
  $attrib = preg_replace('/-?[0-9][\.0-9]*e-?[0-9][0-9]*/','0',$attrib,-1,$count);
  if ( $count ) echo "Warning $count exponent(s) replaced in transform\n";
  if ( preg_match('/translate *\(([\d\.-]+),([\d\.-]+)\)/', $attrib, $match ) == 1 )
    return ( array ( 'translate', $match[1], $match[2] ));
  elseif ( preg_match('/matrix *\(([\d\.-]+),([\d\.-]+),([\d\.-]+),([\d\.-]+),([\d\.-]+),([\d\.-]+)\)/', $attrib, $match ) == 1 )
    return ( array('matrix', $match[1], $match[2], $match[3], $match[4], $match[5], $match[6] ));
  else
    echo "unknown transform - $attrib\n";
  return null;
}

function transformPath($path,$transform,$element) {
  if ($transform == null ) return $path;
  $chunks = preg_split('/([a-df-z])/i', $path, null, PREG_SPLIT_DELIM_CAPTURE );
  if ( $transform[0] == 'translate' )
    return translatePath($chunks, $transform[1], $transform[2]);
  elseif ( $transform[0] == 'matrix')
    return matrixPath($chunks, $transform[1], $transform[2], $transform[3], $transform[4], $transform[5], $transform[6], $element);
  else {
    echo "unknown transform - $transform[0]\n";
    return $path;
  }
}

function normalise ( SimpleXMLElement $element, $transform ) {
  $localTrans = null;
  $name = preg_replace('/svg:/','',$element->getName());
  switch ($name) {
    case 'defs':
    case 'svg':
      foreach ( $element->children() as $child)
        normalise($child, $transform);
      break;
    case 'g':
      if (isset($element['transform'])) {
        $localTrans = getTransform($element['transform']);
        unset($element['transform']);
        foreach($element->children() as $child)
          normalise($child,$localTrans);
      }
      foreach($element->children() as $child)
        normalise($child,$transform);
      break;
      case 'path':
        $count = 0;
        $element['d'] = preg_replace('/-?[0-9][\.0-9]*e-?[0-9][0-9]*/','0',$element['d'],-1,$count);
        if ($count) echo "Warning $count exponent(s) replaced in path ${element['id']}\n";
        // strip out inkscape and sodipodi attributes that override path data
        if (isset($element['transform'])) {
          //echo "applying ${element['transform']} to ${element['id']}\n ";
          $localTrans = getTransform($element['transform']);
          unset($element['transform']);
          $element['d'] = transformPath($element['d'], $localTrans, $element['id']);
        }
        if ($transform != null) {
          $element['d'] = transformPath($element['d'], $transform, $element['id']);
        }
      break;
    case 'rect':
    case 'use':
    case 'line':
    case 'linearGradient':
    case 'radialGradient':
    case 'polygon':
      echo "Warning: " . $element->getName() . " with id=" . $element['id'] . "\n";
    default:
      break;
  }
}

$count = $argc;
if ($count > 2) {
  $target = "../charges/" . $argv[$count -1] . "/inkscape/";
  $limit = $count - 1;
} else{
  $target = 'output/';
  $limit = 2;
}

for ( $i = 1; $i < $limit; $i++ ) {
  $filename = $argv[$i];
  if ( substr($filename,-4,4) != '.svg') $filename .= ".svg";
  echo "Processing $filename\n";
  $prefix = '';
  if (substr($filename,0,2) != 'C:') $prefix = 'working/';
  if ( ($svg = simplexml_load_file($prefix . $filename)) == null ) {
    echo "XML error reading $filename\n";
    continue;
  }
  normalise($svg,null);

  echo "writing " . $target . basename($filename) . "\n";
  $svg->asXML($target . strtolower(basename($filename)));
}

function modify(SimpleXMLElement $element) {

    $name = preg_replace('/svg:/','',$element->getName());
    switch ($name) {
        case 'defs':
        case 'svg':
            foreach ( $element->children() as $child)
                normalise($child, $transform);
            break;
        case 'g':
            if (isset($element['transform'])) {
                $localTrans = getTransform($element['transform']);
                unset($element['transform']);
                foreach($element->children() as $child)
                    normalise($child,$localTrans);
            }
            foreach($element->children() as $child)
                normalise($child,$transform);
            break;
        case 'path':
            $count = 0;
            $element['d'] = preg_replace('/-?[0-9][\.0-9]*e-?[0-9][0-9]*/','0',$element['d'],-1,$count);
            if ($count) echo "Warning $count exponent(s) replaced in path ${element['id']}\n";
            // strip out inkscape and sodipodi attributes that override path data
            if (isset($element['transform'])) {
                //echo "applying ${element['transform']} to ${element['id']}\n ";
                $localTrans = getTransform($element['transform']);
                unset($element['transform']);
                $element['d'] = transformPath($element['d'], $localTrans, $element['id']);
            }
            if ($transform != null) {
                $element['d'] = transformPath($element['d'], $transform, $element['id']);
            }
            break;
        case 'rect':
        case 'use':
        case 'line':
        case 'linearGradient':
        case 'radialGradient':
        case 'polygon':
            echo "Warning: " . $element->getName() . " with id=" . $element['id'] . "\n";
        default:
            foreach ( $element->children() as $child)
                modify($child

                );
            break;
    }
}

function convert($filename, $folderName) {
    global $targetDir;

    if ( substr($filename,-4,4) != '.svg') return;
    if ( ($svg = simplexml_load_file($folderName . $filename)) == null ) {
        echo "XML error reading $filename\n";
        return;
    }
    $outputName = strtolower($filename);
    $outputName = str_replace(array("'s", '-', ' '), array('','','-'), $outputName);

    $modify($svg);


    $svg->asXML($targetDir . $outputName);

}

$sourceDir = "../../image_svgs";
$limit = 10;
$count = 0;

$folders = scandir($sourceDir);
foreach ($folders as $folder) {
    $subFolders = scandir($sourceDir . '/' . $folder);
    foreach ($subFolders as $subFolder) {
        $SVGFiles = scandir($sourceDir . '/' . $folder . '/' .$subFolder);
        foreach ($SVGFiles as  $SVGFile) {
            convert($SVGFile, $sourceDir . '/' . $folder . '/' .$subFolder . '/' );
            if ($count++ > $limit) exit();
        }
    }
}
