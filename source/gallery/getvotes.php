<?php
if (!file_exists('/var/www/etc/credentials.inc')) exit;
session_start();

$response = "0";
if (array_key_exists("refnum",$_GET)) {
    $refnum = $_GET['refnum'];
    if (!array_key_exists('votable', $_SESSION)) {
        $_SESSION['votable'] = [];
        $_SESSION['voted'] = [];
    }
    if (!in_array($refnum, $_SESSION['votable']))
        $_SESSION['votable'][] = $refnum;
    include('/var/www/etc/credentials.inc');
    $database = mysqli_connect($db_addr,$db_user,$db_password,$db_database);
    $sql = "SELECT count FROM votes WHERE refnum = '$refnum'";
    if ($res = mysqli_query($database, $sql)) {
        if (mysqli_num_rows($res) > 0) {
            $row = mysqli_fetch_row($res);
            $response = $row[0];
        }
        $res->close();
    }
    $database->close();
}

header('Content-Type: text/plain');
echo $response;
