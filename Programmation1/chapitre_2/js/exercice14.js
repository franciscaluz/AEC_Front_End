/**
 * Created by Francisca on 2019-11-14.
 */

var A;
var B;

A = Number(prompt("Saisissez un chiffre A"));
B = Number(prompt("Saisissez un chiffre B"));

if(A > B) {
    document.write( B + " & " + A);
}

else if(A < B) {
    document.write( A + " & " + B);
}

else {
    if( A === B) {
        alert("Erreur! Les deux chiffres ne doivent pas être identiques!");
    }
    else {
        alert("Erreur! Vos données saisies sont invalides!");
    }

}









