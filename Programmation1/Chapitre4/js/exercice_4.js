/**
 * Created by Francisca on 2020-01-13.
 */

// Affichez les mois précédents de Décembre à Janvier à l’aide d’une boucle for (inversée).

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

for(var i=mois.length-1;i>= 0;i--){
    document.write(mois[i] + "<br>");
}

