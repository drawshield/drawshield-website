
var targetURL = '/include/drawshield.php';
var randomURL = '/include/randomblazon.php';
var shieldtarget = 'shieldimg';

$(document).ready(function(){
    requestSVG(targetURL,shieldtarget,null);
    $("#blazonForm").submit(function(event){
        event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var form_data = $(this).serialize(); //Encode form elements for submission
        
        $.post( post_url, form_data, function( response ) {
          $("#blazon").val( response ).attr("rows",response.split("\n").length);
          requestSVG(targetURL + "?blazon=" + encodeURI(response),shieldtarget);
        });
    });
});

function selectAll(){
    $("[type=checkbox]").each(function(){this.checked=true;})
    $("[type=range]").each(function(){this.attr("value","100");});
}

function clearAll(){
    $("[type=checkbox]").each(function(){this.checked=false;})
    $("[type=range]").each(function(){this.attr("value","0");});
}

function defaults(){
    $("[type=checkbox]").each(function(){this.checked=true;})
    $("#tinc-modern").prop('checked','false');
    $("[type=range]").each(function(){this.attr("value","60");});
    $(".loc-chance").attr('value',"10")
}

function transfer(event){
    window.location.href="/create/index.html?blazon=" + encodeURI($("#blazon").val());
}

