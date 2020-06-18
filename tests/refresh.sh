#!/bin/bash

url=http://test.drawshield.home
target=/include/drawshield.php?

if [ $# -eq 0 ]; then
  myargs='testcases/*.txt'
else
  myargs="$*"
fi
for i in $myargs; do
  name=${i##*/}
  name=${name%.txt}
  args=$(sed -e '/^[[:space:]]*#/d' -e '/^[[:space:]]*$/d' -e 's/ *= */=/' -e 's/.*/--data-urlencode "&"/' $i | paste '-sd ')
  eval curl --silent $args $url$target > "expected/$name.svg"
  echo Created: $name with $args
  sleep 1
done
