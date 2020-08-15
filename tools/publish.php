<?php

class Email_reader {

	// imap server connection
	public $conn;

	// inbox storage and inbox message count
	private $inbox;
	private $msg_cnt;

	// email login credentials
	private $server;
	private $user;
	private $pass;
	private $port;

	// connect to the server and get the inbox emails
	function __construct($server, $user, $pass, $port) {
		$this->server = $server;
		$this->user = $user;
		$this->pass = $pass;
		$this->port = $port;
		$this->connect();
		$this->inbox();
	}

	// close the server connection
	function close() {
		$this->inbox = array();
		$this->msg_cnt = 0;

		imap_close($this->conn);
	}

	// open the server connection
	// the imap_open function parameters will need to be changed for the particular server
	// these are laid out to connect to a Dreamhost IMAP server
	function connect() {
		$this->conn = imap_open('{'.$this->server . ':' . $this->port.'}', $this->user, $this->pass);
	}

	// move the message to a new folder
	function move($msg_index, $folder='INBOX.Processed') {
		// move on server
		imap_mail_move($this->conn, $msg_index, $folder);
		imap_expunge($this->conn);

		// re-read the inbox
		$this->inbox();
	}

	// get a specific message (1 = first email, 2 = second email, etc.)
	function get($msg_index=NULL) {
		if (count($this->inbox) <= 0) {
			return array();
		}
		elseif ( ! is_null($msg_index) && isset($this->inbox[$msg_index])) {
			return $this->inbox[$msg_index];
		}

		return $this->inbox[0];
	}

	// read the inbox
	function inbox() {
		$this->msg_cnt = imap_num_msg($this->conn);

		$in = array();
		for($i = 1; $i <= $this->msg_cnt; $i++) {
			$structure = imap_fetchstructure($this->conn, $i);
			$body = imap_body($this->conn, $i);
			if ($structure->encoding == ENCBASE64) {
				$body = imap_base64($body);
				$body = preg_replace('/<br>/i',"\n",$body);
				$body = html_entity_decode($body, ENT_QUOTES);
			}
			$in[] = array(
				'index'     => $i,
				'header'    => imap_headerinfo($this->conn, $i),
				'body'      => $body,
				'structure' => imap_fetchstructure($this->conn, $i)
			);
		}

		$this->inbox = $in;
    }
    
    // How many emails?
    function number() {
        return $this->msg_cnt;
    }

}

$folder = "../source/gallery/";

function getNextLowest($folder) {
	$lowestDir =999;
	$topdir = opendir($folder);
	while($topEntry = readdir($topdir)) {
		if (strlen($topEntry) == 2 
			&& is_dir($folder . $topEntry) 
			&& ctype_digit($topEntry[0]) 
			&& ctype_digit($topEntry[1]) 
			&& ((int)$topEntry < $lowestDir)) 
				$lowestDir = $topEntry;
	}
	closedir($topdir);
	$subDir = opendir($folder . $lowestDir);
	$lowestFile = 9999;
	while($subEntry = readdir($subDir)) {
		if (preg_match('/gallery-([0-9]{4}).html/', $subEntry, $match)) {
			if ((int)$match[1] < $lowestFile)
				$lowestFile = $match[1];
		}
	}
	return $lowestFile - 1;
}

function startsWith($start, $target) {
	return (strncmp($target, $start, strlen($start)) == 0);
}

include "../var/www/etc/email_credentials.inc";
$email_reader = new Email_reader($server, $user, $pass, $port);
$num = $email_reader->number();

