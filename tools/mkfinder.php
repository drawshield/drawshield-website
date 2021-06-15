<?php

// $config = yaml_parse_file("../_config.yml");
$sourceDir = "../source/_catalog/";
$targetDir = "../source/_includes";

exec ("tree -fi -P '*.png' --noreport $sourceDir", $output);

$items = array();


$start = <<< START
<select id="finder-dropdown">
<option disabled="disabled" selected="selected" value="">Catalog search</option>
START;

$end = <<< END
</select>
<button type="button" class="btn-sm" onclick="showImg();">Search</button>
<script>
function showImg() {
    var imageFile = jQuery("#finder-dropdown option:selected").val();
    var imageName = imageFile.substring(0,imageFile.length - 4);
    imageName = imageName.substring(imageName.lastIndexOf('/') + 1);
    imageName = imageName.replaceAll('-',' ');
    imageName = imageName.replaceAll('+','');
    $('#finder-title').text(imageName);
    $('#finder-content').html("<img src=\"" + imageFile + "\" alt=\"imageFile\" />");
    $('#finder-modal').modal('show');
}
function insertFinder() {
    blazonEditor.replaceRange($('#finder-title').text(), blazonEditor.getCursor());
    $('#finder-modal').modal('hide');
    }
</script>
END;

$select = $start;
$catalog = '';
$sorted = [];
foreach ($output as $line) {
    if (substr($line,-4,4) != '.png') continue;
    $line = str_replace('../source/_', '/',$line);
    $last = strrpos($line,'/');
    $item = substr($line,$last + 1);
    $item = substr($item,0,-4);
    $item = str_replace('-',' ', $item);
    $item = str_replace('+','', $item);
    $sorted[$item] = $line;
}
ksort($sorted);

foreach ($sorted as $item => $filename) {
    $select .= "<option value=\"$filename\">$item</option>\n";
}

$select .= $end;

file_put_contents($targetDir . '/finder.html', $select);



