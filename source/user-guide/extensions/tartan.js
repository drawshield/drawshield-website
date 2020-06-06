
function tartanToBlazon() {
    var result = '';

    var colourCodes = [
        ['FSB', 'fs blue'],
        ['LR', 'light red'],
        ['R', 'red'],
        ['DR', 'dark red'],
        ['O', 'orange'],
        ['DO', 'dark orange'],
        ['LY', 'light yellow'],
        ['Y', 'yellow'],
        ['DY', 'dark yellow'],
        ['LG', 'light green'],
        ['G', 'green'],
        ['DG', 'dark green'],
        ['LB', 'light blue'],
        ['B', 'blue'],
        ['DB', 'dark blue'],
        ['LP', 'light purple'],
        ['P', 'purple'],
        ['DP', 'dark purple'],
        ['LN', 'light grey'],
        ['N', 'grey'],
        ['DN', 'dark grey'],
        ['LT', 'light brown'],
        ['T', 'brown'],
        ['DT', 'dark brown'],
        ['W', 'white'],
        ['K', 'black'],
        ['HSA', 'hsa blue'],
        ['WG', 'weathered green'],
        ['WB', 'weathered blue'],
    ];

    function setName(codeString, value) {
        for ( l = 0; l < colourCodes.length; l++) {
            if (colourCodes[l][0] == codeString) {
                colourCodes[l][1] = value.toLowerCase();
                break;
            }
        }
    }

    function updateCodes(pallete) {
        let temp = '';
        let code = ';';
        for (m = 0; m < pallete.length; m++) {
            if (pallete[m] == '=') {
                code = temp;
                temp = '';
            } else if (pallete[m] == ';') {
                setName(code,temp.substring(6));
                temp = '';
                code = '';
            } else {
                temp = temp.concat(pallete[m]);
            }
        }
        // in case of missing semi-colon at end
        if (code && temp) {
            setName(code,temp.substring(6));
        }
    }

    function getName(codeString) {
        for (let j = 0; j < colourCodes.length; j++) {
            if (colourCodes[j][0] == codeString)
                return colourCodes[j][1];
        }
        return "grey [?" + codeString + "?]";
    }

    var tartan = document.getElementById('tartan').value.toUpperCase();
    var pallet = document.getElementById('pallete').value.toUpperCase();
    var fullCount = document.getElementById('full-count').checked;
    var strlen1 = tartan.length;
    if (!strlen1) return;

    var symmetrical = true;
    var number = '';
    var code = '';
    var firstThread = true;

    if (pallet) {
        updateCodes(pallet);
    }

    for (i = 0; i < strlen1; i++) {
        switch (tartan[i]) {
            case '/':
                symmetrical = true;
                break;
            case '.':
                symmetrical = false;
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (code) {
                    result = result.concat(" ", getName(code));
                    code = '';
                }
                number = number.concat(tartan[i]);
                break;
            case ' ':
                if (code) {
                    result = result.concat(" ", getName(code));
                    code = '';
                }
                if (number) {
                    if (firstThread && fullCount) {
                        firstThread = false;
                        number /= 2;
                    }
                    result = result.concat(' ', number);
                    number = '';
                }
                break;
            case 'L':
            case 'D':
            case 'R':
            case 'Y':
            case 'F':
            case 'S':
            case 'O':
            case 'G':
            case 'B':
            case 'P':
            case 'W':
            case 'N':
            case 'K':
            case 'T':
            case 'A':
            case 'H':
                code = code.concat(tartan[i]);
                if (number) {
                    if (firstThread && fullCount) {
                        firstThread = false;
                        number /= 2;
                    }
                    result = result.concat(' ', number);
                    number = '';
                }
                break;
            default:
                result = result.concat( ' [', tartan[i], '?]');
                break;
        }
    }
    if (fullCount) number /= 2;
    if (number) {
        result = result.concat(' ', number);
    }
    if (!symmetrical) {
        result = " no repeat" + result;
    }
    result = "tartan" + result;
    document.getElementById('blazon').value = result;
}

