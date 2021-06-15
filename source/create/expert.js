var shieldSize = 500;
var shieldtarget = 'shieldimg';
var captiontarget = 'shieldcaption';
var targetURL = '/include/drawshield.php';
var messageContainer = 'messageDiv';
var messageTarget = 'messageList';
var editorLoad = "\n\n\n";
//////////// OPTION HANDLING ///////////////////
// The options, default values for first time visit
  var options = {
  palette: 'wikipedia',
  effect: 'none',
  shape: 'heater',
  aspectRatio: '0.5',
  useWebColours: 'no',
  useWarhammerColours: 'no',
  useTartanColours: 'no',
  customPalette: '',
  useCustomPalette: 'no',
};

function setOption(ev, varName, valType) {
    if (ev === null) { // direct setting
        options[varName] = valType;
    } else {
        if (valType == 'text') {
            options[varName] = ev.target.value;
        } else if (valType == 'checkbox') {
            options[varName] = ev.target.checked ? 'yes' : 'no';
        } else if (valType == 'radio') {
            options[varName] = ev.target.value;
        }
    }
    setCookie(varName, options[varName]);
}


function getCookies() { // override defaults if cookies are set
    var temp;
    if ((temp = getCookie('palette')) != '') options.palette = temp;
    if ((temp = getCookie('effect')) != '') options.effect = temp;
    if ((temp = getCookie('shape')) != '') options.shape = temp;
    if ((temp = getCookie('aspectRatio')) != '') options.aspectRatio = temp;
    if ((temp = getCookie('useWebColours')) != '') options.useWebColours = temp;
    if ((temp = getCookie('useWarhammerColours')) != '') options.useWarhammerColours = temp;
    if ((temp = getCookie('useTartanColours')) != '') options.useTartanColours = temp;
    if ((temp = getCookie('customPalette')) != '') options.customPalette = temp;
    if ((temp = getCookie('useCustomPalette')) != '') options.useCustomPalette = temp;
    setOptions();
}

function setCookie(cname, cvalue, exdays ) {
    if (exdays === undefined) { exdays = 365; }
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;sameSite=strict";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setOptions() {
    document.getElementById("aspectRatio").value = options.aspectRatio;
    radioButtons = document.getElementsByName('palettegroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if (option.value == options.palette) {
            option.checked = true;
            break;
        }
    }
    radioButtons = document.getElementsByName('effectgroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if (option.value == options.effect) {
            option.checked = true;
            break;
        }
    }
    radioButtons = document.getElementsByName('shapegroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if (option.value == options.shape) {
            option.checked = true;
            break;
        }
    }   
    $('#webcols').attr('checked',(options.useWebColours == 'yes'));
    $('#whcols').attr('checked',(options.useWarhammerColours == 'yes'));
    $('#tartancols').attr('checked',(options.useTartanColours == 'yes'));
    var paletteTextarea = document.getElementById('customPalette');
    if (paletteTextarea != null) paletteTextarea.value = options.customPalette;
    if (options.useCustomPalette == 'yes' ) {
        var customPaletteCheckbox = document.getElementById('enable-cp');
        if (customPaletteCheckbox != null) customPaletteCheckbox.checked = true;
    }
}

function addCustomPalette(target) {
    let splits = /[\n,; ]+/;
    var retval = '';
    var paletteItems = options.customPalette.split(splits).map(x => x.split("=")).map(x => x.map(a => a.trim()));
    for ( var [key, val] of paletteItems )
    {
        if ( key == "" || val == "" )
            continue;
        if ( key.search("/") == -1 )
            key = "heraldic/" + key;
        if (typeof target === 'object') {
            target.append( `customPalette[${key}]`,val);
        } else {
            `&customPalette[$key]=$val`;
        }
    }
    return retval;
}




