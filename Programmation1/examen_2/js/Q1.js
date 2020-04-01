/**
 * Created by Francisca on 2020-01-13.
 */

// Vous demandez au client le type de Jeep
// Sport 33290$
// SportS 37240$
// Havane 39235).
// Vous demandez ensuite le terme (24, 48, 60 ou 84) mois.
//     Vous demandez la couleur, si c’est rouge ou vert, ajoutez 1399$ au prix du véhicule.
//     Vous demandez si la transmission est manuelle (0$), automatique (1500$) ou automatique 8 vitesses (2400$).
//
// Calculez une taxe de 15%.
// Le taux d’intérêt est toujours 0%
// Affichez le paiement mensuel incluant la taxe et un résumé de la transaction.


let prix = 0;
let prixCouleur = 0;
let prixTransmission = 0;
let mensualite = 0;

    let type = prompt("Quel type de jeep desirez-vous : sport, sport-s ou havane?").toUpperCase();
    if (type === "SPORT") {
        prix = 33290;
    } else if (type === "SPORT-S") {
        prix = 37240;
    } else if (type === "HAVANE") {
        prix = 39235;
    } else {
        alert("Valeur incorrecte");
    }

    let terme = Number(prompt("Quel type de mensualité désirez-vous : 24, 48, 60 ou 84?"));
    if (terme === 24) {
        mensualite = 24;
    } else if (terme === 48) {
        mensualite = 48;
    } else if (terme === 60) {
        mensualite = 60;
    } else if (terme === 84) {
        mensualite = 84;
    } else {
        mensualite = 0;
    }

    let couleur = prompt("Quelle couleur désirez-vous").toUpperCase();
     if (couleur === "VERT" || couleur === "ROUGE") {
        prixCouleur= 1399;
     } else {
         prixCouleur= 0;
     }

    let transmission = prompt("Désirez-vous la transmission manuelle,  automatique ou automatique 8 vitesses?").toUpperCase();
    if (transmission === "AUTOMATIQUE") {
        prixTransmission= 1500;
    } else if (transmission === "AUTOMATIQUE 8 VITESSES") {
        prixTransmission= 2400;
    } else {
        prixTransmission= 0;
    }

    let total = prix + prixCouleur + prixTransmission;
    let taxes = total * 1.15;
    let grandTotal = (total + taxes) / mensualite;


    document.write("Jeep " + type + " = " + prix + " $" + "<br>");
    document.write("Sur un terme de = " + mensualite + " mois " + "<br>");
    document.write("Couleur " + couleur + " = "+  prixCouleur +" $ <br>");
    document.write("Transmission " + transmission +" = "+ prixTransmission + " $ <br>");
    document.write("TOTAL = " + total  + " $ <br>");
    document.write("TAXES = " + taxes  + " $ <br>");
    document.write("TOTAL PAR MOIS = " + grandTotal  + " $ <br>");















