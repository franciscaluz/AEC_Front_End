/**
 * Created by Francisca on 2019-11-14.
 */

var sexe;
var age;
var valeur;
var prime;

sexe = (prompt("Veuillez entrez votre sexe"));
age = (prompt("Veuillez entrez votre age"));
valeur = (prompt("Veuillez entre la valeur de votre vehicule"));

if(sexe.toUpperCase() === "M") {

    if(age >= 16 && age <=25) {
        prime= valeur * 0.05;
    }
    else {
        prime = valeur * 0.03;
    }

    document.write("<h1 class='man'>Votre prime est de : " + prime + "%</h1>");
}

else if (sexe.toUpperCase() === "F" && sexe.toUpperCase() !=="M") {
    if(age >= 16 && age <=25) {
        prime= valeur * 0.03;
    }
    else {
        prime = valeur * 0.02;
    }

    document.write("<h1 class='woman'>Votre prime est de : " + prime + "%</h1>");
}


else{
    alert("Le sexe saisi est incorrect, veuillez entrez la valeur de M ou F");
}













