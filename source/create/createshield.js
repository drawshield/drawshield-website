var shieldSize = 500;
var shieldtarget = 'shieldimg';
var captiontarget = 'shieldcaption';
var tabletarget = 'errorMessages';
var targetURL = '/include/drawshield.php';
var messageContainer = 'messageDiv';
var messageTarget = 'messageList'
var optionsLoaded = false;
var partsLoaded = false;
var uploadedFile = null;
//////////// OPTION HANDLING ///////////////////
// The options, default values for first time visit
var saveWidth = "1000";
var palette = 'drawshield';
var effect = 'shiny';
var shape = 'heater';
var saveFormat = 'png';
var aspectRatio = '0.5';
var useEditor = 'yes';
var editorLoad = null;
var blazonEditor;

function setCookies() {
    setCookie('palette',palette);
    setCookie('effect',effect);
    setCookie('shape',shape);
    setCookie('saveWidth',saveWidth);
    setCookie('saveFormat',saveFormat);
    setCookie('aspectRatio',aspectRatio);
}

function getCookies() { // override defaults if cookies are set
    var temp;
    if ((temp = getCookie('palette')) != '') palette = temp;
    if ((temp = getCookie('effect')) != '') effect = temp;
    if ((temp = getCookie('shape')) != '') shape = temp;
    if ((temp = getCookie('saveWidth')) != '') saveWidth = temp;
    if ((temp = getCookie('saveFormat')) != '') saveFormat = temp;
    if ((temp = getCookie('aspectRatio')) != '') aspectRatio = temp;
    if ((temp = getCookie('useEditor')) != '') useEditor = temp;
}

function setCookie(cname, cvalue, exdays ) {
    if (exdays === undefined) { exdays = 365; }
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function growTextArea()
{
  if ( useEditor == 'yes') return; // let codeMirror do the sizing
//   textLines = (blazonEditor.value.match(/\n/g)||[]).length;
//   currentLines = blazonEditor.getAttribute('rows');
//   if  (currentLines < textLines) {
//       blazonEditor.setAttribute('rows',textLines + 1);
//   }
  if (blazonEditor.clientHeight < blazonEditor.scrollHeight)
  {
    blazonEditor.style.height = blazonEditor.scrollHeight + "px";
    if (blazonEditor.clientHeight < blazonEditor.scrollHeight)
    {
      blazonEditor.style.height = 
        (blazonEditor.scrollHeight * 2 - blazonEditor.clientHeight) + "px";
    }
  }
}

function switchEditor() {
    useEditor = (document.getElementById('use-editor').checked == true) ? 'yes' : 'no';
    setCookie('useEditor',useEditor);
    content = '';
    if (useEditor == 'yes') {
        blazonEditor.onkeyup = null;
        blazonEditor = createEditor();
    } else {
        if (typeof(blazonEditor.getWrapperElement) == 'function') {
            content = blazonEditor.getValue();
            editor =  blazonEditor.getWrapperElement();
            editor.parentNode.removeChild(editor);
            buttons = document.getElementsByClassName('CodeMirror-buttonsPanel');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].parentNode.removeChild(buttons[i]);
            }
        }
        blazonEditor = document.getElementById('blazon');
        blazonEditor.setAttribute('style','');
        blazonEditor.value = content;
        blazonEditor.onkeyup = growTextArea;
        growTextArea();
    }
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
    document.getElementById("sizeInput").value = saveWidth;
    document.getElementById("aspectRatio").value = aspectRatio;
    switch ( saveFormat ) {
        case 'svg': 
            document.getElementById("formatSelect").selectedIndex = 2;
            break;
        case 'jpg': 
            document.getElementById("formatSelect").selectedIndex = 1;
            break;
        case 'png': 
            document.getElementById("formatSelect").selectedIndex = 0;
            break;
    }
    radioButtons = document.getElementsByName('palettegroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if (option.value == palette) {
            option.checked = true;
            break;
        }
    }
    radioButtons = document.getElementsByName('effectgroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if (option.value == effect) {
            option.checked = true;
            break;
        }
    }
    radioButtons = document.getElementsByName('shapegroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if (option.value == shape) {
            option.checked = true;
            break;
        }
    }   
    $('#use-editor').attr('checked',(useEditor == 'yes'));
}

function toggleDrawOptions() { // load or unload the options panel
    if (!optionsLoaded) {
        jQuery('#optionsPanel').load("/create/drawing-options.html", setOptions);
        optionsLoaded = true; // set as per current option values
    }
    togglePanel('optionsPanel');
}


function readOptions() {

    if (!optionsLoaded) return;
    // only look for things if the options panel has been loaded

    var e = document.getElementById("formatSelect");
    saveFormat = e.options[e.selectedIndex].value;

    e = document.getElementById("sizeInput");
    temp = parseInt(e.value);
    if (temp < 100) {
        temp = 100;
        e.value = "100";
    } else if (temp > 2500) {
        temp = 2500;
        e.value = "2500";
    }
    saveWidth = temp.toString();
    aspectRatio = document.getElementById("aspectRatio").value;

    radioButtons = document.getElementsByName('palettegroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if ( option.checked ) {
            palette = option.value;
            break;
        }
    }

    radioButtons = document.getElementsByName('effectgroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if ( option.checked ) {
            effect = option.value;
            break;
        }
    }

    radioButtons = document.getElementsByName('shapegroup');
    for ( i = 0; i < radioButtons.length; i++ ) {
        option = radioButtons[i];
        if ( option.checked ) {
            shape = option.value;
            break;
        }
    }
    // These are only set if the options panel has been loaded
    setCookies();
}

