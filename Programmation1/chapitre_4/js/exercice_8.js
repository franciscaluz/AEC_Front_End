/**
 * Created by Francisca on 2020-01-13.
 */

// Lire les noms et notes d’examen d’une classe de 5 élèves.
// Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.


var tabnom = [];
var tabnote = [];
var moyenne;


for (var i = 0; i<5; i++) {
    tabnom[i] = prompt("Saississez le nom de l'éleve");
    tabnote[i] = Number(prompt("Saississez la note de l'éleve"));

    moyenne= (tabnote[0] + tabnote[1], tabnote[2], tabnote[3], tabnote[4]) / 5 ;


    for(i=0; i<5; i++) {
        if (tabnote >= moyenne) {
            document.write(tabnoms[i] + tabnotes[i]);
        }
    }
}


