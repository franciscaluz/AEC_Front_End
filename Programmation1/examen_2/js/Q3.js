/**
 * Created by Francisca on 2020-01-13.
 */
let mot = String.fromCharCode(68,65,68);
let totalDAD = 0;
let totalE = 0;
let totalVoyelle = 0;
let tabLettres = "";
let tabChiffres = [];
let min = 65;
let max = 90;

for(let i = 0; i < 10000; i++) {
    tabChiffres[i] = Math.floor((Math.random() * (max - min)) + min);
    tabLettres = String.fromCharCode(tabChiffres[i]);

    document.write(tabLettres + " ");

    if(tabChiffres[i] === 69) {
        totalE++;
    }

    if (tabChiffres[i] === 65 || tabChiffres[i] === 69 || tabChiffres[i] === 73 || tabChiffres[i] === 79 || tabChiffres[i] === 85 || tabChiffres[i] === 89) {
        totalVoyelle++;
    }
}

for (let i = 0; i < tabChiffres.length;i++){
    if (mot === String.fromCharCode(tabChiffres[i], tabChiffres[i + 1], tabChiffres[i + 2])) {
        totalDAD++;
    }
}

document.write("<p>Total nombre de lettre E : " +  totalE + "</p>");
document.write("Total nombre de voyelles : " +  totalVoyelle + "<br>");
document.write("Nombre de mot " + mot + " : " + totalDAD);


























