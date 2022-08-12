<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */
// error_log("reply-form called");
$myserver = "https://drawshield.net/";
if (substr($_SERVER['HTTP_REFERER'],0,strlen($myserver)) != $myserver)  {
        header("Location: https://drawshield.net");
        exit;
}

// an email address that will be in the From field of the email.
$from = 'Contact form <contact@drawshield.net>';

// an email address that will receive the email with the output of the form
$sendTo = 'Karl Wilcox<contact@drawshield.net>';

// subject of the email
$subject = 'New message from contact form';

$galleryTemplate = <<< EOD
---
pageTitle: %title%
layout: gallery-entry
entryNum: NNNN
---
<!-- gallery/[....].html starts -->
<pre>
    %plainBlazon%
</pre>
<p>To reproduce this image exactly you need to set your preferences to:</p>
<dl class="gallery-prefs">
%prefs%
</dl>
%tags%
<h3>Notes</h3>
%addData%
<img src="img/gallery-{{ page.entryNum }}.png" alt="{{ pageTitle }}" class="img-fluid" />
<p>If you would like to modify this blazon and see the effects <a href="%createURL%"><button class="btn btn-primary">Show on Create Page</button></a>.</p>
<!--
%wgetURL%
-->
<!-- gallery/[....].html ends -->
EOD;

$commentTemplate = <<< EOD2
Approve This Comment: http://drawshield.net/gallery/comments.php?id=%tableid%&action=approve&secret=jsk5k*VV&refnum=%refnum%
Approve This Comment and copy to Discord: http://drawshield.net/gallery/comments.php?id=%tableid%&action=approve&secret=jsk5k*VV&refnum=%refnum%&discord=1
Reject This Comment: http://drawshield.net/gallery/comments.php?id=%tableid%&action=reject&secret=jsk5k*VV&refnum=%refnum%
Refer This Comment: http://drawshield.net/gallery/comments.php?id=%tableid%&action=refer&secret=jsk5k*VV&refnum=%refnum%
EOD2;

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('reference' => 'Reference', 'email' => 'Email', 'message' => 'Message', 'error-blazon' => 'Blazon', 'suggestion' => 'Suggested Blazon', 'additional' => 'Additional Information', 'options' => 'Drawing Options', 'title' => 'Suggested Title', 'refnum' => 'Gallery Reference Number', 'tags' => 'Tags');

// message that will be displayed when everything is OK :)
$okMessage = 'Thanks for your message. Suggestions are discussed on the DrawShield Discord server, please join us there if you can!';

// If something goes wrong, we will display this message.
$errorMessage = false;

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);


function lineBreak($string, $breakAfter = 50) {
    $return = '';
    $count = 0;
    $comment = 'no';
    for ($i = 0; $i < strlen($string); $i++) {
        switch ($string[$i]) {
            case "\n":
                    $count = 0;
                    $comment = 'no';
                    break;
            case '/':
                    if ($comment == 'no') {
                            $comment = 'maybe';
                    } elseif ($comment == 'maybe') {
                            $comment = 'yes';
                    }
                    break;
            case '*':
                    if ($comment == 'maybe') {
                            $comment = 'yes';
                    }
                    break;
            case ' ':
                if ($count >= $breakAfter) {
                    $return .= PHP_EOL;
                    $count = 0;
                    if ($comment == 'yes') {
                            $return .= '// ';
                    }
                }
                break;
            default:
                if ($comment == 'maybe') {
                        $comment = 'no';
                }
                break;
        }
        $return .= $string[$i];
        $count++;
    }
    return $return;
}


