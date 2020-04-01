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


var tabreponse = ['vrai', 'vrai', 'faux'];
var tbquestion = [
    prompt("Vrai ou Faux : est-ce que la capitale du Danemark est Copenhagen?"),
    prompt("Vrai ou Faux : est-ce que la capitale de France est Paris?"),
    prompt("Vrai ou Faux : est-ce que la capitale du Canada est Quebec?")
];
var compteur = 0;
var vrai = 0;
var faux = 0;


for (i = 0; i < tbquestion.length; i++) {

        if (tbquestion[i] === tabreponse[i]) {
            vrai++;
        }
        else {
            faux++;
        }
        compteur++;
        document.write(compteur + ' - ' + tbquestion[i] + "<br>"); //affiche tout le tableau sur plusieurs lignes
}

document.write("Vous avez " + vrai + " bonnes réponses <br>" );
document.write("Vous avez " + faux + " mauvaise réponses <br>" );
document.write("Votre total est de " + vrai + " sur 3");




















