/**
 * Created by Francisca on 2020-01-13.
 */


var randomNumber = [];
var max = 0;
var min = 9999999;


for (var i = 0; i<10; i++) {
        randomNumber[i] = Math.floor(Math.random() * 100);
    document.write(randomNumber + "<br>");
}

for (var j = 0; j<10; j++) {
    if(randomNumber[j] < min){
        min = randomNumber[j];
    }

    if(randomNumber[j] > max){
        max = randomNumber[j];
    }
}



document.write("Le chiffre minimum est " + min + "<br>");
document.write("Le chiffre maximum est " + max);




