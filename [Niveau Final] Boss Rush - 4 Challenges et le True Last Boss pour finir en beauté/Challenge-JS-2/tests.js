//fonction générale

$("#test").on("click", test);

function display(test , func , result){

    if (func === result) {
        $("<p></p>").css("color", "green").html(
            `Le test est <strong>${test}</strong>.
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

function test(){
    $("#result").empty();
    var tests = [
        [[ "AS", "3S",  "9S", "KS", "4S" ],  true  ],
        [[  "AD", "4S",  "7H", "KC", "5S" ], false ],
        [[  "AD", "4S", "10H", "KC", "5S" ], false ],
        [[  "QD", "4D", "10D", "KD", "5D" ], true  ],
        [[ "10D", "4D",  "QD", "KD", "5D" ], true  ]
    ]
    for (var i = 0; i < tests.length; i++) {
        display(tests[i][0], couleur(tests[i][0]), tests[i][1]);
    }
}
