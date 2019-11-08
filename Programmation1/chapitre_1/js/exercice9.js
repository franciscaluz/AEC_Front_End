var celsius;
var valeur;

valeur = Number(prompt("Veuillez entrer votre valeur en fahrenheit"));
celsius = (valeur - 32) * 5 / 9;

console.log(valeur + " fahrenheits equivaut à " + celsius + " celsius");