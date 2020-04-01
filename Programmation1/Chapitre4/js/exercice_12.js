/**
 * Created by Francisca on 2020-01-13.
 */
// C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que chaque famille
// possède et par la suite afficher un tableau de statistiques comme suit : Le nombre d’enfants est l’indice du tableau.
//     Regrouper ensemble les 10 enfants et plus.
//
//     Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.
//
//     Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants.


var tableau = []; //recensement
NbEnfants = 0;

while (NbEnfants != 666) {
    NbEnfants = Number(prompt("Indiquez le nb d'enfants. Pour arrêter, ecrivez 666"));
    document.write(tableau[NbEnfants] + "<br>");

    if (NbEnfants >= 10) {
        tableau[NbEnfants]++;
    }
}













