var taux;
var heures;
var salaire;

taux =  Number(prompt("Veuillez entre le salaire $ / heure"));
heures = Number(prompt("Veuillez entrer le nombre d'heures travaillées"));

salaire = taux * heures;

console.log("Le salaire brut est " + salaire + " $");