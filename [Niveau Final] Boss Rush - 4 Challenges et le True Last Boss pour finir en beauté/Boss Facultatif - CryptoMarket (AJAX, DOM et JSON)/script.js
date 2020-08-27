/** Boucle de rafraichissement. Ce code ne s'exécute qu'une fois la page entièrement chargée (on est donc sûr que jquery est bien chargé à ce moment là) */
$( document ).ready(function() {

  const nb_currencies = 8 ; // nombre de devises à récupérer 
  const historique_7j = true ;
  const refresh_delay = 10 ;
  update(nb_currencies, historique_7j); // initialisation au chargement de la page

  // toutes les refresh_delay secondes on relance l'update
  setInterval(function(){ update(nb_currencies, historique_7j); }, refresh_delay*1000); 
});



/*************************
 * Fonction qui passe la requete ajax et qui récupère les infos à jour
 *************************/
function update(nb_currencies, historique_7j) {

  // on construit l'url qu'on va appeler pour notre appel ajax
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page='+nb_currencies+'&page=1&sparkline='+historique_7j+'&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y';

  // on fait l'appel AJAX qui va nous renvoyer le résultat sous la forme d'un objet JSON
  $.getJSON(url, null, function (data, status) {
    if (status === "success"){ // si la requête se déroule bien

      // vous pouvez ajouter un élément au body pour l'exemple pour comprendre la structure des données récupérées
      //$("body").append("<pre>"+JSON.stringify(data)+"</pre>");
      // (décommentez la ligne ci dessus pour voir le résultat)

      // Vous pouvez aussi directement charger l'url suivante dans votre navigateur : https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=8&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y

      // l'objectif de l'exercice sera de mettre à jour le tableau de la page HTML avec le bon contenu
      // (ce bon contenu sera dans data, au format JSON, à vous de comprendre comment récupérer les bonnes données et les injecter dans le DOM au bon endroit)
      
      // voici comment on accède aux objets en json (regardez dans la console) :
      console.log("Monnaie  1 : "+data[0].name+" ["+data[0].symbol+"] valeur : "+ data[0].current_price+"€");
      console.log("Monnaie  2 : "+data[1].name+" ["+data[1].symbol+"] valeur : "+ data[1].current_price+"€");
      // bien sûr, vous pouvez faire une boucle pour passer en revue toutes les monnaies
      // à vous de transformer le tableau de la page html en l'adaptant et en le modifiant comme il faut pour le mettre à jour via le DOM. Vous pouvez modifier le fichier HTML à votre guise ! Notamment en ajoutant des id ou des classes partout où vous en avez besoin.
      
      // A chaque appel de la fonction update, vous mettez à jour les valeurs de chaque monnaie. Libre à vous d'afficher les valeurs brutes (telles qu'elles apparaissent dans le JSON) ou bien de les formater pour avoir un affichage plus lisible (avec les lettres M ou B pour le smillions et les milliards comme dans l'exemple HTML)

      /* BONUS : Il existe de nombreuses autres données contenues dans le JSON que vous allez récupérer à chaque appel AJAX. Vous pourrez profiter de ces données pour aller beaucoup plus loin. Par exemple :
        - tracer un graphique avec l'historique des valeurs des 7 denriers jours (voir google chart)
        - rajouter des effets quand vous mettez à jour une valeur qui a changé (par exemple faire clignoter la case pendant quelques secondes)
        - afficher le taux de variation de la valeur sur d'autres périodes de temps (1h, 7j, 30j 1 an)
        - les min et max "all time" (ath/atl)
        - tout ce que vous trouveriez utile
      */
      
    }
  }); 
} 