function getFormData() {
    readOptions();
    var formData = new FormData();
    formData.append('shape',shape);
    formData.append('effect',effect);
    formData.append('palette',palette);
    formData.append('size',shieldSize);
    formData.append('ar',aspectRatio);
   // formData.append('useEditor',useEditor); // not needed on server
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
    document.getElementById('suggestion-options').value = 'shape=' + shape + ',effect=' + effect + ',palette=' + palette + ',ar=' + aspectRatio;
    return true;
}

function clearFile(event) {
    document.getElementById('blazonInputFile').value = null;  
}

function getFile() {
    var fileSelect = document.getElementById('blazonInputFile');
    if (fileSelect.files.length == 0) return;
    uploadedFile = fileSelect.files[0];
    if ( !uploadedFile.type.match('text/plain')) {
        alert('Only text files supported');
        return false;
    }
    if ( uploadedFile.size >= 1000000 ) {
        alert('File must be smaller than 1Mb');
        return false;
    }
    return uploadedFile;
}

function drawFile() {
    var uploadedFile = getFile();
    if (uploadedFile) {
        readOptions(); // in case any have changed
        var formData = getFormData();
        formData.append('blazonfile', uploadedFile, uploadedFile.name);
        document.getElementById(messageContainer).style.display = 'none';
        shieldCaption = document.getElementById(captiontarget);
        shieldCaption.firstChild.nodeValue = "Uploaded file - " + uploadedFile.name;
        baseURL = "http://" + window.location.hostname + "/create/index.html"
        shieldCaption.setAttribute("href",baseURL);
        document.getElementById('suggestion').innerHTML = "Please e-mail your file or copy the contents into the textarea";
        requestFileSVG(targetURL,shieldtarget,formData,displayMessages);
    }
}

function saveBlazon(data) {
    var form = document.createElement("FORM");
    form.action = '/include/saveblazon.php';
    form.target = "_blank";
    form.method = "POST";
    var blazon = document.createElement("TEXTAREA");
    blazon.value = data;
    blazon.name = "blazon";
    form.appendChild(blazon);
    document.body.appendChild(form);
    form.submit();
}

function loadEditor(data) {
    if (useEditor == 'yes')
        blazonEditor.setValue(data);
    else
        blazonEditor.value = data;
    clearFile();
}

function uploadFile() {
    var uploadedFile = getFile();
    if (uploadedFile) {
        var formData = new FormData();
        formData.append('blazonfile', uploadedFile, uploadedFile.name);
        jQuery.ajax({
            url: '/include/reflectfile.php',
            data: formData,
            success: loadEditor,
            processData: false,
            contentType: false,
            type: 'POST'
        });
    }
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
    uploadedFile = null;
    clearFile();
    document.getElementById(messageContainer).style.display = 'none';
    shieldCaption = document.getElementById(captiontarget);
    readOptions(); // in case any have changed
    var formData = getFormData();
    if (blazon != null){
        blazonText = blazon;
    } else { 
        if (useEditor == 'yes')
            blazonText = blazonEditor.getValue();
        else
            blazonText = blazonEditor.value;
    }
    captionText = stripComments(blazonText);
    var blazonURL = "http://" + window.location.hostname + "/create/index.html?blazon="
         + encodeURIComponent(captionText) + "&palette=" + palette
         + "&shape=" + shape + "&effect=" + effect + "&ar=" + aspectRatio;
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
    readOptions(); // in case any have changed
    form = document.forms[0];
    form.method = 'POST';
    form.action = targetURL;
    form.elements["size"].value = "1000";
    form.target = '_blank';
    form.elements["asfile"].value = '0';
    form.elements["shape"].value = shape;
    form.elements["effect"].value = effect;
    form.elements["palette"].value = palette;
    form.elements["ar"].value = aspectRatio;
    window.alert("The shield will be drawn in a new tab. Please use your browser menu to print it");
    form.submit();
}


function saveshield(e) {
    readOptions(); // in case any have changed
    if(e.shiftKey) {   // only works with text input
        stage = 'parser';
        switch(saveFormat) {
            case 'jpg': 
                stage = 'references';
                break;
            case 'svg':
                stage = 'links';
                break;
        }
        window.open( targetURL + '?stage=' + stage + '&blazon=' + encodeURIComponent(blazonEditor.getValue()));
    } else { // normal file save
        form = document.forms[0];
        form.action = targetURL;
        form.target = '_blank';
        form.elements["asfile"].value = '1';
        form.elements["size"].value = saveWidth;
        form.elements["saveformat"].value = saveFormat;
        form.elements["asfile"].value = '1';
        form.elements["shape"].value = shape;
        form.elements["effect"].value = effect;
        form.elements["palette"].value = palette;
        form.elements["ar"].value = aspectRatio;
        form.submit();
    }
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
    if (typeof(initial) !== 'undefined' && initial != null) {
        drawshield(initial);
        editorLoad = initial;
    } else {
        var formData = getFormData();
        requestFileSVG(targetURL,shieldtarget,formData,displayMessages);
//        shieldCaption.firstChild.nodeValue = "Your shield here";
    }
    if (useEditor == 'yes'){
        blazonEditor = createEditor();
    } else{
        blazonEditor = document.getElementById('blazon');
        blazonEditor.onkeyup = growTextArea;
        growTextArea();
    }
    if (editorLoad != null) { 
        loadEditor(editorLoad);
    }
    document.getElementById("suggestButton").addEventListener("click",submitSuggestion);
}


window.onload = setupshield(get_blazon());

