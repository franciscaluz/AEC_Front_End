/**
 * Created by Francisca on 2019-11-14.
 */

var montant;
var escompte;
var total;

montant = Number(prompt("Saisissez un montant de vente"));
escompte = montant * 12 / 100;
total = montant - escompte;

if(montant >=500 ) {
    document.write( "Votre taux escompte est de " + escompte + " $");
}

else {
    document.write( "Votre montant est inférieur à 500$ vous n'avez pas droit à un escompte");
}