function getFormData() {
    var formData = new FormData();
    formData.append('shape',options.shape);
    formData.append('effect',options.effect);
    formData.append('palette',options.palette);
    formData.append('size',shieldSize);
    formData.append('ar',options.aspectRatio);
    if (options.useWebColours == 'yes') formData.append('webcols','yes');
    if (options.useWarhammerColours == 'yes') formData.append('whcols','yes');
    if (options.useTartanColours == 'yes') formData.append('tartancols','yes');
    if (options.useCustomPalette == 'yes' && options.customPalette != '') {
        addCustomPalette(formData);
    }
    return formData;
}

function togglePanel(name) {
    var panels = document.getElementsByClassName('panel');
    for ( var i = 0; i < panels.length; i++) {
        if (panels[i].getAttribute('id') == name) {
            if (panels[i].style.display == 'none') {
                panels[i].style.display = 'block';
            } else {
                panels[i].style.display = 'none';
            }
        } else {
            // turn off display of all others
            panels[i].style.display = 'none';
        }
    }
}

function setupSuggestion() {
    togglePanel('galleryPanel');
    var suggestion = document.getElementById('suggestion');
    if (suggestion.value == "") suggestion.innerHTML = document.getElementById('blazon').value;
}

function submitSuggestion(event) {
    var suggestion = document.getElementById('suggestion');
    if (suggestion.value == "") {
        var blazon = blazonEditor.getValue();
        if (blazon == "") {
            window.alert("Enter a blazon in the text area at the top of the page and click Draw Shield");
            event.preventDefault();
            return false;
        }
        suggestion.innerHTML = blazon;
    } // else there was already a blazon there
    cols = '';
   if (options.useWebColours == 'yes') cols += ',webcols=yes';
   if (options.useWarhammerColours == 'yes') cols += ',whcols=yes';
   if (options.useTartanColours == 'yes') cols += ',tartancols=yes';
   var suggestionOptions = document.getElementById('suggestion-options');
   suggestionOptions.value = 'shape=' + options.shape + ',effect=' + options.effect + ',palette=' + options.palette + ',ar=' + options.aspectRatio + cols;
    if (options.useCustomPalette == 'yes' && options.customPalette != '') {
        suggestionOptions.value += addCustomPalette('');
    }
    return true;
}

function saveFile(data, name = 'blazon') {
    var form = document.createElement("FORM");
    form.action = '/create/savefile.php';
    form.target = "_blank";
    form.method = "POST";
    var content = document.createElement("TEXTAREA");
    content.value = data;
    content.name = 'content';
    form.appendChild(content);
    var filename = document.createElement("TEXTBOX");
    filename.value = name;
    filename.name = 'filename';
    form.appendChild(filename);
    document.body.appendChild(form);
    form.submit();
}

function tincture_input(ev)
{
    var data_list = document.getElementById("tincture_values");
    var option = data_list.querySelector(`[value='${ev.target.value}']`);
    if ( option )
        document.getElementById("tincture_color").value = option.dataset["color"];
}

function tincture_mod(action = 'add')
{
    var current = document.getElementById("customPalette");
    if (action == 'clear') {
        current.value = '';
        setOption(null,'customPalette','')
        return;
    }
    var name_input = document.getElementById("tincture_name");
    if (name_input.value == '') return;
    var color_input = document.getElementById("tincture_color");
    var newPalette = '';
    if (current.value != '') {
        var count = 0;
        let splits = /[\n,; ]+/
        var paletteItems = current.value.split(splits).map(x => x.split("=")).map(x => x.map(a => a.trim()));
        for ( var [key, val] of paletteItems )
        {
            if ( key == "" || val == "" )
                continue;
            if ( key.search("/") == -1 )
                key = "heraldic/" + key;
            if (key == name_input.value)
                continue
            newPalette += `${key}=${val}`;
            if (count++ <= 4) {
                newPalette += ' ';
            } else {
                newPalette += "\n";
                count = 0;
            }
        }
    }
    if (action == 'add') {
        newPalette += `${name_input.value}=${color_input.value}`;
    }
    current.value = newPalette;
    name_input.value = '';
    setOption(null,'customPalette',newPalette);
}

