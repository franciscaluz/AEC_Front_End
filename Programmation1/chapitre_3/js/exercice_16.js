/**
 * Created by Francisca on 2019-12-12.
 */

var nbAleatoire= 0;
var nb = 0;
var compteurA = 0;
var compteurB = 0;

for(var i=0; i < 10; i++){
    nb = Math.floor(Math.random() * 2);
    nombreAleatoire = Number(prompt("Veuillez entrez un chiffre aléatoire entre 0 et 1."));

    if(nb === nbAleatoire){
        alert("Vous avez gagné");
        compteurA+=nombreAleatoire;
    }
    else {
        alert("Vous avez perdu");
        compteurB+=nombreAleatoire;
    }
}

document.write("<p>Nombre victoires : " + compteurA +"</p>");
document.write("<p>Nombre défaites : " + compteurB +"</p>");






