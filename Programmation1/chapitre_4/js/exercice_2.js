/**
 * Created by Francisca on 2020-01-13.
 */

//
// Créez un tableau qui contient les 12 mois de l’année en assignant chaque cellule manuellement et affichez-le à l’aide d’une boucle Pour.
//     Ex : tabMois[0] = “janvier”;


var mois = [];

mois[0] = "Janvier";
mois[1] = "Février";
mois[2] = "Mars";
mois[3] = "Avril";
mois[4] = "Mai";
mois[5] = "Juin";
mois[6] = "Juillet";
mois[7] = "Aout";
mois[8] = "Septembre";
mois[9] = "Octobre";
mois[10] = "Novembre";
mois[11] = "Décembre";

for(var i=0;i<mois.length;i++){
    document.write(mois[i] + "<br>");
}
