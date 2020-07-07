
var size=280;

var urlArgs = 'highlight=0&size=' + size;

let dropdown = "<select name=\"colour\">\n" +
"<option value=\"\"></option>" +
"<option value=\"yellow\">Yellow</option>" +
"<option value=\"orange\">Orange</option>" +
"<option value=\"gold\">Gold</option>" +
"<option value=\"light orange\">Light orange</option>" +
"<option value=\"ancient red\">Ancient red</option>" +
"<option value=\"ancient white\">Ancient white</option>" +
"<option value=\"coral\">Coral</option>" +
"<option value=\"yellow\">Yellow</option>" +
"<option value=\"rose\">Rose</option>" +
"<option value=\"ancient yellow\">Ancient yellow</option>" +
"<option value=\"orange\">Orange</option>" +
"<option value=\"basic red\">Basic red</option>" +
"<option value=\"medium yellow\">Medium yellow</option>" +
"<option value=\"scarlet old\">Scarlet old</option>" +
"<option value=\"light crimson\">Light crimson</option>" +
"<option value=\"red\">Red</option>" +
"<option value=\"scarlet\">Scarlet</option>" +
"<option value=\"terra cotta\">Terra cotta</option>" +
"<option value=\"wilsons madder\">Wilsons madder</option>" +
"<option value=\"light yellow\">Light yellow</option>" +
"<option value=\"cerise\">Cerise</option>" +
"<option value=\"madder\">Madder</option>" +
"<option value=\"dark gold\">Dark gold</option>" +
"<option value=\"dark orange\">Dark orange</option>" +
"<option value=\"mauve\">Mauve</option>" +
"<option value=\"brick red\">Brick red</option>" +
"<option value=\"alazarin\">Alazarin</option>" +
"<option value=\"crimson\">Crimson</option>" +
"<option value=\"faded green\">Faded green</option>" +
"<option value=\"light brown\">Light brown</option>" +
"<option value=\"rust\">Rust</option>" +
"<option value=\"sienna\">Sienna</option>" +
"<option value=\"yellow tan\">Yellow tan</option>" +
"<option value=\"carmine\">Carmine</option>" +
"<option value=\"lindsay\">Lindsay</option>" +
"<option value=\"shale brown\">Shale brown</option>" +
"<option value=\"marroon\">Marroon</option>" +
"<option value=\"khaki\">Khaki</option>" +
"<option value=\"gray red\">Gray red</option>" +
"<option value=\"dark red\">Dark red</option>" +
"<option value=\"dark ruby\">Dark ruby</option>" +
"<option value=\"wine red\">Wine red</option>" +
"<option value=\"heather\">Heather</option>" +
"<option value=\"brown\">Brown</option>" +
"<option value=\"light umber\">Light umber</option>" +
"<option value=\"olive brown\">Olive brown</option>" +
"<option value=\"hunting brown\">Hunting brown</option>" +
"<option value=\"drab\">Drab</option>" +
"<option value=\"umber\">Umber</option>" +
"<option value=\"dark umber\">Dark umber</option>" +
"<option value=\"dark brown\">Dark brown</option>" +
"<option value=\"parchment\">Parchment</option>" +
"<option value=\"light green\">Light green</option>" +
"<option value=\"teal\">Teal</option>" +
"<option value=\"ancient azure\">Ancient azure</option>" +
"<option value=\"emerald\">Emerald</option>" +
"<option value=\"wthred blue\">Wthred blue</option>" +
"<option value=\"faded blue\">Faded blue</option>" +
"<option value=\"weathered green\">Weathered green</option>" +
"<option value=\"verdant\">Verdant</option>" +
"<option value=\"ancient green\">Ancient green</option>" +
"<option value=\"green\">Green</option>" +
"<option value=\"olive green\">Olive green</option>" +
"<option value=\"dark olive\">Dark olive</option>" +
"<option value=\"green grey\">Green grey</option>" +
"<option value=\"hunting green\">Hunting green</option>" +
"<option value=\"dark blue green\">Dark blue green</option>" +
"<option value=\"dark green\">Dark green</option>" +
"<option value=\"carolina blue\">Carolina blue</option>" +
"<option value=\"fs blue\">Fs blue</option>" +
"<option value=\"light sky\">Light sky</option>" +
"<option value=\"sky blue\">Sky blue</option>" +
"<option value=\"purpleblue\">Purpleblue</option>" +
"<option value=\"light violet\">Light violet</option>" +
"<option value=\"old blue\">Old blue</option>" +
"<option value=\"light blue\">Light blue</option>" +
"<option value=\"anderson blue\">Anderson blue</option>" +
"<option value=\"balmoral blue\">Balmoral blue</option>" +
"<option value=\"azure\">Azure</option>" +
"<option value=\"ancient blue\">Ancient blue</option>" +
"<option value=\"mauve\">Mauve</option>" +
"<option value=\"oxford\">Oxford</option>" +
"<option value=\"hsa blue\">Hsa blue</option>" +
"<option value=\"blue\">Blue</option>" +
"<option value=\"purple\">Purple</option>" +
"<option value=\"royal blue\">Royal blue</option>" +
"<option value=\"navy blue\">Navy blue</option>" +
"<option value=\"blue grey\">Blue grey</option>" +
"<option value=\"dark blue\">Dark blue</option>" +
"<option value=\"dark purple\">Dark purple</option>" +
"<option value=\"midnight\">Midnight</option>" +
"<option value=\"clear\">Clear</option>" +
"<option value=\"wilson white\">Wilson white</option>" +
"<option value=\"white\">White</option>" +
"<option value=\"off white\">Off white</option>" +
"<option value=\"light gray\">Light gray</option>" +
"<option value=\"gray\">Gray</option>" +
"<option value=\"dark grey\">Dark grey</option>" +
"<option value=\"ancient black\">Ancient black</option>" +
"<option value=\"black\">Black</option>" +
    "</select>";

