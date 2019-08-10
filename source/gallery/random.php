---
layout: none
---
<?php

header("Location: /gallery/" . mt_rand({{ site.latestGallery }},9999), true, 302);

exit();
