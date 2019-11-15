/**
 * Created by Francisca on 2019-11-14.
 */


var temperature;

temperature = Number(prompt("Veuillez entrer la température"));


// if ( temperature <= -10 ) {
//     if (temperature >=-40) {
//         alert("Ahhhh il fait froid!");
//     }
// }

if(temperature > -40 && temperature <-10) {
    alert("Ahhhh il fait froid!");
}

else if (temperature <= -41) {
    alert("Game over");
}

else {
 alert("Enfin une belle journée!" );
}