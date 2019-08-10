function voteFor(refNum) {
    var button = document.getElementById("button-" + refNum);
    button.disabled = true;
    button.setAttribute("aria-disabled", "true");
    button.innerHTML = "Sent!";
   // window.alert("Thank you! Your vote will be validated and added to the count." );
   jQuery.get("/gallery/votefor.php?refnum=" + refNum);
}

function setBadge(badge) {
    return function(data) {
        badge.innerHTML = data;
    }
}


function fillBadges() {
    var badges = document.getElementsByClassName('votecounter');
    for ( i = 0; i < badges.length; i++ ) {
        jQuery.get("/gallery/getvotes.php?refnum=" + badges[i].dataset.num,
        setBadge(badges[i]), "text" );
    }
}

