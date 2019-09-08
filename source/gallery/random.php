<?php
$latest = intval(file_get_contents('latest.txt'));

header("Location: /gallery/" . mt_rand($latest,9999), true, 302);

exit();
