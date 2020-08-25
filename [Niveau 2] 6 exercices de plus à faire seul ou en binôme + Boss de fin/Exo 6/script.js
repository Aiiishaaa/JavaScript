let soupe = document.querySelectorAll('.soupe p'),
    boire = document.querySelector('#boire'),
    fauteuil = document.querySelectorAll('.fauteuil p'),
    reposer = document.querySelector('#reposer'),
    lit = document.querySelectorAll('.lit p'),
    dormir = document.querySelector('#dormir');

boire.addEventListener('click', function() {
    for (let i = 0; i < soupe.length; i++) {
        soupe[i].textContent = "Bol vide"
    }
})
reposer.addEventListener('click', function() {
    for (let i = 0; i < fauteuil.length; i++) {
        fauteuil[i].textContent = "fauteuil usé"
    }
})
dormir.addEventListener('click', function() {
    for (let i = 0; i < lit.length; i++) {
        lit[i].textContent = "lit défait"
    }
})