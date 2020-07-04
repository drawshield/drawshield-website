var shieldSize = 500;
var shieldtarget = 'shieldimg';
var captiontarget = 'shieldcaption';
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
var aspectRatio = '0.5';
var useEditor = 'yes';
var useZoom = 'yes';
var editorLoad = "\n\n\n";
var blazonEditor;
var useWebColours = 'no';
var useWarhammerColours = 'no';
var useTartanColours = 'no';
// Local functions - memory handling
var memState = 'NON';
var useMemories = true;

function setMemories() {
    jQuery(".memNumber").each(function(index,value) {
        var key = $(this).attr("id");
        var content = localStorage.getItem(key);
        if (content) {
           jQuery("#" + key).removeClass('btn-light').addClass('btn-secondary');
           jQuery('#' + key).attr("data-content", popoverText(content));
        }
    });
}

function memButton(but) {
    // What is the current button state?
    if (jQuery('#button' + but).hasClass('btn-secondary')) { // already pressed
        memState = 'NON';
        jQuery('#button' + but).removeClass('btn-secondary').addClass('btn-light');
    } else { //  Button not pressed, reset others
        jQuery('.memButton').each(function(index,value) {
            $(this).removeClass('btn-secondary').addClass('btn-light');
        });
        // Set this one
        jQuery('#button' + but).removeClass('btn-light').addClass('btn-secondary');
        memState = but;
    }
}

function popoverText(data) {
    var popover = decodeURI(data).trim().substring(0,90);
    popover = popover.replace(/(\r\n|\n|\r)/gm, " ");
    if (data.trim().length > 90) {
        popover = popover + "...";
    }   
    return popover;
}

function memNumber(key) {
    var data = "";
    switch(memState) {
        case 'NON':
            break; // No action set
        case 'STO':
            data = saveEditor();
            if (key != "memory00" && data.trim().length > 0) {
                localStorage.setItem(key, encodeURI(data));
                jQuery('#' + key).removeClass('btn-light').addClass('btn-secondary');
                jQuery('#' + key).attr("data-content", popoverText(data));
            }
            break;
        case 'RCL':
            data = localStorage.getItem(key);
            if (data) {
                if (key != "memory00") {
                    localStorage.setItem("memory00", encodeURI(saveEditor()));
                    jQuery("#memory00").removeClass('btn-light').addClass('btn-secondary');
                }
                loadEditor(decodeURI(data));
            }
            break;
        case 'CLR':
            localStorage.removeItem(key);
            jQuery('#' + key).removeClass('btn-secondary').addClass('btn-light');
            jQuery('#' + key).attr("data-content", "");
            break;
    }
    // now reset all the button states
    jQuery('.memButton').each(function(index,value) {
        $(this).removeClass('btn-secondary').addClass('btn-light');
    });    
}

function saveToFile() {
    if (!useMemories) {
        saveBlazon(saveEditor());
        return;
    }
    var data = new Array();
	localStorage.setItem("memory00", encodeURI(saveEditor()));
    jQuery(".memNumber").each(function(index,value) {
        key = $(this).attr("id");
        content = localStorage.getItem(key);
        if (content) {
           data.push({key: key, value: String(decodeURI(content))});
        }
    });
    if (!data.length) { // nothing in the memories,just save editor content as text
        saveBlazon(saveEditor());
    } else {
        saveBlazon(JSON.stringify(data));
    }
}

function setCookies() {
    setCookie('palette',palette);
    setCookie('effect',effect);
    setCookie('shape',shape);
    setCookie('saveWidth',saveWidth);
    setCookie('aspectRatio',aspectRatio);
    setCookie('useEditor',useEditor);
    setCookie('useZoom',useZoom);
    setCookie('useWebColours',useWebColours);
    setCookie('useWarhammerColours',useWarhammerColours);
}

function getCookies() { // override defaults if cookies are set
    var temp;
    if ((temp = getCookie('palette')) != '') palette = temp;
    if ((temp = getCookie('effect')) != '') effect = temp;
    if ((temp = getCookie('shape')) != '') shape = temp;
    if ((temp = getCookie('saveWidth')) != '') saveWidth = temp;
    if ((temp = getCookie('aspectRatio')) != '') aspectRatio = temp;
    if ((temp = getCookie('useEditor')) != '') useEditor = temp;
    if ((temp = getCookie('useZoom')) != '') useZoom = temp;
    if ((temp = getCookie('useWebColours')) != '') useWebColours = temp;
    if ((temp = getCookie('useWarhammerColours')) != '') useWarhammerColours = temp;
    if ((temp = getCookie('useTartanColours')) != '') useTartanColours = temp;
}

