Manipulation du DOM en Javascript

Consignes : En vous appuyant sur le code html fourni dans le fichier index.html, vous allez créer un fichier lib.js dans lequel vous répondrez aux questions suivantes.
Des indices vous sont proposés pour vous permettre de comprendre comment fonctionne la manipulation du DOM en Javascript.
Vous pouvez vous servir de ces indices comme base ou bien rédiger intégralement votre propre code.

1) Écrire la fonction JavaScript showHxContent permettant d'afficher le contenu du div correspondant au titre sur lequel on clique.

Indice : 
function showHxContent (pNumber) {
	vDiv = document.getElementById(...);
	vDiv.style.display = "...";
}


2) Écrire la fonction JavaScript hideAllDivs permettant de masquer le contenu de tous les div du document.

Indice :
function hideAllDivs () {
	vDivs = document.getElementsByTagName(...);
	for (var i=0; i<vDivs...; i++) {
		vDivs.item(i)...;
	}
}


3) Écrire la fonction alertTitle permettant d'afficher (avec la fonction JavaScript alert) le contenu du énième titre, défini par le champ de saisie title.

Indice : 
function alertTitle () {
	vHx = document.getElementsByTagName(...);
	vIndice = document.getElementById(...).value;
	vIndice = vIndice - 1;
	alert(...);
}

4) Écrire la fonction deleteTitle permettant d'effacer le contenu du titre défini par le champ title. (suppression du nœud fils de type texte)

Indice :
function deleteTitle () {
	...
	vHx.item(vIndice).removeChild(...);
}

5) Écrire la fonction defineTitle permettant d'affecter le contenu du titre défini par le champ title avec la valeur "Nouveau titre". On testera que le titre a ou non déjà une valeur (nœud texte) avant l'ajout, afin de la supprimer si besoin.

Indice : 
function defineTitle () {
	...
	vText = document.createTextNode(...);
	if (vHx.item(vIndice)...) {
		...
	}
	vHx.item(vIndice).appendChild(...);
}