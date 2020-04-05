let form1Valid = false;

$('#form1').submit(function(e) {
    e.preventDefault();
    var myInput = $('#lettres').val();
    let tabInput = myInput.split('');

    $("#form1-error").hide();
    $('.result-col').hide();

    if (myInput.length < 3) {
        $("#form1-error").show().append('Votre mot doit contenir un minimum de 3 caractères!');
        form1Valid = false;
    } else if (myInput.length > 12) {
        $("#form1-error").show().append('Votre mot doit contenir un maximum de 12 caractères!');
        form1Valid = false;
    } else if (myInput.length = ContientChiffre(myInput)) {
        $("#form1-error").show().append('Votre mot ne doit pas contenir de chiffres!');
        form1Valid = false;
    } else {
        for (let i = 0; i < myInput.length; i++) {
            $('.default-col').hide();
            let path = "assets/images/letters/" + myInput[i] + "/" + myInput[i] + "1.jpg";
            var divCol = '<div class="col result-col" id="IdCol">' +
                '    <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" id="IdLink" class="result-link">' +
                '        <img src="' + path + '" alt="" class="img-fluid result-image" />' +
                '    </a>' +
                '</div>';

            $('.result-row').append(divCol);

            // if (myInput[i] === "é" || myInput[i] === "è" || myInput[i] === "ê" || myInput[i] === "ë" ) {
            //     var divCol = '<div class="col result-col" id="IdCol">' +
            //         '    <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" id="IdLink" class="result-link">' +
            //         '        <img src="assets/images/letters/E/E1.jpg" alt="" class="img-fluid result-image" />' +
            //         '    </a>' +
            //         '</div>';
            //
            //     $('.result-row').append(divCol);
            // }
        }

        form1Valid = true;

    }
    CheckFormulaire();

});

$('#section-background').hide();
function CheckFormulaire(){
    if(form1Valid === true){
        $('#section-background').show();
    } else{
        $('#section-background').hide();
    }
}


function ContientChiffre(str) {
    return (/[0-9]/.test(str));
}

var $radios = $('input[name="options"]');
$radios.change(function() {
    var radioValue = $("input[name='options']:checked").val();

    if(radioValue === "white") {
        $('#bg-result').css('background-image', 'url("assets/images/background/blanc.jpg")');
    }
    else if(radioValue === "blue") {
        $('#bg-result').css('background-image', 'url("assets/images/background/bleu.jpg")');
    }
    else if(radioValue === "darkblue") {
        $('#bg-result').css('background-image', 'url("assets/images/background/bleuFonce.jpg")');
    }
    else if(radioValue === "gray") {
        $('#bg-result').css('background-image', 'url("assets/images/background/gris.jpg")');
    }
    else if(radioValue === "black") {
        $('#bg-result').css('background-image', 'url("assets/images/background/noir.jpg")');
    }
    else if(radioValue === "pink") {
        $('#bg-result').css('background-image', 'url("assets/images/background/rose.jpg")');
    }
    else if(radioValue === "red") {
        $('#bg-result').css('background-image', 'url("assets/images/background/rouge.jpg")');
    }
    else {
        $('#bg-result').css('background-image', 'url("assets/images/background/rose.jpg")');
    }
});



// path_pattern = 'images/letters/<letter>/<letter>1';
// for(var i=0; i < myInput.length; i++) {
//     path = path_pattern.replace('<letter>',  myInput[i]);
// }

// let motUsagerValid = false;
//
// $("#form1-error").hide();
// $('.result-col').hide();
//
// $( "#form1" ).submit(function(e) {
//     e.preventDefault();
//     let nomUsager  = $( "#lettres" ).val().split('');
//
//     if(nomUsager.length < 3){
//         $("#form1-error").show().append('Votre mot doit contenir un minimum de 3 caractères! ');
//         motUsagerValid = false;
//     } else if(nomUsager.length > 12){
//         $("#form1-error").show().append('Votre mot doit contenir un maximum de 12 caractères! ');
//         motUsagerValid = false;
//     } else if (nomUsager.length = ContientChiffre(nomUsager)){
//         $("#form1-error").show().append('Votre mot ne doit pas contenir de chiffres! ');
//         motUsagerValid = false;
//     } else {
//         motUsagerValid = true;
//     }
//
//     // CheckFormulaire();
// });
//
// if (motUsagerValid === true) {
//     for (let i = 0; i < nomUsager.length; i++) {
//         var path = "assets/images/letters/" + nomUsager[i] + "/" + nomUsager[i] + "1.jpg";
//         $('.default-col').hide();
//         $('.result-row').append('<div class="col col result"><a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" class="result-link"><img src="" alt="" class="img-fluid result-image"></a></div>');
//         $('.result-image').attr('src', path);
//
//         if(nomUsager[i] === "é") {
//             $('.result-image').attr('src','assets/images/letters/E/E1.jpg');
//         }
//     }
// }


// $.each(tabInput, function (index, value) {
//     // alert(index + ': ' + value);
//     let path = "assets/images/letters/" + value.toUpperCase() + "/" + value.toUpperCase() + "1.jpg";
//     $('.default-col').hide();
//
//     var divCol = '<div class="col result-col" id="IdCol">' +
//         '    <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" id="IdLink" class="result-link">' +
//         '        <img src="' + path + '" alt="" class="img-fluid result-image" />' +
//         '    </a>' +
//         '</div>';
//
//     $('.result-row').append(divCol);
// });
//
// var dir = "assets/images/letters/";
// var fileextension = ".jpg";
//
// var i = 1;
// var n = 5;
//
// for(j=1;j<n;j++){
//     imageloop(i);
// };
//
// function imageloop(i){
//     $("<img />").attr('src', dir + myInput[i] + i + fileextension ).appendTo(".modal-col");
// }
