<?php

// defaults
$errorMessage = false;
$response = '<div id="comments">' . "\n";

// Argument processing
$refnum = $_GET['refnum'] ?? false;
$tableid = $_GET['id'] ?? false;
$action = $_GET['action'] ?? 'get';
$secret = $_GET['secret'] ?? false;

if ($action == 'get') {
    if ( !$refnum ) $errorMessage= "No reference number";
} elseif ( !$tableid ) {
    $errorMessage = 'No table id';
} elseif ( $secret != 'jsk5k*VV' ) {
    $errorMessage = 'Not permitted';
}

if (!$errorMessage) {
    include('/home/karlwilc/etc/credentials.inc');
    $database = mysqli_connect($db_addr,$db_user,$db_password,$db_database);

    if ($database === false) {
        $errorMessage = "Could not open database";
    } else {
        switch ($action) {
            case 'get':
                $sql = "SELECT content, timestamp FROM comments WHERE refnum = '$refnum' AND status = 'approved'";
                if ($res = mysqli_query($database, $sql)) {
                    if (mysqli_num_rows($res) > 0) {
                        $response .=  "<h2>Comments</h2>\n";
                    }
                    while ($row = mysqli_fetch_array($res)) {
                        $response .= '<p class="gallery-comment">' . $row['content'] . "<p>\n";
                        $response .= '<p class="gallery-timestamp">' . $row['timestamp'] . "<p>\n";
                    }
                } else {
                    $errorMessage = "SQL error " . mysqli_error($database);
                }
                break;
            case 'approve':
                $sql = "UPDATE comments SET status = 'approved' WHERE id = '$tableid'";
                $res = mysqli_query($database, $sql);
                $response .= '<p>' . mysqli_info($database) . "</p>\n";
                break;
            case 'reject':
                $sql = "UPDATE comments SET status = 'rejected' WHERE id = '$tableid'";
                $res = mysqli_query($database, $sql);
                $response .= '<p>' . mysqli_info($database) . "</p>\n";
                break;
            case 'withdraw':
                $sql = "UPDATE comments SET status = 'withdrawn' WHERE id = '$tableid'";
                $res = mysqli_query($database, $sql);
                $response .= '<p>' . mysqli_info($database) . "</p>\n";
                break;
            case 'refer':
                $sql = "UPDATE comments SET status = 'referred' WHERE id = '$tableid'";
                $res = mysqli_query($database, $sql);
                $response .= '<p>' . mysqli_info($database) . "</p>\n";
                break;
            default: $errorMessage = 'unknown operation';
                break;
        }
        $response .= "</div>\n"; // not an error if no rows returned
    }
}

header('Content-Type: text/html');
if ($errorMessage)
    echo "<p>$errorMessage</p>\n";
else
    echo $response;
