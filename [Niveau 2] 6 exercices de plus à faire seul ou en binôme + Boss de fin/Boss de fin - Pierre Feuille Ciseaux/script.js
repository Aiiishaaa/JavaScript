const pierre = document.querySelector('#pierre'),
    feuille = document.querySelector('#feuille'),
    ciseaux = document.querySelector('#ciseaux'),

    result = document.querySelector("#result"),
    partie = document.querySelector("#partie");


const Tab = [feuille, pierre, ciseaux];

Tab.forEach((btn) => {
    btn.addEventListener("click", function() {
        jeu(this.id);
    })

})

function jeu(id) {
    let i = Math.floor(Math.random() * Tab.length),
        computer = Tab[i].id,
        player = id;

    partie.textContent = "Utilisatuer a joué : " + player + "  //   Ordinateur a joué : " + computer;

    if ((player == "ciseaux" && computer == "feuille") ||
        (player == "feuille" && computer == "pierre") ||
        (player == "pierre" && computer == "ciseaux")) {
        result.textContent = "Gagné !";
    } else if (computer == player) {
        result.textContent = "Égalité !";
    } else {
        result.textContent = "Perdu !";
    }
}