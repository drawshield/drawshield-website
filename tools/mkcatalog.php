<?php

// $config = yaml_parse_file("../_config.yml");
$sourceDir = "../source/_catalog/";
$targetDir = "../source/_includes";
$apiDir = "../source/api-bin";

exec ("tree -fi -P '*.png' --noreport $sourceDir", $output);

$items = array();


$start = <<< START
<div class="card">
<p class="card-text">Item finder:&nbsp;
<select id="combo-dropdown">
<option disabled="disabled" selected="selected" value="">Enter text</option>
START;

$end = <<< END
</select>&nbsp;
<button type="button" class="btn-danger btn-sm" onclick="goto();">Goto</button>
</div>
<script>
jQuery('#combo-dropdown').combobox({
bsVersion:'4'
})
function goto() {
    window.location=jQuery("#combo-dropdown option:selected").val();
}
</script>
END;

$select = $start;
$catalog = '';

foreach ($output as $line) {
    if (substr($line,-4,4) != '.png') continue;
    $line = str_replace('../source/_', '/',$line);
    $catalog .= $line . "\n";
    $last = strrpos($line,'/');
    $dir = substr($line,0,$last);
    $item = substr($line,$last + 1);
    $item = substr($item,0,-4);
    $item = str_replace('-',' ', $item);
    $item = str_replace('+','', $item);
    $select .= "<option value=\"$dir\">$item</option>\n";
}

$select .= $end;

file_put_contents($targetDir . '/searchcatalog.html', $select);
file_put_contents($apiDir . '/catalog.txt', $catalog);



