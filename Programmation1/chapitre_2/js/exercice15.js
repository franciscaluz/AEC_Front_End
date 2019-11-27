/**
 * Created by Francisca on 2019-11-14.
 */

var longueur;
var largeur;
var perimetre;
var surface;


longueur = Number(prompt("Saisissez la longueur"));
largeur = Number(prompt("Saisissez la largeur"));
perimetre = longueur + largeur * 2 ;
surface = longueur * largeur;

if(perimetre >= 100) {
    document.write( "la surface de votre rectangle est " + surface);
}

else {
    alert("Votre perimetre est inférieur à 100");
}










