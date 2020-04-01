/**
 * Created by Francisca on 2020-01-13.
 */

class joueurHockey {
    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs= nbButs;
        this.nbPasses= nbPasses;
    }

    Total(){
       return(this.nbButs + this.nbPasses);
    }
}

class equipe {
    constructor(nom,joueur1, joueur2, joueur3) {
        this.nom = nom;
        this.joueur1 = j1;
        this.joueur2 = j2;
        this.joueur3 = j3;
    }

    AfficherAlignement(){
        document.write(this.joueur1.nom + " " + this.joueur2.nom + " " + this.joueur3.com);
    }

    AfficherPointsTotaux(){
        return(this.joueur1.Total() + this.joueur2.Total() + this.joueur3.Total());
    }
}

let SudneyCrosby = new joueurHockey("Sydney Crosy", 454, 787);
let MarioLemieux = new joueurHockey ("Mario Lemieux", 690, 1033);
let JaromirJagr = new joueurHockey("Jaromir Jagr", 766, 1155);




