/**
 * Created by Francisca on 2019-12-12.
 */

var nombreAleatoire = 0;
var compteurA = 0;
var compteurB = 0;

do{
    nombreAleatoire = Number(prompt("Veuillez entrez un chiffre aléatoire. Entrez le chiffre 0 pour terminer"));

    if(nombreAleatoire > 0) {
        compteurA++;
    }
    else if(nombreAleatoire < 0 ) {
        compteurB++;
    }

}while(nombreAleatoire != 0);

document.write("<p>Nombre de valeurs positives : " + compteurA +"</p>");
document.write("<p>Nombre de valeurs negatives : " + compteurB +"</p>");






