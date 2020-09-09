function showContent(pNumber) {
    deleteAllP(pNumber);
    hideColor(pNumber);
    let p = document.getElementById('title' + pNumber);
    let clrs = document.getElementsByClassName('clr' + pNumber)
    p.style.display = "block";

    for (var i = 0; i < clrs.length; i++) {
        clrs.item(i).style.background = " rgba(197, 17, 17, 0.7)";
    }
}

function deleteAllP(pNumber) {
    hideP = document.getElementsByTagName("p");
    for (var i = 0; i < hideP.length; i++) {
        hideP.item(i).style.display = "none";
    }
}

function hideColor(pNumber) {
    let clrs = document.getElementsByTagName("bouton");
    for (var i = 0; i < clrs.length; i++) {
        clrs.item(i).style.background = "rgba(0, 0, 0, .5)";
    }
}