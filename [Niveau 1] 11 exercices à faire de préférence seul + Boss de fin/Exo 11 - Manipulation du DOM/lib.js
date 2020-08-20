// afficher le contenu du div correspondant au titre sur lequel on clique
function showHxContent(pNumber) {
    vDiv = document.getElementById("title" + pNumber);
    vDiv.style.display = "block";
}
//  masquer le contenu de tous les div du document 
function hideAllDivs() {
    vDivs = document.getElementsByTagName("div");
    for (var i = 0; i < vDivs.length; i++) {
        vDivs.item(i).style.display = "none";
    }
}

// afficher (avec la fonction JavaScript alert) le contenu du énième titre
//défini par le champ de saisie title.
function alertTitle() {
    vHx = document.getElementsByTagName("h1");
    vIndice = document.getElementById("title").value;
    vIndice = vIndice - 1;
    alert(vHx[vIndice].innerHTML);
}

// effacer le contenu du titre défini par le champ title.
// (suppression du nœud fils de type texte)

function deleteTitle() {
    vHx = document.getElementsByTagName('h1');
    vIndice = document.getElementById('title').value;
    vIndice = vIndice - 1;
    vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
}

//affecter le contenu du titre défini par le champ title avec la valeur "Nouveau titre".
// On testera que le titre a ou non déjà une valeur (nœud texte) avant l'ajout, afin de la supprimer si besoin.

function defineTitle() {

    vHx = document.getElementsByTagName("h1");
    vIndice = document.getElementById("title").value;
    vText = document.createTextNode("Nouveau titre");
    vIndice = vIndice - 1;
    if (vHx.item(vIndice).firstChild !== null) {
        vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
    }
    vHx.item(vIndice).appendChild(vText);
}