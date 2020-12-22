<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DrawShield Status Page</title>
</head>

<body>
  <h1>DrawShield Server Status</h1>
  <p>Current time is <?php echo date(DATE_RFC2822); ?>.</p>
  <h2>Uptime</h2>
  <p>If the load averages is above 1.0 we are really busy...</p>
  <pre>
  <?php system ("uptime"); ?> 
  </pre>
  <p>The Apache server is running... (otherwise you wouldn't see this page, duh.)</p>
  <p>But click this for the <button type="button" onclick="document.getElementById('apache').style.display='block';">Full Details</button>.</p>
  <div id="apache" style="display: none;">
  <pre>
  <?php system ("service apache2 status"); ?> 
  </pre>
  </div>
  <h2>Disk Usage</h2>
  <p>If the number under use% is greater than 80% we might need a bigger disk...</p>
  <pre>
  <?php system ("df -h /var/www/html/index.html"); ?> 
  </pre>
  <h2>Memory Usage</h2>
  <p>If the number at the intersection of "Free" and "Swap" is less than 100M we might need a bigger server...<p>
  <pre>
  <?php system("free -ht --si"); ?>
  </pre>
  <h2>Discord Bot</h2>
<?php
	session_start();
	if ( isset($_SESSION['secret']) && $_SESSION['secret'] == 'jq44uzs2' && $_GET['action'] == 'restart-pm2') {
		system ("pm2 start");
		echo "<p>Attempted pm2 restart.</p>\n";
		sleep(1);
	} else {
		$_SESSION['secret'] == 'jq44uzs2';
	}
?>
  <p>The "Status" field of the line starting "drawshield" should be "online". If not, click the button below.<p>
  <pre>
  <?php system("/var/www/bot/runpm2 list"); ?>
  </pre>
  <p><button type="button">Restart the Discord DrawShield Bot</button></p>
</body>

</html>
