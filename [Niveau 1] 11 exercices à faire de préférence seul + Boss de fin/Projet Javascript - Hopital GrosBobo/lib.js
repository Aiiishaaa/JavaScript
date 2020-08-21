function showContent(pNumber) {
    deleteAllP(pNumber);
    var p = document.getElementById('title' + pNumber)
    p.style.display = "block";
}

function deleteAllP(pNumber) {
    hideP = document.getElementsByTagName("p");
    for (var i = 0; i < hideP.length; i++) {
        hideP.item(i).style.display = "none";
    }
}