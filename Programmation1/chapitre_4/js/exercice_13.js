/**
 * Created by Francisca on 2020-01-13.
 */
// Lire 12 nombres quelconques et les mettre dans un tableau.
//     Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15.
// Si tel est le cas, afficher ces 2 nombres.


var nbAleatoire = [];
var chiffre = 0;

for (i=0; i< 12; i++) {
    nbAleatoire[i] = Math.floor(Math.random() * 10);

    document.write(nbAleatoire[i] + "<br>");
}
for (j=0; j<nbAleatoire.length; j++) {

    if (nbAleatoire[i] + nbAleatoire[11] === 15) {
        chiffre++;
        document.write(chiffre + " + " + nbAleatoire[11] +  " = 15");
    }

}




















