// voici la liste de votre équipement
var casque = false;
var epee = true;
var bouclier = false;
var gloire = false;
//true = possédé ; false = non possédé ... vous commencez donc ici avec une épée


//Premier boss
//si votre personnage possède une épée ou un bouclier, il arrive à vaicre ce boss
console.log("Premier boss : le dragon d' OR")
if (   ) { //Ecrivez entre les parenthèses les tests correspondants
    console.log("Victoire ! vous avez obtenu un bouclier");
    bouclier = true;
} else {
    console.log("echec, vous perdez votre epée");
    epee = false;
}
//Deuxième boss
console.log("Deuxième boss : Le magicien ANDNOT")
//si votre personnage possède un bouclier et qu'il n'a pas de casque, il arrive à vaincre ce boss
if (   ) { //Ecrivez entre les parenthèses les tests correspondants
    console.log("Victoire ! vous avez obtenu un casque");
    casque = true;
} else {
    console.log("echec, vous trouvez tout de même un bouclier");
    bouclier = true;
}

//Dernier boss : la gloire à portée de main
console.log("Dernier boss : Le dieu très très ancien POLYAND le terrible")
//si votre personnage possède :
//un casque ET une épée ET un bouclier : il tue le boss et obtient la gloire éternelle.
//sinon s'il n'a qu'un bouclier : il résiste mais n'arrive pas à le tuer
if (   ) { //Ecrivez entre les parenthèses les tests correspondants
    console.log("Victoire ! Vous avez terminé le donjon ! A vous les loot et la gloire");
    gloire = true;
} else if(   ) { //Ecrivez entre les parenthèses les tests correspondants
    console.log("echec, vous resistez aux assauts du boss mais vous n'arrivez pas à le tuer");
}

//Epilogue

if (gloire) {
    console.log("Vous avez réussi, vous êtes couvert de gloire, vivement la sortie du prochain raid");

} else {
    console.log("Vous rentrez à la maison...Les aventures ne sont pas faites pour vous");
}
