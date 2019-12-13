/**
 * Created by Francisca on 2019-12-12.
 */

var compteurA = 0;
var compteurB = 0;
var min=0;
var max=1;


for(var boucle = 0; boucle <= 99; boucle++) {
    chiffre = Math.round( Math.random() * (max - min) + min);
    if(chiffre ===0) {
        compteurA = compteurA + 1;
    }
    else {
        compteurB = compteurB + 1;
    }

    document.write("<p>" + chiffre + "</p>");
}

document.write("<p>nombre de zéros: "+ compteurA +" nb de un: "+ compteurB + "</p>");




