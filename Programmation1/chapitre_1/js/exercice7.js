var article;
var prix;
var prixdetail;
var profit;

article = prompt("Veuillez affichez le nom de l'article");
prix = prompt("Veuillez affichez le prix de l'article");
prixdetail = prix * 66 / 100;
profit = prix - prixdetail;

console.log("Votre article est " + article + " et son prix est de " + prix + " $");
console.log("le prix en gros est de " + prixdetail + " $" + " et vous faites une économie de " + profit + " $");


