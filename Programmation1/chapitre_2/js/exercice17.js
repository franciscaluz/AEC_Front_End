/**
 * Created by Francisca on 2019-11-14.
 */

var lettre;


lettre = (prompt("Saisissez une lettre sur votre clavier"));

if(lettre.toUpperCase() === "A" || lettre.toUpperCase()=== "E" || lettre.toUpperCase()=== "I" || lettre.toUpperCase()=== "O" || lettre.toUpperCase()=== "U" || lettre.toUpperCase()=== "Y" ) {
    document.write( "voyelle");
}

else {
    if(lettre >= 0 || lettre < 0 ) {
        alert("Cette saisie est erronnée.  Veuillez rentrer une lettre !");
    }
    else {
        document.write("Consonne");
    }
}










