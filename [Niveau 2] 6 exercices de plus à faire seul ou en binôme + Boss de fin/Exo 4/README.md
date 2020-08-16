# EXO 3 : Mixons les fonctions

Créez une fonction addition() qui cette fois ci retourne directement l'addition du nombre + 10 (si je lui donne 5 , elle doit me renvoyer 15).
Créez une deuxieme fonction qui multiplie un nombre qu'on lui donne par 4 et qui renvoie le résultat.

Faites en sorte, lors de l'appel des fonctions que lorsque je donne 15 à la fonction addition, le resultat soit donné à la fonction multiplication et que le résultat final soit affiché dans la console.

Vous pouvez passer par des variables intermédiaires mais sachez qu'un appel de fonction peut être donné en argument à une autre fonction.

exemple :

    function maFonction1(bidule) {
        //fait des trucs avec le bidule que je stocke dans un resultat
        return resultat
    }

    function maFonction2(machin) {
        //fait des trucs avec le machin que je stocke dans un resultat2

        return resultat2
    }

console.log(maFonction1(maFonction2(chose)));

Ici , ma maFonction2 est donnée en argument à maFonction1(pour être plus clair, c'est ça valeur de return qui lui sera donnée). 
