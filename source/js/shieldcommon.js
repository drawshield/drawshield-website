﻿// Javascript shield common bits

var xmlhttp;
var useId;
var useHTMLId;
var messageCallback;
var lastsvg = null;
var usePanZoom = true;


function updateHTML() {
	if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
    var item = document.getElementById(useHTMLId);
    while ( item.hasChildNodes() ) {
      item.removeChild(item.firstChild);
    }
    if ( xmlhttp.responseXML == null ) {
      errorText = document.createTextNode(xmlhttp.responseText);
      errorPara = document.createElement('p');
      errorPara.appendChild(errorText);
      item.insertBefore(errorPara,null);
    } else {
      item.innerHTML = xmlhttp.responseText;
    }
  }
}

function updateSVG() {
	if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
    var shieldImg = document.getElementById(useId);
    while ( shieldImg.hasChildNodes() ) {
      shieldImg.removeChild(shieldImg.firstChild);
    }
    if ( xmlhttp.responseXML == null ) {
      errorText = document.createTextNode(xmlhttp.responseText);
      errorPara = document.createElement('p');
      errorPara.appendChild(errorText);
      shieldImg.insertBefore(errorPara,null);
    } else {
      if (lastsvg != null) {
        svgPanZoom(lastsvg).destroy();
      }
      if ( (navigator.userAgent.indexOf( "iPad" ) > 0) ||
                  (navigator.userAgent.indexOf( "iPod" ) > 0) ||
                  (navigator.userAgent.indexOf( "iPhone" ) > 0) 
                ) {
         var svg = document.importNode(xmlhttp.responseXML.firstChild, true);
       } else if (navigator.userAgent.indexOf('Edge') > 0){
         var svg = xmlhttp.responseXML.documentElement;
         svg = cloneToDoc(svg);
         // pan zoom doesn't work in Edge
       } else {
         var svg = xmlhttp.responseXML.documentElement;
         svg = cloneToDoc(svg);
       }
       shieldImg.appendChild(svg);
       if (usePanZoom && typeof(svgPanZoom) != 'undefined') {
        var lastsvg = svgPanZoom(svg, {
          minZoom: 1.0,
          maxZoom: 10,
          controlIconsEnabled: true,
        });
      }
       if (messageCallback != null) {
            messageCallback(xmlhttp.responseXML);
       }
    }
  }
}

function requestFileSVG(url,id,formData,messageFunc, setPanZoom = true) {
  if ( messageFunc === undefined ) { messageFunc = null; }
  if (!xmlhttp) xmlhttp = new XMLHttpRequest();
  if (!xmlhttp) return;
  usePanZoom = setPanZoom;
  useId = id;
  messageCallback = messageFunc;
  xmlhttp.open('POST', url, true);
  xmlhttp.onreadystatechange = updateSVG;
  xmlhttp.send(formData);  
}


function requestHTML(url,id) {
  if (!xmlhttp) xmlhttp = new XMLHttpRequest();
  if (!xmlhttp) return;
  useHTMLId = id;
  xmlhttp.open('GET', url);
  xmlhttp.onreadystatechange = updateHTML;
  xmlhttp.send(null);
}

function requestSVG(url,id,messageFunc) {
  if ( messageFunc === undefined ) { messageFunc = null; }
  if (!xmlhttp) xmlhttp = new XMLHttpRequest();
  if (!xmlhttp) return;
  useId = id;
  messageCallback = messageFunc;
  xmlhttp.open('GET', url);
  xmlhttp.onreadystatechange = updateSVG;
  xmlhttp.send(null);
}

function addLink(text) {
  var start = text.search(/https?:/);
  var end = text.length;
  if (start >= 0) {
      for (var i = start + 4; i < end; i++) {
          if (text.charAt(i) == ' ') {
              end = i;
              break;
          }
      }
      var url = text.substring(start,end);
      var modText = text.substring(0,start);
      modText += '<a href="' + url + '">' + url + '</a>';
      modText += text.substring(end,text.length);
      return modText;
  } // else
  return text;
}


function displayCredits(svg) {
    var creditHTML = '';
    var errorList = svg.getElementsByTagNameNS('*','message');
    for ( var i = 0; i < errorList.length; i++ ) {
        var errorItem = errorList[i];
        var message = errorItem.innerHTML;
        var errorItem = errorList[i];
        var category = errorItem.getAttribute('category');
        if (category == 'licence') {
            creditHTML += "<li>" + addLink(message) + "</li>"; 
        }
    }
    if ( creditHTML.length > 0 ) {
        document.getElementById('credits').innerHTML = "<h3>Image Credits</h3><ul>" +
            creditHTML + "</ul>";  
    }  
}


// Function provided by http://stackoverflow.com/users/405017/phrogz
function cloneToDoc(node,doc){
  if (!doc) doc=document;
  var clone = doc.createElementNS(node.namespaceURI,node.nodeName);
  for (var i=0,len=node.attributes.length;i<len;++i){
    var a = node.attributes[i];
    if (/^xmlns\b/.test(a.nodeName)) continue; // IE can't create these
    clone.setAttributeNS(a.namespaceURI,a.nodeName,a.nodeValue);
  }
  for (var i=0,len=node.childNodes.length;i<len;++i){
    var c = node.childNodes[i];
    clone.insertBefore(
      c.nodeType===1 ? cloneToDoc(c,doc) : doc.createTextNode(c.nodeValue),
      null
    ); }
  return clone;
}

