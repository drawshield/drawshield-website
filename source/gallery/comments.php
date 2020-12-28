
<?php
if (!file_exists('/var/www/etc/credentials.inc')) exit;
// defaults
$errorMessage = false;
$response = '<div id="comments">' . "\n";

// Argument processing
$refnum = $_GET['refnum'] ?? false;
$tableid = $_GET['id'] ?? false;
$action = $_GET['action'] ?? 'get';
$secret = $_GET['secret'] ?? false;
$discord = $_GET['discord'] ?? false;

if ($action == 'get') {
    if ( !$refnum ) $errorMessage= "No reference number";
} elseif ( !$tableid ) {
    $errorMessage = 'No table id';
} elseif ( $secret != 'jsk5k*VV' ) {
    $errorMessage = 'Not permitted';
}

if (!$errorMessage) {
    include('/var/www/etc/credentials.inc');
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
                $ch = curl_init("https://discord.com/api/webhooks/775807616223281160/7Wuw2BvCAXJIyALaXCstweR0psdtWnQs__GA0tU0U50aRzNSXtGDgIcFyMCD5oxAhZT1");
                if (isset($ch)) {
                    $folder = substr($refnum,0,2);
		    if ($discord) {
			    $msg = "payload_json=" . urlencode(json_encode(array("username" => "GalleryBot", "content" => "https://drawshield.net/gallery/$folder/img/gallery-$refnum.png" )));
			    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
			    curl_setopt($ch, CURLOPT_POSTFIELDS, $msg);
			    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			    $result = curl_exec($ch);
		    }
                    $comments = "";
                    $sql = "SELECT content, timestamp FROM comments WHERE refnum = '$refnum' AND status = 'approved'";
                    if ($res = mysqli_query($database, $sql)) {
                        if (mysqli_num_rows($res) > 0) {
                            $comments .=  "New Comment on Gallery Entry $refnum\n";
                        }
                        while ($row = mysqli_fetch_array($res)) {
                            $comments .=  $row['content'] . "\n";
                            $comments .=  $row['timestamp'] . "\n";
                        }
                    } else {
                        $errorMessage = "SQL error " . mysqli_error($database);
                        break;
                    }
                    if ($discord) {
                        $msg = "payload_json=" . urlencode(json_encode(array("username" => "GalleryBot", "content" => $comments )));
                        curl_setopt($ch, CURLOPT_POSTFIELDS, $msg);
                        $result = curl_exec($ch);
                        curl_close($ch);
                        $response .= "<p>And copied to Discord</p>";
                    }
                }
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
