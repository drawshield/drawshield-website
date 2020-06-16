#!/bin/bash

url=http://test.drawshield.home
target=/include/drawshield.php?

if [ $# -eq 0 ]; then
  myargs='commands/*.txt'
else
  myargs="$*"
fi
for i in $myargs; do
  name=${i##*/}
  name=${name%.txt}
  args=$(sed -e '/^#/d' -e '/^[[:space:]]*$/d' $i | paste '-sd&')
  #curl --silent --data-urlencode "$args" $url$target > "expected/$name.svg"
  echo curl --verbose --data-urlencode "$args" $url$target
  #curl --verbose --data-urlencode "$args" $url$target > "expected/$name.svg"
  echo Created: $name
  sleep 1
done
