/**
 * Created by Francisca on 2019-11-14.
 */


var heures;
var salaire;
var taux;
var extra;
var total;
var supp;

heures = Number(prompt("Veuillez entrer les heures travaillées"));
salaire = Number(prompt("Veuillez entrer le salaire"));
taux = salaire * heures;
extra = salaire * 2;
supp = heures - 40;

if(heures > 40) {
    total = salaire * 40 + supp * extra;
    alert("Le montant total est de " + total + " $");
}

else {
    total = taux;
    alert("Le montant total est de " + total + " $");
}