while (true) {
    // get an email
    $email = $email_reader->get();

    // if there are no emails, jump out
    if (count($email) <= 0) {
        break;
    }

    // get content from the email that I want to store
    $addr   = $email['header']->from[0]->mailbox."@".$email['header']->from[0]->host;
    $sender = $email['header']->from[0]->mailbox;
    $subject   = ( ! empty($email['header']->subject) ? $email['header']->subject : '');
	$body = $email['body'];
	
	if (strcmp ($subject, "Fwd: Gallery Suggestion") == 0) {
		$subject = getNextLowest($folder);
	} elseif (!preg_match('/[0-9]{4}/',$subject)) {
		echo "ignoring message subject: $subject\n";
		$email_reader->move($email['index'], 'INBOX/Ignored');
		sleep(1);
        continue;
    }
	echo "Processing $subject -";
	// echo $body . "\n";
	// exit(0);
	$lines = explode("\n",$body);
	$output = "---\n";
	$copy = false;

	$execute = '';
	$titleTarget = 'pageTitle:';
	$endTarget = '<!-- gallery/[....].html ends';
	$numTarget = 'entryNum:';
	$execTarget = '<!-- num=NNNN';
	$fixTarget = 'pageTitle: layout:';
	$execEnd = '-->';
	$gatherExecute = false;
    foreach ($lines as $line) {
		if ($gatherExecute) {
			if (startsWith($execEnd, $line)) {
				$output .= $execute . "\n" . $execEnd . "\n";
				$gatherExecute = false;
			} else {
				$execute .= rtrim($line);
			}
			continue;
		}
        if (startsWith($titleTarget, $line)) {
			if (startsWith($fixTarget, $line)) {
				$output .= "layout: gallery-entry\n";
				$title = '(Untitled)';
			} else {
            $title = trim(substr($line, strlen($titleTarget)));
			}
			if ($title == '') $title = '(Untitled)';
			$copy = true;
			$output .= $titleTarget . ' ' . $title . "\n";
			echo " Title: $title\n";
			continue;
		}
		if (startsWith($numTarget, $line)) {
			$output .= $numTarget . ' ' . $subject . "\n";
			continue;
		}
		if (startsWith($execTarget, $line)) {
			$execute = rtrim($line) . ' ';
			$gatherExecute = true;
			continue;
		}
		////////// FROM HERE
		// if (startsWith('<p>Suggested by', $line)) {
		// 	$output .= "<p>Suggested by Ser Jakob the Second</p>\n\n<p>With Tags: gameOfThrones</p>\n";
		// 	continue;
		// }
		// if (startsWith('<q>by Ser Jakob the Second</q>', $line)) {
		// 	continue;
		// }
		// if (startsWith('<q>by Ser Jakob the Second', $line)) {
		// 	$output .= "<q>\n";
		// 	continue;
		// }
		/////////////// TO HERE
		if ($copy) $output .= $line . "\n";

		if (strncmp($line, $endTarget, strlen($endTarget)) == 0) {
			$copy = false;
			break;
		}	
	}
	$subfolder = substr($subject,0,2);
	if (!file_exists($folder . $subfolder)) {
		mkdir ($folder . $subfolder);
		mkdir ($folder . $subfolder . "/img");
	}
	file_put_contents($folder . $subfolder . '/gallery-' . $subject . '.html', $output);
	$url = '';
	$found = false;
	for ($i = 0; $i < strlen($execute); $i++) {
		$ch = $execute[$i];
		if ($found) {
			if ($ch == "'") {
				break;
			} else {
				$url .= $ch;
			}
		} else { // !found
			if ($ch == "'") {
				$found = true;
			}
		}
	}
	$url = preg_replace('/http:/','https:', $url);
    $url = preg_replace('/=png&whcols=1&webcols=1/','=png', $url);
	 // system($execute);
	// echo $execute . "\n";
	$img = file_get_contents($url);
	if ($img[0] == '<') {
		echo "possible rendering error\n";
	}
	file_put_contents($folder . $subfolder . '/img/' . '/gallery-' . $subject . '.png', $img);

    // move the email to Processed folder on the server
    $email_reader->move($email['index'], 'INBOX/Processed');

    // don't slam the server
	sleep(1);
}

// close the connection to the IMAP server
$email_reader->close();

