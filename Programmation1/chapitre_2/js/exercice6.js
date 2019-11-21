/**
 * Created by Francisca on 2019-11-14.
 */


var note;

note = Number(prompt("Veuillez entrer votre note"));

// if(note >= 90) {
//     alert("Votre note est A");
// }
//
// else if(note < 90 && note >= 80) {
//     alert("Votre note est B");
// }
//
// else if(note < 80 && note >= 70) {
//     alert("Votre note est C");
// }
//
// else if(note < 70 && note >= 60) {
//     alert("Votre note est D");
// }
//
// else {
//     alert("Votre note est E");
// }

if(note < 60) {
    alert("Votre note est E");
}

else if(note >= 60 && note < 70) {
    alert("Votre note est D");
}

else if(note >= 70 && note < 80) {
    alert("Votre note est C");
}

else if(note >= 80 && note < 90) {
    alert("Votre note est B");
}

else {
    alert("Votre note est A");
}
