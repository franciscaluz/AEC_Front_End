/**
 * Created by Francisca on 2019-11-14.
 */

var direction;

direction = (prompt("Saisissez une lettre de commande"));

if(direction === "w") {
    alert("Avancer");
}

else if(direction === "a") {
    alert("Gauche");
}

else if(direction === "s") {
    alert("Droite");
}

else if(direction === "d") {
    alert("Reculer");
}

else {
    alert("Erreur! Recommencez!");
}









