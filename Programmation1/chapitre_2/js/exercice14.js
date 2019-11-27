/**
 * Created by Francisca on 2019-11-14.
 */

var A;
var B;
var C;

A = Number(prompt("Saisissez un chiffre A"));
B = Number(prompt("Saisissez un chiffre B"));
C = Number(prompt("Saisissez un chiffre C"));

if(A > B) {
    if (B > C) {
        document.write( C + " & " + B + " & " + A);
    }
    if(B < C) {
        document.write( B + " & " +  C + " & "+ A);
    }
}

else if(B > C) {
    if (A > C) {
        document.write( C + " & " + A + " & " + B);
    }

    if (A < C) {
        document.write( A + " & " +  C + " & "+ B);
    }
}

else if(C > A) {
    if (A > B) {
        document.write( B + " & " + A + " & " + C);
    }
    if (A < B) {
        document.write( A + " & " +  B + " & "+ C);
    }
}


else {
        alert("Erreur! Vos données saisies sont invalides!");
}

// combinaisons possibles
// 123
// 132
// 213 * problématique = 132 (BCA)
// 231
// 312
// 321








