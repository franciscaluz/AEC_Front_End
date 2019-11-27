/**
 * Created by Francisca on 2019-11-14.
 */

var A;
var B;
var C;
var D;
var somme;
var produit;
var differenceA;
var differenceB;


A = Number(prompt("Saisissez un chiffre A"));
B = Number(prompt("Saisissez un chiffre B"));
somme = A + B;
produit = A * B;
differenceA = A - B;
differenceB = B - A;


if(A >= 10 && B >= 10) {
    document.write( "la somme totale est " + somme);
}

else if(A < 10 && B < 10) {
    document.write( "le produit est " + produit);
}

else {
    if(A >= 10 && B < 10 || A < 10 && B >= 10) {
        if(A > B) {
            document.write( "la difference entre A et B est " + differenceA);
        }
        else {
            document.write( "la difference entre B et A est " + differenceB);
        }
    }
}










