/**
 * Created by Francisca on 2019-11-14.
 */


var montant;
var reduction;
var total;

montant = Number(prompt("Veuillez entrer votre montant d'achat"));
reduction = montant * 15 / 100;
total = montant - reduction;

if (montant >= 200) {
    alert("Vous avez droit à une réduction de 15% sur votre achat de " + montant + " $" + " ce qui vous fait un montant total de " + total + " $" );
}

else {
 alert("Merci pour votre achat!");
}