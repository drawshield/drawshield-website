var blazon = "";

// Bad blazon: Écartelé aux 1 et 4 d'or au chevron d'azur acc en pointe d'une demi-aigle de sable posée en fasce mouv de la pointe la tête à senestre aux 2 et 3 de gueules au lion d'or celui du 3 contourné A la fasce d'argent brochant sur l'écartelé et ch de trois écussons de sable Casque couronné Cimier le lion du 2 issant Lambrequin à dextre d'or et de sable à senestre d'or et de gueules

function buildCombo(options) {
	var select = document.createElement("select");
	for (var i = 0; i < options.length; i++) {
		option = document.createElement("option");
		option.setAttribute("value",options[i]);
		textNode = document.createTextNode(options[i]);
		option.appendChild(textNode);
		select.appendChild(option)
	}
	option = document.createElement("option");
	option.setAttribute("value","");
	textNode = document.createTextNode("(n/a)");
	option.appendChild(textNode);
	select.appendChild(option);
	select.firstChild.setAttribute("selected","selected");
	return select;
}

function getGuesses(input) {

	input = input.replace(/\)/," )");
	var original = input;
	var results = [];
	input += " "; // ensure everyword terminates with whitespace
	for ( index = 0; index < normalisations.length; index++ ) {
		item = normalisations[index];
		re = new RegExp( item[0], 'g' );
		input = input.replace(re,item[1]);
	}
	input = input[0].toLowerCase() + input.substring(1); // never trigger upper case on first word

	while (input.length > 0) {
		found = null;

		// Upper case A on its own sometimes seems to mean "overall"
		re0 = /^A\s\s*/;
		found = input.match(re0);
		if (found != null) {
			foundLength = found[0].length;
			orig = original.substring(0,foundLength);
			original = original.substring(foundLength);
			results.push([found[0],"Overall/A",orig]);
			input = input.substring(foundLength);
			continue;
		}
		if (found == null) {
			// look for a (n)
			re4 = /^\(([1-9]) \)\s*/;
			found = input.match(re4);
			if (found != null) {
				foundLength = found[0].length;
				orig = original.substring(0,foundLength);
				original = original.substring(foundLength);
				results.push([found[0],"of " + found[1] + " points",orig]);
				input = input.substring(foundLength);
				continue;
			}
		}
		// other Brackets just match and pass on
		re0 = /^[\({\[\]}\)]/;
		found = input.match(re0);
		if (found != null) {
			orig = original.substring(0,1);
			original = original.substring(1);
			results.push([found[0],found[0],orig]);
			input = input.substring(1);
			continue;
		}

		if (found == null) {
			// if all upper case, just pass through
			re2 = /^([A-Z][A-Z]*)\b\s*/;
			found = input.match(re2);
			if ( found != null ) {
				foundLength = found[0].length;
				orig = original.substring(0,foundLength);
				original = original.substring(foundLength);
				results.push([found[0],found[1],orig]);
				input = input.substring(foundLength);
				continue;
			}
		}
		// target = document.getElementById("target");
		for ( index = 0; index < lexicon.length; index++ ) {
			item = lexicon[index];
			// target.value += item[0] + "/";
			re = new RegExp( "^" + item[0] + "\\s\\s*", 'i' );
			found = input.match(re);
			if ( found != null ) {
				foundLength = found[0].length;
				orig = original.substring(0,foundLength);
				original = original.substring(foundLength);
				plural = "";
				//if (item[0].endsWith("s") && !item[0].endsWith("es") && !found[0].endsWith("s ")) {
					// Exceptions
					//if (!(found[0] == "three ") {
					//	plural = "s";
					//}
				//}
				results.push([found[0],item[1] + plural,orig]);
				input = input.substring(foundLength);
				break;
			}
		}

//		if (found == null ) {
//			// look for bracketed word
//			re3 = /^\(.*?\)\s*/;
//			found = input.match(re3);
//			if (found != null) {
//				foundLength = found[0].length;
//				orig = original.substring(0,foundLength);
//				original = original.substring(foundLength);
//				results.push([found[0],found[0],orig]);
//				input = input.substring(foundLength);
//				continue;
//			}
//		}
		if ( found == null ) { // still can't find anything
			re3 = /^\S\S*\s*/i;
			found = input.match(re3);
			if ( found != null ) {
				foundLength = found[0].length;
				orig = original.substring(0,foundLength);
				original = original.substring(foundLength);
				results.push([found[0],"",orig]);
				input = input.substring(foundLength);
			}
		}

		if ( found == null ) { // shouldn't happen
			input = input.substring(1);
		}
	}
	return results;
}

