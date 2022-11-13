#!/bin/zsh

		for j in *.svg; do
		  k=${j/.svg/}
			k=${k// /-}
			k=${k//,/}
			k=${k//\'s/}
			k=${k//\&-/}
			k=${k/gardant/guardant}
			k=$(echo $k | tr '[:upper:]' '[:lower:]')
			# k now contains the filename
			l=${k//-/ }s\?
			l=${l// \(1\)/}
			l=${l// \(2\)/}
			l=${l// \(3\)/}
			echo $l=$1/$k
		done

