/**
 * Created by Francisca on 2019-12-12.
 */

var solde = 0;
var depot = 0.01;

for(var i=1;i<=10;i++){
    solde += depot;
    document.write("Jour "  + i + " depot de " + depot + "$ solde de : " + solde.toFixed(2) +"$<br>");
    depot = depot * 2;
}






