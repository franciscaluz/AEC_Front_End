/**
 * Created by Francisca on 2020-01-13.
 */



class MonnaieVirtuelle {
    constructor(nomMonnaie, valeurUSD, actif) {
        this.nomMonnaie = nomMonnaie;
        this.valeurUSD = valeurUSD;
        this.actif = actif;
        this.actifUSD = this.actif * this.valeurUSD;
    }
}


class Portefeuille {
    constructor(nomProprio, TableauMonnaie) {
        this.nomProprio = nomProprio;
        this.TableauMonnaie = TableauMonnaie;
    }

    ValeurDuPortefeuille() {
        let tableau = 0;
        for (let i = 0; i < MonnaieVirtuelle.lenght; i++) {
            tableau += MonnaieVirtuelle[i];
        }
    }

}

let Bitcoin = new MonnaieVirtuelle("Bitcoin", "9730", "6", " ");
let Ethereum = new MonnaieVirtuelle("Ethereum", "194", "20", " ");
let Litecoin = new MonnaieVirtuelle("Litecoin", "58", "10", " ");

let tabMonnaie = [Bitcoin, Ethereum, Litecoin];

document.write(tabMonnaie[1]);


//
//
//
// let ShanyCarle = new Portefeuille(tabMonnaie);
//
// let MonPortefeuille = ShanyCarle.ValeurDuPortefeuille();






