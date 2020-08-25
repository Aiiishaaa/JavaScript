function addition(nombre) {
    var resultat = 10 + nombre;
    return ("Addition de 10 + " + nombre + " = " + resultat);
}
console.log(addition(5));



function multip(variable) {
    var resultat = 4 * variable;
    return (resultat);
}
console.log("Le résultat est", multip(2));

var f = multip(addition(2));
console.log(f);