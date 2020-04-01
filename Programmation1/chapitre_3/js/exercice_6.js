/**
 * Created by Francisca on 2019-12-12.
 */

var compteurA = 0;
var compteurB = 0;
var min=0;
var max=1;


for(var i = 0; i <= 99; i++) {
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


// correction
// var nbDe0 = 0;
// var nbDe1 = 0;
// var nb = 0;
//
// for(var i=0; i < 100; i++){
//     nb = Math.floor(Math.random() * 2);
//     document.write(nb + " <br>);
//
//     if(nb === 0){
//         nbDe0++;
//     }
//     else  if(nb===1){
//         nbDe1++;
//     }
// }
//
// document.write("Il y a eu : " + nbDe0 + " zeros <br>");
// document.write("Il y a eu : " + nbDe1 + " uns <br>");