var prevItem = null;
function setBackground(id) {
	if (prevItem != null) {
		prevItem.setAttribute("style","background-color: aliceblue;");
	}
	prevItem = document.getElementById(id);
	prevItem.setAttribute("style","background-color: yellow;");
}

function doExpand() {
	var origText = document.getElementById("original");
	var transText = document.getElementById("translation");

	if (blazon.length == 0 ) {
		return;
	}
	var charWidth = 10;
	var guesses = getGuesses(blazon);
	var focusOnMe = null;

	clearAll();

	// create and add new spans and input boxes
	var counter = 1;
	for (index = 0; index < guesses.length; ++index) {
		style = "";
		// spans in original text
		var guess = guesses[index];
		var newSpan = document.createElement("span");
		newSpan.appendChild(document.createTextNode(guess[2]));
		id = "p" + counter++;
		newSpan.setAttribute("id",id);
		newSpan.setAttribute("style","background-color: aliceblue;");
		origText.appendChild(newSpan);
		// input boxes in translation
		if (guess[1].includes("/")) {
			options = guess[1].split("/");
			newInput = buildCombo(options);
			width = 0;
			for (k = 0; k < options.length; k++) {
				if (options[k].length * charWidth > width) {
					width = (options[k].length + 3) * charWidth;
				}
			}
			if (width < 50) { width = 50; }
		} else {
			var thisGuess = guess[1];
			if (thisGuess.startsWith("{")) {
				switch(thisGuess.substring(1,thisGuess.length -1)) {
					case "article":
						thisGuess = "a(n)";
						if (index < guesses.length - 1) {
							var nextWord = guesses[index+1][1];
							var vowels = "aeio";
							if (vowels.includes(nextWord.substring(0,1))) {
								thisGuess = "an";
							} else {
								thisGuess = "a";
							}
						}
						break;
					default:
						console.log("Unknown predicate - " + thisGuess);
						break;
				}
			}
			newInput = document.createElement("input");
			newInput.setAttribute("type","text");
			newInput.value = thisGuess;
			if (thisGuess.length == 0) {
				style += "background-color: NavajoWhite;";
				width = 10 * charWidth;
			} else {
                wordLength = thisGuess.length;
                if (wordLength < 6) {
                    wordLength += 1;
                } else if (wordLength > 12) {
                    wordLength = Math.floor(wordLength * 0.9);
                }
    			width = wordLength * charWidth;			    
			}
		}
		if (width > 680) { width = 680; }
		style += "width:" + width + "px;"
		newInput.setAttribute("class","translation");
		newInput.setAttribute("style",style);
		newInput.setAttribute("onfocus","setBackground('" + id + "')");
		if (focusOnMe == null ) {
			focusOnMe = newInput;
		}
		transText.appendChild(newInput);
		transText.appendChild(document.createTextNode(" "));
	}
	focusOnMe.focus();
}

function format() {
	// get target textarea
	var target = document.getElementById("target");

	// gather up the words of the translation
	var newWords = document.getElementsByClassName("translation");
	var translation = "";
	for (index = 0; index < newWords.length; ++index) {
		if (newWords[index].hasAttribute("type")) {
			newWord = newWords[index].value;
		} else {
			select = newWords[index];
			newWord = select.options[select.selectedIndex].getAttribute("value");
		}
		if (newWord.length > 0) {
			translation += newWord + " ";
		}
	}
	translation = translation[0].toUpperCase() + translation.substring(1);
	translation = translation.substring(0,translation.length-1);
	translation += ".";
	// put them in the text area
	target.value = translation;
	target.select();
}

function doTranslate() {
	blazon = document.getElementById("blazon").value;
	doExpand();
}

document.onkeyup=function(e){
	var e = e || window.event; // for IE to cover IEs window event-object
	if(e.ctrlKey && e.which == 84) {
		//alert('Keyboard shortcut working!');
		translate();
		return false;
	} else if (e.ctrlKey && e.which == 70) {
		format();
	}
}

function restart() {
	document.getElementById("blazon").value = "";
	clearAll();
}

function clearAll() {
	document.getElementById("target").value = "";
	// get the paragraph for the original
	var origText = document.getElementById("original");
	var previous = origText.children;
	// delete any previous data
	var limit = previous.length;
	for (index = limit - 1; index >= 0; index--) {
		origText.removeChild(previous[index]);
	}

	// get the paragraph for the translation
	var transText = document.getElementById("translation");
	var previous = transText.children;
	// delete any previous data
	var limit = previous.length;
	for (index = limit - 1; index >= 0; index--) {
		transText.removeChild(previous[index]);
	}
}
