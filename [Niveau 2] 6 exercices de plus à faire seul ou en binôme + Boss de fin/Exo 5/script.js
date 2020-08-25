function recuperation(id) {
    return (document.getElementById(id));
}

function eliminer(arg1) {
    arg1.textContent = " Je suis un poisson mort";
}
eliminer(recuperation("poisson1"));