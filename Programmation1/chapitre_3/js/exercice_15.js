/**
 * Created by Francisca on 2019-12-12.
 */

var nombreAleatoire = 0;
var nb = 0;

do{
    nombreAleatoire = Number(prompt("Veuillez entrez un chiffre aléatoire. Entrez le chiffre 0 pour terminer"));
    nb = nb + nombreAleatoire;

}while(nombreAleatoire != 0);

document.write(nb);






