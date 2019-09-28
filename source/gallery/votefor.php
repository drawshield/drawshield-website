<?php

session_start();

function getUserIpAddr(){
    $ip = "(not determined)";
    if(!empty($_SERVER['HTTP_CLIENT_IP'])){
        //ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
        //ip pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }else{
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}
$response = "No reference number";
if (array_key_exists("refnum",$_GET)) {
    $refnum = $_GET['refnum'];
    include('/var/www/etc/credentials.inc');
    $database = mysqli_connect($db_addr,$db_user,$db_password,$db_database);
    $sourceIP = getUserIpAddr();
    if (array_key_exists('votable', $_SESSION) && in_array($refnum, $_SESSION['votable'])) {
        if (array_key_exists('voted', $_SESSION) && in_array($refnum, $_SESSION['voted'])) {
            $sql = "INSERT INTO voting SET refnum = '$refnum', source_ip = '$sourceIP', status = 'rejected', notes = 'Already voted';";
            mysqli_query($database, $sql);
            $response = "Already voted";
        } else {
            $_SESSION['voted'][] = $refnum;
            $sql = "INSERT INTO voting SET refnum = '$refnum', source_ip = '$sourceIP';";
            if ($res = mysqli_query($database, $sql)) {
                $sql = "SELECT count FROM votes WHERE refnum = '$refnum'";
                if ($res = mysqli_query($database, $sql)) {
                    if (mysqli_num_rows($res) > 0) {
                        $sql = "UPDATE votes SET count = count + 1 WHERE refnum = '$refnum'";
                        if ($res = mysqli_query($database, $sql)) {
                            $response = "updated";
                        } else {
                            $response = "error incrementing vote - " . mysqli_error($database); 
                        }
                    } else {
                        $sql = "INSERT INTO votes SET refnum = '$refnum', count = 1;";
                        if ($res = mysqli_query($database, $sql)) {
                            $response = "added";
                        } else {
                            $response = "error inserting vote - " . mysqli_error($database); 
                        }
                    }
                } else {
                    $response = "error checking existing vote - " . mysqli_error($database);
                }
            } else {
                $response = "error updating voting - " . mysqli_error($database); 
            }
        }
    } else {
        $notes = 'Not from a voting page' . isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '(no referrer)';
        $sql = "INSERT INTO voting SET refnum = '$refnum', source_ip = '$sourceIP', status = 'rejected', notes = '$notes';";
        mysqli_query($database, $sql);
        $response = "Not from a voting page";
    }
    $database->close();
}

header('Content-Type: text/plain');
echo $response;
