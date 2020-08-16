# Exercice 6
Créer un chronomètre en javascript

# Objectif 
Appeler une fonction d'une manière répétitive en utilisant la fonction setInterval().

# Travail à faire 
En se basant sur le code html suivant également contenu dans le fichier index.html :

	<!doctype html>
	<html>
	<head>
		<title>Chronomètre</title>
		<meta charset="utf-8">
		<style type="text/css">
	      .chronometre{
		margin: auto ;
		width: 300px;
		text-align: center;

	      }

	      .tim{
		margin: auto;
		width: 300px;
		border: 1px solid rgba(0,0,0,0.5);
		padding:5px 0;
		text-align: center;
		font-size: 1.5em;
		font-family: digital;
		margin-bottom: 10px;


	      }

	      button{
		background: #3498db;
		color: #fff;
		width: 70px;
		border-radius: 5px;
		line-height: 1.5em;
		border: none
	      }


		</style>
	</head>
	<body>
	<div class="chronometre">
	  <div class="tim">
		<span >0 h</span> :
		<span >0 min</span> :
		<span >0 s</span> :
		<span >0 ms</span>

	  </div>
	  <button id="start" onclick="start()">Start</button>
	  <button id="stop" onclick="stop()" >Stop</button>
	  <button id="reset" onclick="reset()" >Reset</button>
	</div>
	</body>
	</html>

Créer un chronomètre composé d'un afficheur et 3 boutons : un bouton "start" pour lancer le chronomètre, un bouton "stop" pour l'arrêter et un bouton "reset" pour le remettre à zéro.

Voir le fichier resultat.png pour avoir un aperçu du résultat attendu.
