const pierre = document.querySelector('#pierre'),
    feuille = document.querySelector('#feuille'),
    ciseaux = document.querySelector('#ciseaux'),

    result = document.querySelector("#result"),
    partie = document.querySelector("#partie"),


    Tab = [pierre, feuille, ciseaux];

Tab.forEach((btn) => {
    btn.addEventListener("click", function() {
        jeu(this.id);
    })

})

function jeu(id) {
    let i = Math.floor(Math.random() * Tab.length),
        computer = Tab[i].id,
        user = id;

    partie.textContent = "Utilisatuer a joué : " + user + "  //   Ordinateur a joué : " + computer;

    if ((user == "ciseaux" && computer == "feuille") ||
        (user == "feuille" && computer == "pierre") ||
        (user == "pierre" && computer == "ciseaux")) {
        result.textContent = "Gagné !";
    } else if (computer == user) {
        result.textContent = "Égalité !";
    } else {
        result.textContent = "Perdu !";
    }
}