try
{

    if(count($_POST) == 0) throw new \Exception('Form is empty');

    $emailText = "Contact Form: ";
    $gallery = false;
    $comment = false;
    $refnum = '';
    $bugReport = false;
    $content = '(No content)';

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
        if ( $key == 'error-blazon') {
                $bugReport = true;
            $okMessage = "Error report submitted. Please check for a response on the DrawShield Discord Server in a day or two.";
        }
        if ( $key == 'message' ) {
            $content = $value;
        }
         if ( $key == 'suggestion') {
            $okMessage = "Thanks for your suggestion, if accepted your submission will appear under Create->View Gallery in a day or two.";
            $gallery = true;
        }
        if ( $key == 'reference') {
            if (preg_match('/^(gallery|blog)-[a-zA-Z0-9][0-9]{5}$/', $value)) {
                $okMessage = "Thanks for your comment, it will be moderated and added to this page soon.";
                $comment = true;
                $subject = "comment on $key";
                $refnum = substr($value,-6);
            } else {
                $subject = $value;
            }
        }
   }
   if (stripos($content, '</a>') !== false || stripos($content, "http:") !== false) {
       $errorMessage = "URLs are not allowed in comments, sorry";
   }
   // Rebuild emailText if this a suggestion
   elseif ($gallery) {
       $title = $_POST['title'] ?? 'TITLE';
       $plainBlazon = $_POST['suggestion'] ?? 'argent';
       $plainBlazon = lineBreak($plainBlazon,50);
       $additional = $_POST['additional'] ?? false;
       if ($additional) {
           $addData = "<q>$additional</q>\n";
       }
       $tags = $_POST['tags'] ?? false;
       $tagData = '';
       if ($tags) {
           $tagData = "<p>With Tags: $tags</p>\n";
       }
       $options = $_POST['options'] ?? 'shape=heater,effect=shiny,palette=drawshield';
       $prefs = '';
       $optionItems = explode(',',$options);
       foreach($optionItems as $option) {
           $parts = explode('=',$option);
            if (count($parts) > 1) $parts[1] = rtrim($parts[1],"' \n");
            switch($parts[0]) {
            case 'shape':
                    $prefs .= "<dt>Shield Shape</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'ar':
                    $prefs .= "<dt>Aspect Ratio</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'palette':
                    $prefs .= "<dt>Palette For Heraldic Tinctures</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'effect':
                    $prefs .= "<dt>Visual Appearance</dt><dd>${parts[1]}</dd>\n";
                    break;
            case 'webcols':
                    $prefs .= "<dt>Named Web Colours</dt><dd>Enabled</dd>\n";
                    break;
            case 'whcols':
                    $prefs .= "<dt>Warhammer Colours</dt><dd>Enabled</dd>\n";
                    break;
            default:
                    break;
            }
        }
       $createURL = "/create/index.html?blazon=" . rawurlencode($plainBlazon);
       $wgetURL = 'num=NNNN; wget -O /home/karl/site/ds-web/source/gallery/${num:0:2}/img/gallery-$num.png ' . "'http://drawshield.net/include/drawshield.php?asfile=1&size=750&saveformat=png-batik&blazon=" . rawurlencode($plainBlazon) . '&' . str_replace(',','&',$options) . "'";
       $emailText = preg_replace(
            array('/%plainBlazon%/', '/%addData%/', '/%createURL%/', '/%wgetURL%/', '/%title%/', '/%tags%/', '/%prefs%/' ),
            array($plainBlazon, $addData, $createURL, $wgetURL, $title, $tagData, $prefs),
            $galleryTemplate);
    } elseif ($comment) {
        include('/var/www/etc/credentials.inc');
        $database = mysqli_connect($db_addr,$db_user,$db_password,$db_database);
        if ($database === false) {
            $errorMessage = "Could not open database";
        } else {
            $cleanContent = mysqli_real_escape_string($database,$content);
            $sql = "INSERT into comments SET refnum = '$refnum', content = '$cleanContent'; ";
            if ($res = mysqli_query($database, $sql)) {
                $tableid = mysqli_insert_id($database);
                $emailText .= "I added this\n";
                $emailText .= preg_replace(
                    array ('/%tableid%/', '/%refnum%/'),
                    array ( $tableid, $refnum),
                     $commentTemplate);
            } else {
                $errorMessage = "Database insertion error -" . mysqli_error($database);
            }
        }
    }

    if (!$errorMessage) {
        // All the neccessary headers for the email.
        $headers = array('Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $from,
            'Return-Path: ' . $from,
        );
        $myfile = fopen("/tmp/email.txt","a");
        fwrite($myfile,$emailText);
        fclose($myfile);
        // Send email
        @mail($sendTo, $subject, $emailText, implode("\n", $headers));

        if ($bugReport) { // also send to discord
                $ch = curl_init("https://discord.com/api/webhooks/934893947367604254/bTUDWVT2RBwsew1kTaxSDEqIiiCLV_dpT_TD4R0ynnnyw1yM5yxukyP2JP4R36-VYUQS");
                $msg = "payload_json=" . urlencode(json_encode(array("username" => "ErrorBot", "content" => $emailText )));
                if(isset($ch)) {
                          curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
                          curl_setopt($ch, CURLOPT_POSTFIELDS, $msg);
                          curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                          $result = curl_exec($ch);
                          curl_close($ch);
                }
        }
    }

    if ($errorMessage)
        $responseArray = array('type' => 'fail', 'message' => $errorMessage);
    else
        $responseArray = array('type' => 'success', 'message' => $okMessage);

}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => 'There was an exception while submitting the form. Please try again later');
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
// else just display the message
else {
    header("Location: /contact/response.html?message=" . urlencode($responseArray['message']));
}
exit;