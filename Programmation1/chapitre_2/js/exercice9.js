/**
 * Created by Francisca on 2019-11-14.
 */


var user;
var psw;

user = (prompt("Entrez votre nom d'utilisateur"));
psw = (prompt("Entrez votre mot de passe"));

if(user === "admin" && psw === "12345") {
    alert("Bonjour " + user);
}

else {
    alert("Votre nom d’utilisateur ou votre mot de passe est invalide");
}

