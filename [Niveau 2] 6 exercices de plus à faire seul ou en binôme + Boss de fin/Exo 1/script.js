//Les variables
//nombre
var nombre = 42;
console.log(nombre);
//tableau
var tab = [2, 5, 6, 7, 9];
console.log(tab);
//chaine de caracteres
let chaine = "Ceci est une chaine de caracteres";
console.log(chaine);
//Conditions

//if, else if ,else
if (nombre >= 50) { console.log("super moitmoit"); } else if (nombre <= 40) { console.log("peux mieux faire"); } else { console.log("la grande réponse"); }

//switch
switch (tab.length) {
    case 10:
        console.log('il y a 10 éléments dans le tableau');
        break;
    case 5:
        console.log('il y a 5 éléments dans le tableau');
        break;
    case 0:
        console.log('le tableau est vide');
        break;
    default:
        console.log('Je ne connais pas le nombre d' + 'éléments du tableau');
}

//Boucles


//while
var compteur = 0;
while (compteur < 5) {
    console.log("Messire, on en a gros");
    compteur++;
}


//for
for (compteur = 0; compteur < tab.length; compteur++) {
    console.log(tab[compteur]);
}