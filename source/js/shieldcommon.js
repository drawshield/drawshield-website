// Javascript shield common bits

var xmlhttp;
var useId;
var useHTMLId;
var messageCallback;


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
      if ( (navigator.userAgent.indexOf( "iPad" ) > 0) ||
                  (navigator.userAgent.indexOf( "iPod" ) > 0) ||
                  (navigator.userAgent.indexOf( "iPhone" ) > 0) 
                ) {
         var svg = document.importNode(xmlhttp.responseXML.firstChild, true);
       } else if (navigator.userAgent.indexOf('Edge') > 0){
         var svg = xmlhttp.responseXML.documentElement;
         svg = cloneAndFix(svg);
       } else {
         var svg = xmlhttp.responseXML.documentElement;
         svg = cloneToDoc(svg);
       }
       shieldImg.appendChild(svg);
       if (messageCallback != null) {
            messageCallback(xmlhttp.responseXML);
       }
    }
  }
}

function requestFileSVG(url,id,formData,messageFunc) {
  if ( messageFunc === undefined ) { messageFunc = null; }
  if (!xmlhttp) xmlhttp = new XMLHttpRequest();
  if (!xmlhttp) return;
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

function cloneAndFix(node,doc){
    var corrections = new Array (
            'attributeName',
            'attributeType',
            'baseFrequency',
            'baseProfile',
            'calcMode',
            'clipPathUnits',
            'contentScriptType',
            'contentStyleType',
            'diffuseConstant',
            'edgeMode',
            'externalResourcesRequired',
            'filterRes',
            'filterUnits',
            'glyphRef',
            'gradientTransform',
            'gradientUnits',
            'kernelMatrix',
            'kernelUnitLength',
            'keyPoints',
            'keySplines',
            'keyTimes',
            'lengthAdjust',
            'limitingConeAngle',
            'markerHeight',
            'markerUnits',
            'markerWidth',
            'maskContentUnits',
            'maskUnits',
            'numOctaves',
            'pathLength',
            'patternContentUnits',
            'patternTransform',
            'patternUnits',
            'pointsAtX',
            'pointsAtY',
            'pointsAtZ',
            'preserveAlpha',
            'preserveAspectRatio',
            'primitiveUnits',
            'refX',
            'refY',
            'repeatCount',
            'repeatDur',
            'requiredExtensions',
            'requiredFeatures',
            'specularConstant',
            'specularExponent',
            'spreadMethod',
            'startOffset',
            'stdDeviation',
            'stitchTiles',
            'surfaceScale',
            'systemLanguage',
            'tableValues',
            'targetX',
            'targetY',
            'textLength',
            'viewBox',
            'viewTarget',
            'xChannelSelector',
            'yChannelSelector',
            'zoomAndPan'
            );
  if (!doc) doc=document;
  var clone = doc.createElementNS(node.namespaceURI,node.nodeName);
  for (var i=0,len=node.attributes.length;i<len;++i){
    var a = node.attributes[i];
    if (/^xmlns\b/.test(a.nodeName)) continue; // IE can't create these
    var validName = a.localName.toLowerCase();
    for (var j=0,len2=corrections.length;j<len2;j++) {
        if (validName === corrections[j].toLowerCase()) {
            validName = corrections[j];
            break;
        }
    }
    clone.setAttributeNS(a.namespaceURI,validName,a.nodeValue);
  }
  for (var i=0,len=node.childNodes.length;i<len;++i){
    var c = node.childNodes[i];
    clone.insertBefore(
      c.nodeType===1 ? cloneAndFix(c,doc) : doc.createTextNode(c.nodeValue),
      null
    ); }
  return clone;
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

