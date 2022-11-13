#!/bin/zsh

here=$(pwd)/
cd $here/SVG
for i in T*; do
	mkdir -p $here/SVG2/$i
	cd $i
		for j in *.svg; do
			k=${j// /-}
			k=${k//,/}
			k=${k//\'s/}
			k=${k//\&-/}
			k=${k/gardant/guardant}
			k=$(echo $k | tr '[:upper:]' '[:lower:]')
			echo $j '=>' $k
			# saxon -xsl:/Users/karlw/Documents/ds-web/tools/convert.xslt "$j" creator="http://heraldicart.org $j" > ~/Downloads/SVG2/$i/$k
			saxonb-xslt -s:"$j" -xsl:"$here/convert.xslt" -o:"$here/SVG2/$i/$k" creator="http://heraldicart.org $j"
			# read -r line
		done
	cd $here/SVG
done

