/**
 * Created by Francisca on 2019-11-14.
 */


var nombre1;
var nombre2;
var division;

nombre1 = Number(prompt("Veuillez entrer un chiffre"));
nombre2 = Number(prompt("Veuillez entrer un autre chiffre"));
division = nombre1 / nombre2;


if (nombre2 === 0 ) {
        alert("Division par zéro interdite");
}

else {
 alert("le résultat de votre division est " + division );
}