/**
 * Created by Francisca on 2020-01-13.
 */

// L’AGENCE DE VOYAGES
//
// Créez une classe Activité
// Une activité a un nom
// Une activité a un coût
//
// Créez une classe Voyage
// Un voyage a une destination
// Un voyage a prix pour billet avion
// Un voyage un tableau d’activités
//
// Créez une classe Personne
// Une personne a un nom
// Une personne a un voyage
//
// Instanciez l’activité “Golden Knights hockey” 125$
// Instanciez l’activité “Raiders football” 200$
// Instanciez l’activité “Tournoi de poker” 500$
//
// Instanciez le voyage “Las Vegas” 400$ avec les 3 activités précédentes
//
// Instanciez la personne “Shany Carle” avec le voyage précédent
//
// Faites afficher toutes ces informations à l’écran. Vous devez en plus afficher le coût total pour le voyage (le billet d’avion et les activités).


class Activites {
    constructor(nomActivite, cout) {
        this.nomActivite = nomActivite;
        this.cout = cout;
    }
}

class Voyages{
    constructor(destination, prixBilletAvion,tableauActivites) {
        this.destination = destination;
        this.prixBilletAvion = prixBilletAvion;
        this.tableauActivites = tableauActivites;
    }

    GrandTotal(){
        let total = 0;
        for (let i = 0; i<this.tableauActivites.length; i++){
            total+= this.tableauActivites[i].cout;
            console.log(total);
        }
        return total + this.prixBilletAvion;
    }
}

class Personne{
    constructor(nom, voyage) {
        this.nom = nom;
        this.voyage = voyage;
    }
}

let Activite1 = new Activites("Golden Knights Hockey", 125);
let Activite2 = new Activites("Raiders Football", 200);
let Activite3 = new Activites("Tournoi Poker", 500);

let tabActivites = [Activite1, Activite2, Activite3];

let Voyage1 = new Voyages("Las Vegas", 400, tabActivites);
let Personne1 = new Personne("Shany Carle", Voyage1);

document.write("Le voyage de "+ Personne1.nom + " à "+ Personne1.voyage.destination + " est d'un montant total de " + Personne1.voyage.GrandTotal() + " $ ");