function setCookie(cname, cvalue, exdays ) {
    if (exdays === undefined) { exdays = 365; }
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function toggleWebColours() {
    if (useWebColours == 'yes')
        useWebColours = 'no';
    else
        useWebColours = 'yes;'
}

function toggleWarhammerColours() {
    if (useWarhammerColours == 'yes')
        useWarhammerColours = 'no';
    else
        useWarhammerColours = 'yes;'
}


function toggleTartanColours() {
    if (useTartanColours == 'yes')
        useTartanColours = 'no';
    else
        useTartanColours = 'yes;'
}


function switchEditor() {
    useEditor = (document.getElementById('use-editor').checked == true) ? 'yes' : 'no';
    setCookie('useEditor',useEditor);
    content = '';
    if (useEditor == 'yes') {
        jQuery('.editorButtons').show();
        blazonEditor = createEditor();
    } else {
        if (typeof(blazonEditor.getWrapperElement) == 'function') {
            content = blazonEditor.getValue();
            editor =  blazonEditor.getWrapperElement();
            editor.parentNode.removeChild(editor);
        }
        jQuery('.editorButtons').hide();
        blazonEditor = document.getElementById('blazon');
        blazonEditor.setAttribute('style','');
        blazonEditor.value = content;
    }
}

function switchZoom() {
    useZoom = (document.getElementById('use-zoom').checked == true) ? 'yes' : 'no';
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
    $('#use-zoom').attr('checked',(useZoom == 'yes'));
    $('#webcols').attr('checked',(useWebColours == 'yes'));
    $('#whcols').attr('checked',(useWarhammerColours == 'yes'));
    $('#tartancols').attr('checked',(useTartanColours == 'yes'));
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

    var e =  document.getElementById("sizeInput");
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
    useWebColours = (document.getElementById('webcols').checked) ? 'yes' : 'no';
    useWarhammerColours = (document.getElementById('whcols').checked) ? 'yes' : 'no';
    useTartanColours = (document.getElementById('tartancols').checked) ? 'yes' : 'no';
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
    if (useWebColours == 'yes') formData.append('webcols','yes');
    if (useWarhammerColours == 'yes') formData.append('whcols','yes');
    if (useTartanColours == 'yes') formData.append('tartancols','yes');
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
   if (useWebColours == 'yes') cols += ',webcols=1';
   if (useWarhammerColours == 'yes') cols += ',whcols=1';
   if (useTartanColours == 'yes') cols += ',tartancols=1';
    document.getElementById('suggestion-options').value = 'shape=' + shape + ',effect=' + effect + ',palette=' + palette + ',ar=' + aspectRatio + cols;
    return true;
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
    // clearFile();
}

function saveEditor() {
    var data = "";
    if (useEditor == 'yes')
        data = blazonEditor.getValue();
    else
        data = blazonEditor.value;
    return String(data);
}

function processFile(fileContent) {
	if (fileContent.substring(0,1) == '[' ) { // looks like JSON
		content = JSON.parse(fileContent);
		for (var i = 0; i < content.length; i++) {
			var item = content[i];
			var key = item.key;
			var value = item.value;
			if (key.substring(0,6) == "memory") { // looks legit
				if (key == "memory00" && value) {
					loadEditor(value);
				} else {
                    if (useMemories) {
                        localStorage.setItem(key,value);
                        jQuery('#' + key).attr("data-content", popoverText(decodeURI(value)));
                    }
				}
			}
		}
		setMemories();	
	} else { // Treat as a simple string
		loadEditor(fileContent);
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
    // if we come here because there is a blazon in the URL, we don't need to store
    // the existing blazon as there isn't one. At this point, blazonEditor is
    // not defined, but will be created later and populated with the URL blazon
    if (typeof(blazonEditor) !== 'undefined' && useMemories) {
        localStorage.setItem("memory00", encodeURI(saveEditor()));
        jQuery("#memory00").removeClass('btn-light').addClass('btn-secondary');
    }
//    clearFile();
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
    if (useWebColours == 'yes') form.elements["webcols"].value = "yes";
    if (useWarhammerColours == 'yes') form.elements["whcols"].value = "yes";
    if (useTartanColours == 'yes') form.elements["tartancols"].value = "yes";
    window.alert("The shield will be drawn in a new tab. Please use your browser menu to print it");
    form.submit();
}


function saveshield() {
    readOptions(); // in case any have changed
    form = document.forms[0];
    form.action = targetURL;
    form.target = '_blank';
    form.elements["asfile"].value = '1';
    form.elements['filename'].value = document.getElementById('filenameInput').value;
    form.elements["size"].value = saveWidth;
    var e = document.getElementById("formatSelect");
    form.elements["saveformat"].value = e.options[e.selectedIndex].value;
    form.elements["asfile"].value = '1';
    form.elements["shape"].value = shape;
    form.elements["effect"].value = effect;
    form.elements["palette"].value = palette;
    form.elements["ar"].value = aspectRatio;
    if (useWebColours == 'yes') form.elements["webcols"].value = "yes";
    if (useWarhammerColours == 'yes') form.elements["whcols"].value = "yes";
    if (useTartanColours == 'yes') form.elements["tartancols"].value = "yes";
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

function loadLocalFile() {
    var file = document.getElementById("localFile").files[0];
    if (typeof(file) == 'undefined') window.alert("Choose a local file first");
    var reader = new FileReader();
    reader.onload = function (e) {
        processFile(e.target.result);
        jQuery('#uploadControls').hide();
    };
    reader.readAsText(file);
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
        if (useEditor == 'yes') {
            document.getElementById('error-blazon').innerHTML = blazonEditor.getValue();
        } else {
            document.getElementById('error-blazon').innerHTML = blazonEditor.value;
        }
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
//        shieldCaption.firstChild.nodeValue = "Your shield here";
    }
    if (useEditor == 'yes'){
        blazonEditor = createEditor();
    } else {
        blazonEditor = document.getElementById('blazon');
        jQuery('.editorButtons').hide();
    }
    if (editorLoad != null) { 
        loadEditor(editorLoad);
    }
    document.getElementById("suggestButton").addEventListener("click",submitSuggestion);
    if (typeof(window.localStorage) == 'undefined') {
        useMemories = false;
        jQuery('#memoryButtons').hide();
    } else {
        setMemories();
        $('.memNumber').popover();
    }
}


window.onload = setupshield(get_blazon());