function makeBlock(number) {
    let outer = document.createElement("div");
    outer.setAttribute("class","col-sm-4 col-lg-2");
}

var shadow = '';

var bStack;
var qStack;
var sStack;

var fixedColour = false;

function init_build() {
    bStack = [];
    qStack = [];
    sStack = [];
    document.getElementById('blazon').value="";
    shadow="~start-here~";
    requestSVG('/include/drawshield.php?' + urlArgs +
        '&blazon=Argent%20the%20word%20shield%20sable%20the%20word%20Your%20sable%20in%20chief%20the%20word%20here%20in%20base%20sable','shieldimg');
    questions = document.getElementById("questions");
    questions.replaceChild( nextQuestion (), questions.firstChild );
    // validate();
}

function finished() {
    document.getElementById('blazon').removeAttribute('disabled');
    var questions = document.getElementById('questions');
      questions.removeChild(questions.firstChild);
    var para = document.createElement('p');
    var words = document.createTextNode('Congratulations! You have now completed your ' +
    'design! To make any more changes or chose different options ');
    para.appendChild(words);
    var link = document.createElement('a');
    link.setAttribute('href',"/create/index.html?" +
      'blazon=' + encodeURIComponent(document.getElementById('blazon').value));
    words = document.createTextNode('click this link ');
    link.appendChild(words);
    para.appendChild(link);
    words = document.createTextNode('to transfer your blazon to the "Create" page", or click the "Refresh" button to start over. ' +
      ' This program only has a small subset of blazonry terms, but I hope it has helped you understand how blazons are constructed. ' +
          'Take a look at the help page and the suggested reading to find out more of what can be done.');
    para.appendChild(words);
    questions.appendChild(para);
    document.getElementById("savePanel").setAttribute('style','display: block;');
    return false;
}

function goback() {
  if ( bStack.length > 0 ) {
    document.getElementById('blazon').value = bStack.pop();
    shadow = sStack.pop();
    var questions = document.getElementById('questions');
    questions.replaceChild(qStack.pop(),questions.firstChild);
  }
  // return false;
}

function do_reset() {
  document.getElementById('blazon').disabled='disabled';
  document.getElementById("savePanel").setAttribute("style", "display: none;");
  init_build();
  return false;
}

var fixedItems = [ 'pellet', 'golpe', 'guze', 'hurt', 'orange', 'pomme', 'torteau', 'ford'];

function do_replace(answer) {
      if (fixedItems.includes(answer)) fixedColour = true;
  var blazonElement = document.getElementById('blazon');
  if ( !blazonElement.hasAttribute('disabled') ) return;
  bStack.push(blazonElement.value);
  sStack.push(shadow);
  shieldImg = document.getElementById('shieldimg');
  questions = document.getElementById('questions');
  qStack.push( questions.firstChild );
  let target = shadow.match(/~.*?~/);
  if (target[0] == '~string~') answer = '"' + answer + '"';
  shadow = shadow.replace( /~.*?~/, answer );
  let newChild = nextQuestion ();
  if (newChild != null) // last question
    questions.replaceChild(newChild, questions.firstChild);
  else
      questions.removeChild(questions.firstChild);
}

