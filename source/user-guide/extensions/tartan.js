
function tartanToBlazon() {
    var result = '';

    var tartan = document.getElementById('tartan').value.toUpperCase();
    var strlen1 = tartan.length;
    if (!strlen1) return;

    var symmetrical = true;
    var number = '';
    var in_number = false;
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
                in_number = true;
                number = number.concat(tartan[i]);
                break;
            case ' ':
                if (in_number) {
                    result = result.concat(' ', number);
                    number = '';
                    in_number = false;
                }
                break;
            case 'L':
                result += ' ' + 'light';
                break;
            case 'D':
                result += ' ' + 'dark';
                break;
            case 'R':
                result += ' ' + 'red';
                break;
            case 'Y':
                result += ' ' + 'yellow';
                break;
            case 'O':
                result += ' ' + 'orange';
                break;
            case 'G':
                result += ' ' + 'green';
                break;
            case 'B':
                result += ' ' + 'blue';
                break;
            case 'P':
                result += ' ' + 'purple';
                break;
            case 'W':
                result += ' ' + 'white';
                break;
            case 'N':
                result += ' ' + 'grey';
                break;
            case 'K':
                result += ' ' + 'black';
                break;
            case 'T':
                result += ' ' + 'brown';
                break;
            default:
                result += ' [' + tartan[i] + '?]';
                break;
        }
    }
    if (in_number) {
        result = result.concat(' ', number);
    }
    if (!symmetrical) {
        result = " no repeat" + result;
    }
    result = "tartan" + result;
    document.getElementById('blazon').value = result;
}

