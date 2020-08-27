function afficherMsg1() {
    alert(' Hello World');
}


function afficherMsg2() {
    var valeur = prompt(" Saisissez votre nom :");
    if (confirm("Vous vous appelez vraiment " + valeur)) {
        alert(" Bonjour " + valeur);
    }
}