function getString(id) {
    let string = document.getElementById(id).value;
    if (string == '') string = 'motto';
    do_replace(string);
}

function nextQuestion()  {

  var target = shadow.match(/~.*?~/);
  if (target == null) {
      finished();
      return;
  } else {
      target = target[0];
  }
  let found = true;
  while (found) {
        found = false;
        if (target == "~x-colour~" && fixedColour) {
              shadow = shadow.replace(/~x-colour~/, '');
              fixedColour = false;
              target = shadow.match(/~.*?~/);
              if (target == null) {
                    finished();
                    return;
              } else {
                    target = target[0];
              }
              found = true;
        }
        if (target == "~update~") {
              var current = shadow.substring(0, shadow.indexOf('~') - 1);
              document.getElementById('blazon').value = current;
              shadow = shadow.replace(/~update~/, '');
              requestSVG('/include/drawshield.php?' + urlArgs +
                  '&blazon=' + encodeURIComponent(current), 'shieldimg');
              target = shadow.match(/~.*?~/);
              if (target == null) {
                    finished();
                    return;
              } else {
                    target = target[0];
              }
              found = true;
        }
  }

  let sData = shieldData[target];
  if (typeof (sData) == 'undefined') {
      console.log("Expansion " + target + " not found");
      return;
  }
  var retDOM = document.createElement('div');
  retDOM.setAttribute('class','row');
  var h2div = document.createElement('div');
  h2div.setAttribute('class','col-12');
  temp = document.createElement('h2');
  h2div.appendChild(temp);
  temp.appendChild(document.createTextNode(sData[0]));
  retDOM.appendChild(h2div);
  var stringCount = 1;
    for (var i = 1; i < sData.length; i +=3 ) {
        if (sData[i] == '$') {
            var div = document.createElement('div');
            div.setAttribute('class', 'col-10');
            let id = 'string' + stringCount++;
            var textInput = document.createElement('input');
            textInput.setAttribute('id',id);
            textInput.setAttribute('size','500');
            textInput.setAttribute('type','text');
            textInput.setAttribute('placeholder',sData[i+1]);
            div.appendChild(textInput);
            retDOM.appendChild(div);
            var div = document.createElement('div');
            div.setAttribute('class', 'col-2');
            var submitButton = document.createElement('input');
            submitButton.setAttribute('value','Submit');
            submitButton.setAttribute('type','button');
            submitButton.setAttribute('onclick','getString("' + id + '");');
            div.appendChild(submitButton);
        } else {
            var div = document.createElement('div');
            div.setAttribute('class', 'col-lg-2 col-md-3, col-sm-4 p-0');
            div.setAttribute('onclick', 'do_replace("' + sData[i] + '")');
            div.setAttribute('style', 'background:#EBEBE4;');
            var img = document.createElement('img');
            img.setAttribute('alt', 'choice');
            img.setAttribute('width', '120');
            img.setAttribute('height', '120');
            img.setAttribute('class', 'mx-auto d-block');
            if (typeof (sData[i + 2]) == 'undefined') {
                console.log("data error in " + target + " at " + i);
                continue;
            }
            if (sData[i + 2] != '') {
                var prefix = '/build/img/';
                if (sData[i + 2].substr(0,1) == '/') prefix = '';
                img.setAttribute('src', prefix + sData[i + 2]);
            } else {
                img.setAttribute('src', '/build/img/none.png');
            }
            div.appendChild(img);
            var temp = document.createElement('p');
            temp.setAttribute('class', 'lead');
            temp.appendChild(document.createTextNode(sData[i + 1]));
            div.appendChild(temp);
        }
        retDOM.appendChild(div);
    }

    return retDOM;
}


function saveBuild() {
    form = document.getElementById("saveForm");
    form.action = '/include/drawshield.php';
    form.target = '_blank';
    let filename = document.getElementById('filenameInput').value;
    if (filename == '') filename = 'shield';
    form.elements['filename'].value = filename;
    let blazonText = document.getElementById('blazon').value;
    form.elements['blazon'].value = blazonText;
    var saveWidth = document.getElementById('sizeInput').value;
    if (saveWidth == 0)
          saveWidth = 1000
    else if (saveWidth > 5000)
        saveWidth = 5000
    else if (saveWidth < 50)
        saveWidth = 50;
    form.elements["size"].value = saveWidth;
    var e = document.getElementById("formatSelect");
    form.elements["saveformat"].value = e.options[e.selectedIndex].value;
    form.submit();
}

window.onload=init_build();
