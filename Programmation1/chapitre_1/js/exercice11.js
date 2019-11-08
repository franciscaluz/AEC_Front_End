var date;
var prixA;
var prixB;
var prixC;
var total;
var tps;
var tvq;
var facture;

date = prompt("Entrez la date");
prixA = Number(prompt("Entrez le prix de votre article 1"));
prixB = Number(prompt("Entrez le prix de votre article 2"));
prixC = Number(prompt("Entrez le prix de votre article 3"));

total = prixA + prixB + prixC;
tps = total * 5 / 100;
tvq = total * 9.975 / 100;
facture = total + tps + tvq;

console.log(date);
console.log("TPS: " + tps + " $");
console.log("TVQ: " + tvq + " $");
console.log("Grand Total " + facture + " $");





