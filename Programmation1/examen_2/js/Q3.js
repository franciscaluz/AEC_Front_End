/**
 * Created by Francisca on 2020-01-13.
 */
//
// Créez un tableau nommé tabChance qui contient 100 nombres aléatoires entre 1 et 200. (4 points)
// Demandez un nombre à l’usager entre 1 et 200. (1 point)
// Parcourez le tableau pour savoir si le nombre se trouve dans le tableau et confirmez la réponse à l’usager. (5 points)

let tabChance = [];
let saisie = Number(prompt("Saisissez un chiffre entre 1 et 200"));
let chance = false;

for(let i=0; i<100; i++) {
    tabChance[i] = Math.floor(Math.random() * 200);
    document.write(tabChance[i] + " ");
}

for(let j=0; j<tabChance.length; j++) {
    if (saisie === tabChance[j]) {
        chance = true;
    }
}

if (chance === true) {
    alert("Vous avez de la chance!")
}

else {
    alert("Vous avez perdu...:(")
}







