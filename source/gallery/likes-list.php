<?php

$template = <<< EOD

<div class="gallery gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6">
<figure>
<a href="%pageURL%"><img src="%image%" alt="Shield image" class="img-fluid" /></a>
<figcaption class="text-center"><a href="%pageURL%">%caption%</a> <br>
<button id="button-%refnum%" type="button" class="btn btn-danger btn-sm" onclick="voteFor('%refnum%');">
  Like <span data-num="%refnum%" class="badge badge-light">%votes%</span>
</button>
</figcaption>
</figure>
</div>

EOD;

session_start();

if (!array_key_exists('votable', $_SESSION)) {
    $_SESSION['votable'] = [];
    $_SESSION['voted'] = [];
}

if (!file_exists('/var/www/etc/credentials.inc')) exit;

include('/var/www/etc/credentials.inc');
$database = mysqli_connect($db_addr,$db_user,$db_password,$db_database);
$sql = "SELECT refnum, count FROM votes ORDER by last_update DESC LIMIT 20";


if ($res = mysqli_query($database, $sql)) {
  while ($row = mysqli_fetch_array($res)) {
    $refnum = $row['refnum'];
    if (!in_array($refnum, $_SESSION['votable']))
        $_SESSION['votable'][] = $refnum;
    $votes = $row['count'];
    $initial = substr($refnum,0,2);
    $image = "/gallery/$initial/img/gallery-$refnum.png";
    $pageURL = "/gallery/$initial/gallery-$refnum.html";
    $caption = "TBD ($refnum)";
      $output = preg_replace(array('/%pageURL%/','/%caption%/','/%refnum%/','/%image%/','/%votes%/'), 
                  array($pageURL, $caption, $refnum, $image, $votes), $template);
      echo $output;
  }
} else {
  echo "SQL error " . mysqli_error($database);
}

