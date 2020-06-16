#!/bin/bash

url=http://test.drawshield.home
target=/include/drawshield.php?
resultfile=results.txt

cat /dev/null > $resultfile

if [ $# -eq 0 ]; then
  myargs='commands/*.txt'
else
  myargs="$*"
fi
for i in commands/*.txt; do
  name=${i##*/}
  name=${name%.txt}
  echo -n "Testing: " $name
  args=$(sed -e '/^#/d' -e '/^[[:space:]]*$/d' $i | paste '-sd&')
  curl --silent --data-urlencode "$args" $url$target > "responses/$name.svg"
  if [ ! -f "expected/$name.svg" ]; then
    echo " comparison file missing"
  else
    result=$(diff -I "timestamp" "expected/$name.svg" "responses/$name.svg")
    if [ -z "$result" ]; then
      echo " PASSED"
    else
      echo =========== $name ============= >> $resultfile
      echo $result >> $resultfile
      echo " FAILED"
    fi
  fi
  sleep 1
done
echo

