var alimentSaisie = prompt(' Taper le nom du produit ');
produit = alimentSaisie.toLowerCase();
switch (produit) {
    case "tomate":
        console.log("Tomate: Bon pour la santé et vegan");
        break;
    case "tofu":
        console.log("tofu : issu du soja donc vegan mais sa culture intensive n'est pas top niveau environnement ");
        break;
    case "miel":
        console.log("miel : abeille = animal = non vegan");
        break;
    case "foie gras":
        console.log(" - foie gras : Pire aliment non vegan");
        break;
    case "oeuf":
        console.log("lait/oeuf : d'origine animale même si ça n'est pas directement leur viande");
        break;
    case "lait":
        console.log("lait/oeuf : d'origine animale même si ça n'est pas directement leur viande");
        break;
    default:
        console.log("Désolé, nous n'avons pas d'informations concernant ce produit ");
}