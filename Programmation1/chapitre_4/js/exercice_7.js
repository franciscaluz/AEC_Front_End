/**
 * Created by Francisca on 2020-01-13.
 */

// À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean). Ces valeurs doivent être aléatoires.
// Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et faites-les afficher.
//
//     Calculez la plus longue séquence de vrais et de faux consécutifs.
//     Ex:
//
// Plus longue séquence de vrais consécutifs : 3
// Plus longue séquence de faux consécutifs  : 4
var tabVraiouFaux = [];
var vrai = 0;
var faux = 0;

for (var i =0; i<1000; i++) {
    tabVraiouFaux [i] = Boolean(Math.floor(Math.random() * 2));

    if (tabVraiouFaux[i] === true) {
        vrai++;
    }
    else {
        faux++;
    }

}



console.log("Il y a " + vrai + "de vrais");
console.log("Il y a " + faux + "de faux");