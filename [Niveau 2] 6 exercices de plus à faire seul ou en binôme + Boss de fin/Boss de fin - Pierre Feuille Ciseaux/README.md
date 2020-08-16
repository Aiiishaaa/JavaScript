# Exo pierre feuille ciseaux (par étapes)

Vous devez réaliser un jeu à partir de 3 boutons : Pierre , Feuille , Ciseaux.

Pour cela, vous devrez :

    -faire en sorte qu'en cliquant sur un bouton pierre, feuille ou ciseaux, Votre choix soit récupéré par javascript

    -Faire choisir à javascript au hasard pierre, feuille ou Ciseaux

    -Comparer le choix de l'ordi avec le Votre

    -Afficher le résultat de ce test : gagné, perdu ou égalité
    

****************************************************************
# Pas à pas

Fonctionnement(algorithme)


-Click sur un bouton(pierre feuille ou ciseaux):

    -Lancer une fonction qui effectue les traitement suivants :

        -Stocker la valeur de l'élément cliqué

        -Choisir aléatoirement un élément pour l'ordinateur

        -Si le choix de l'utilisateur est le même que l'ordinateur

            -alors stocker le résultat "Egalité" dans une variable

        -Sinon si le joueur a choisi un élément qui l'emporte sur le choix de l'ordinateur

                -alors stocker le résultat "Gagné" dans une variable

        -Sinon stocker le résultat "Perdu" dans une variable

        -Afficher le choix de l'ordinateur et celui du joueur dans l'élément à l'id partie

        -Afficher le résultat dans l'élément à l'id result


# Mini exercice 1 : Récupérer un élément html et accéder à une partie de son contenu

1. Récupérez les différents boutons dans des Variables
2. Affichez dans le h2 à l'id result, l'id du bouton cliqué(ne servira pas à la fin, sert juste à la compréhension)
--------------------------------
# Mini exercice 2 : Stocker des éléments dans un tableau

1. Maintenant que vous avez les différentes variables, créez une nouvelle variable qui sera un tableau contenant chacune d'elles
2. Affichez dans le h2 à l'id result, l'id d'un des éléments du tableau(par exemple celui à l'index 1, idem ne servira pas à la fin)
--------------------------------
# Mini exercice 3 : Créer une fonction

1. Créez une fonction (étape déclaration) appelée jeu() qui va utiliser le tableau créé pour en sortir un élément aléatoire
2. Cette fonction va stocker dans une variable un nombre aléatoire entre 0 et 2
3. Utilisez ce nombre aléatoire comme index pour aller chercher un élément du tableau et stockez son id dans une nouvelle variable(choix_ordi par exemple)
4. Enfin votre fonction doit afficher le contenu de cette variable dans le h2 comme précédemment
5. Votre fonction est terminée (déclarée).Il faut maintenant la lancer (l'appeler)
--------------------------------
# Mini exercice 4 : Ecouter un évenement

1. Au début, vous avez créé des variables qui stockent les différents boutons, il est temps de les utiliser
2. Accrochez un écouteur d'évenement qui détecte le click sur chacun des boutons (donc les variables) et qui lance la fonction jeu
3. Retournez dans la fonction jeu et creez une variable(par exemple choix_joueur) qui va stocker l'id du bouton qui aura lancé la fonction (indice : mot clé this)
4. Affichez dans le p à l'id partie, une phrase qui dit l'ordi a joué...et la variable choix ordi puis le joueur a joué ... puis la variable choix_joueur

--------------------------------
# Mini exercice 5 : la mécanique de jeu

1. Votre fonction a maintenant à sa disposition la variable choix_ordi et choix_joueur
2. Créez une variable resultat
3. En fonction des tests, stockez la valeur "Egalité", "Gagné" ou "Perdu" dans résultat
4. Affichez dans le h2 à l'id result, la valeur de résultat

## GG !!! Vous avez un jeu de pierre feuille ciseaux (et pleins de concepts javascript utiles en prime)
