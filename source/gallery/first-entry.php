<?php

$first = file_get_contents("latest.txt");

header("Location: /gallery/gallery-$first.html");
exit;