function save_cp() {
    var current = document.getElementById("customPalette");
    saveFile(current.value,"palette");
}

function save_blazon() {
    var current = blazonEditor.getValue();
    saveFile(current,"blazon");
}


function load_cp() {
    var file = document.getElementById("paletteFile").files[0];
    if (typeof(file) == 'undefined') window.alert("Choose a local file first");
    var reader = new FileReader();
    reader.onload = function (e) {
        var current = document.getElementById("customPalette");
        current.value = e.target.result;
        setOption(null,'customPalette',current.value);
    };
    reader.readAsText(file);
}

function load_blazon() {
    var file = document.getElementById("blazonFile").files[0];
    if (typeof(file) == 'undefined') window.alert("Choose a local file first");
    var reader = new FileReader();
    reader.onload = function (e) {
        blazonEditor.setValue(data);
    };
    reader.readAsText(file);
}

 function stripComments(blazon) {
    var output = '';
    var eolComment = false;
    var inlineComment = false;
    var len = blazon.length;
    for (var i = 0; i < len; i++) {
        var next = '';
        if (i < len - 1) {
            next = blazon[i+1];
        }
        var cur = blazon[i];
        switch (cur) {
            case '#':
                eolComment = true;
                break;
            case '/':
                if (next == '/') {
                    eolComment = true;
                } else if (next == '*') {
                    inlineComment = true;
                    i++;
                }
                break;
            case "\n":
                eolComment = false;
                cur = ' ';
                break;
            case '*':
                if (next == '/') {
                    inlineComment = false;
                    cur = '';
                    i++;
                }
                break;
        }
        if (!eolComment && !inlineComment) {
            output += cur;
        }
    }
    return output;
 }

function drawshield(blazon) {
    document.getElementById(messageContainer).style.display = 'none';
    shieldCaption = document.getElementById(captiontarget);
    var formData = getFormData();
    if (blazon != null){
        blazonText = blazon;
    } else { 
        blazonText = blazonEditor.getValue();
    }
    captionText = stripComments(blazonText);
    var blazonURL = "http://" + window.location.hostname + "/create/index.html?blazon="
         + encodeURIComponent(captionText) + "&palette=" + options.palette
         + "&shape=" + options.shape + "&effect=" + options.effect + "&ar=" + options.aspectRatio +
        addCustomPalette('');
    if (captionText.length > 70) {
        captionText = captionText.substring(0,67) + '...';
    }
    shieldCaption.firstChild.nodeValue = captionText ;
    shieldCaption.setAttribute("href",blazonURL);
    document.getElementById('suggestion').innerHTML = blazonText;
    if (blazonText != '') formData.append('blazon',blazonText);
    requestFileSVG(targetURL,shieldtarget,formData,displayMessages);
}

function newTab() {
    form = document.getElementById('blazonForm');
    form.method = 'POST';
    form.action = targetURL;
    form.elements["size"].value = "1000";
    form.target = '_blank';
    form.elements["asfile"].value = '0';
    form.elements["shape"].value = options.shape;
    form.elements["effect"].value = options.effect;
    form.elements["palette"].value = options.palette;
    form.elements["ar"].value = options.aspectRatio;
    if (options.useWebColours == 'yes') form.elements["webcols"].value = "yes";
    if (options.useWarhammerColours == 'yes') form.elements["whcols"].value = "yes";
    if (options.useTartanColours == 'yes') form.elements["tartancols"].value = "yes";
    if (options.useCustomPalette == 'yes' && options.customPalette != '') addCustomPalette(form);
    window.alert("The shield will be drawn in a new tab. Please use your browser menu to print it");
    form.submit();
}


