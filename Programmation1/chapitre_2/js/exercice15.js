/**
 * Created by Francisca on 2019-11-14.
 */

var A;
var B;

A = Number(prompt("Saisissez un chiffre A"));
B = Number(prompt("Saisissez un chiffre B"));
C = Number(prompt("Saisissez un chiffre C"));

if(A > B && B > C) {
    document.write( C + " & " + B + " & " + A);
}

else if(A < B && B < C) {
    document.write( A + " & " + B + " & " + C);
}


else {
    if( A === B || B === C) {
        alert("Erreur! Les chiffres ne doivent pas être identiques!");
    }
    else {
        alert("Erreur! Vos données saisies sont invalides!");
    }

}









