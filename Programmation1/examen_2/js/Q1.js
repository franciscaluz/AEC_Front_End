/**
 * Created by Francisca on 2020-01-13.
 */

//
// Vous devez calculer les dommages de l’attaque Darkest Lariat du pokémon Incineroar.
// Pour cela, il faut lire le type du pokémon adverse. Si c’est de type eau, les dommages seront doublés
// car les pokémons du type eau ont une faiblesse contre le feu.
//
// Il faut ensuite faire deux pile ou face. Pour cela, il faut générer un nombre aléatoire entre 0 et 1.
// Si c’est face (1), l’attaque fait 100 de dégâts. Si c’est faux l’attaque fait 0 dégât. Répétez les opérations pour le second lancé.
//
// Exemple :
// type = “eau” face face → 400 de dégâts
// type = “ténèbre” pile face → 100 dégâts


let attaque1 = 0;
let attaque2 = 0;
let total = 0;
let lance1 = Math.floor(Math.random() * 2);
let lance2 = Math.floor(Math.random() * 2);

if(lance1 === 1 ) {
    lance1 = "face";
    attaque1 = 100;
} else {
    lance1 = "pile ";
    attaque1 = 0;
}

if(lance2 === 1) {
    lance2 = "face ";
    attaque2 = 100;
} else {
    lance2 = "pile ";
    attaque2=  0;
}

let type = prompt("Quel est le type du Pokémon adversaire?");

if(type === 'eau') {
    total =  attaque1 * 2 + attaque2 * 2;
} else {
    total = attaque1 + attaque2;
}

document.write("type = " + type + " - "  + lance1 + " / " + lance2 + " = " +  total + " point de dégâts" );





