<?php
$response = "// No content provided";
$filename = "file";
if ((isset($_POST['content'])) && $_POST['content'] != '') {
	$response = $_POST['content'];
}
if ((isset($_POST['filename'])) && $_POST['filename'] != '') {
	$filename = $_POST['filename'];
}
header("Content-type: application/force-download");
header('Content-Disposition: inline; filename="' . $filename . '.txt"');
header("Content-Transfer-Encoding: text");
header('Content-Disposition: attachment; filename="' . $filename . '.txt"');
header('Content-Type: text/plain; charset=utf-8');
echo $response;
