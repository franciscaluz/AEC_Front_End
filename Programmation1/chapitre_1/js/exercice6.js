var age;
var nom;
var jour;

nom = (prompt("Veuillez entrer votre nom : "));
age = Number(prompt("Veuillez entrer votre âge : "));

jour = age * 365;

console.log("Bonjour" + nom + " votre nombre de jours correspondant à votre âge est " + jour);
console.log("votre âge est " + age + " ans");