function saveshield() {
    var e =  document.getElementById("sizeInput");
    var saveWidth = parseInt(e.value);
    if (isNaN(saveWidth)) saveWidth = 1000;

    form = document.getElementById("blazonForm");
    form.action = targetURL;
    form.target = '_blank';
    form.elements["asfile"].value = '1';
    form.elements['filename'].value = document.getElementById('filenameInput').value;
    form.elements["size"].value = saveWidth;
    var e = document.getElementById("formatSelect");
    form.elements["saveformat"].value = e.options[e.selectedIndex].value;
    e = document.getElementById("unitSelect");
    form.elements["units"].value = e.options[e.selectedIndex].value;
    form.elements["asfile"].value = '1';
    form.elements["shape"].value = options.shape;
    form.elements["effect"].value = options.effect;
    form.elements["palette"].value = options.palette;
    form.elements["ar"].value = options.aspectRatio;
    if (options.useWebColours == 'yes') form.elements["webcols"].value = "yes";
    if (options.useWarhammerColours == 'yes') form.elements["whcols"].value = "yes";
    if (options.useTartanColours == 'yes') form.elements["tartancols"].value = "yes";
    if (options.useCustomPalette == 'yes' && options.customPalette != '') addCustomPalette(form);
    form.submit();
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function get_blazon() {
    return getUrlParameter('blazon');
}

function displayMessages(svg) {
    var messageText = '';
    var remarksHTML = '';
    var creditHTML = '';
    var linksHTML = '';
    var errorList = svg.getElementsByTagNameNS('*','message');
    for ( var i = 0; i < errorList.length; i++ ) {
        var errorItem = errorList[i];
        var category = errorItem.getAttribute('category');
        var context = errorItem.getAttribute('context');
        var lineno = errorItem.getAttribute('linerange');
        var message = errorItem.innerHTML;
        if (context != null) message += ' ' + context;
        if (lineno != null) message += ' near ' + lineno;
        switch (category) {
            case 'licence':
                creditHTML += "<li>" + message + "</li>"; 
                break;
            case 'links':
                linksHTML += "<li>" + message + "</li>";
                break;
            case'warning':
                remarksHTML += "<li><span style='color:orange;'>WARNING</span> " + message + "</li>";
            break;                
            case'legal':
                remarksHTML += "<li>" + message + "</li>";
                break;                
            case'alert':
                remarksHTML += "<li><span style='color:red'>" + message + "</span></li>";
                break;                
            default:
                messageText += message + ' ';
        }
    }
    if ( messageText.length > 0 ) {
        document.getElementById(messageTarget).innerHTML = messageText;
        document.getElementById('error-blazon').innerHTML = blazonEditor.getValue();
        document.getElementById(messageContainer).style.display = 'block';
    }
    if ( linksHTML.length > 0 ) {
        document.getElementById('links').innerHTML = "<h3>Dictionary Links</h3><ul>" +
            linksHTML + "</ul>";  
    }
    if ( remarksHTML.length > 0 ) {
        document.getElementById('notes').innerHTML = "<h3>Notes</h3><ul>" +
            remarksHTML + "</ul>";  
    }
    if ( creditHTML.length > 0 ) {
        document.getElementById('credits').innerHTML = "<h3>Image Credits</h3><ul>" +
            creditHTML + "</ul>";  
    }  
}

function setupshield(initial) {
    getCookies(); // do we have any saved values?
    initBlazon = "";
    shieldCaption = document.getElementById(captiontarget);
    if (typeof(initial) !== 'undefined' && initial != null && initial != '') {
        drawshield(initial);
        editorLoad = initial;
    } else {
        var formData = getFormData();
        requestFileSVG(targetURL,shieldtarget,formData,displayMessages);
    }
    blazonEditor = createEditor();
    if (editorLoad != null) { 
        blazonEditor.setValue(editorLoad);
    }
}


window.onload = setupshield(get_blazon());


