//EventListener

$("#test").on("click", test);
//Affichage
function display(test , func , result){

    if (func === result) {
        $("<p></p>").css("color", "green").html(
            `Le test est <strong>${test}</strong>.(h , rebond , fenetre)
            <br>Le résultat attendu est <strong>${result}</strong> et votre réponse est <strong>${func}</strong>.
            <br>Le test est réussi!!`
        ).appendTo("#result");

    } else {
        $("<p></p>").css("color", "red").html(
            `Le test est <strong>${test}</strong>.
             <br>Le résultat attendu est <strong>${result}</strong> alors que votre réponse est <strong>${func}</strong>.
             <br>Le test est raté!!`
        ).appendTo("#result");
    }
}
//Fonction effectuant les tests
function test(){
    $("#result").empty();
    var tests = [
        [[3.0, 0.66, 1.5] , 3],
        [[30.0, 0.66, 1.5] , 15],
        [[30 , 0.75 , 1.5] , 21],
        [[40 , 1 , 10] , -1],
        [[5 , -1 , 1.5] , -1],
        [[25.8 , 0.6 , 2.8] , 9],
        [[19 , 0.75 , 1.9] , 17]
    ]
    for (var i = 0; i < tests.length; i++) {
        display(tests[i][0], rebond(...tests[i][0]), tests[i][1]);
    }
}
