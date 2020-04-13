let form1Valid = false;
let hasCaracter = false;
let selectedLetter;

// CREATE CANVAS FORM

$('#form1').submit(function(e) {
    e.preventDefault();
    var myInput = $('#lettres').val();

    $("#form1-error").hide();
    $('.result-col').hide();

    // ERROR MESSAGES

    $('#form1-error').empty();
    if (myInput.length < 3) {
        $("#form1-error").show().append('Votre mot doit contenir un minimum de 3 caractères!');
        form1Valid = false;
    } else if (myInput.length > 12) {
        $("#form1-error").show().append('Votre mot doit contenir un maximum de 12 caractères!');
        form1Valid = false;
    } else if (myInput.length === ContientChiffre(myInput)) {
        $("#form1-error").show().append('Votre mot ne doit pas contenir de chiffres!');
        form1Valid = false;
    } else if (myInput.length === ContientCaracteres(myInput)) {
        $("#form1-error").show().append('Remplacez votre caractère special par "*".');
        form1Valid = false;

    } else {
        form1Valid = true;

        // LETTER PHOTO LOOP

        for (let i = 0; i < myInput.length; i++) {
            let path = "assets/images/letters/" + myInput[i] + "/" + myInput[i] + "1.jpg";
            let divCol =
                '<div class="col result-col">' +
                '    <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" id="modal-'+ i +'" class="result-link" onclick=setModalImages("'+ myInput[i]+'")>' +
                '        <img src="' + path + '" alt="" class="img-fluid result-image img-class' + i + ' result-image-' + myInput[i] + '"/>' +
                '    </a>' +
                '</div>';

            $('.result-row').append(divCol);

            if (myInput.charAt(i) === "é" || myInput.charAt(i) === "è" || myInput.charAt(i) === "ê" || myInput.charAt(i) === "ë" ) {
                $('.img-class' + i).attr('src', 'assets/images/letters/E/E1.jpg');
            }
            else if (myInput.charAt(i) === "à" || myInput.charAt(i) === "â") {
                $('.img-class' + i).attr('src', path).replace(path, 'assets/images/letters/A/A1.jpg' );
            }
            else if (myInput.charAt(i) === "ù" || myInput.charAt(i) === "û" || myInput.charAt(i) === "ü") {
                $('.img-class'+ i).attr('src', 'assets/images/letters/U/U1.jpg');
            }
            else if (myInput.charAt(i) === "*") {
                $('.img-class' + i ).attr('src', 'assets/images/letters/CS/CS1.jpg');
                hasCaracter= true;
            }

            $(".result-col a").click(function() {
                var index = $(".result-col a").index(this);
                // $(this).find('.result-image').addClass("selected").siblings('a > img').removeClass('selected');
                $(this).addClass("selected").parent().siblings().children().removeClass('selected');
                console.log("Index " + index + " was clicked");
            });
        }
    }
    CheckFormulaire();
});


$('#section-background').addClass('disabled');
$('#section-print').addClass('disabled');
$('.default-col').show();

function CheckFormulaire(){
    if(form1Valid === false) {
        $('.default-col').show();

    }
    if(form1Valid === true){
        $('#section-background').removeClass('disabled');
        $('.default-col').hide();
    }
}

function ContientChiffre(str) {
    return (/[0-9]/.test(str));
}

function ContientCaracteres(str) {
    return (/[$%/_@#§!(){}°€£;:,?^]/.test(str));
}



function setModalImages(lettre) {

    // $('.result-link').each(function() {
    //     let selector = $(this).attr('id');
    //     selectorTab.push(selector);
    //     // console.log(selectorTab)
    // });
    // $.each(selectorTab,function() {
    //     console.log('this is ' + this);
    //     $(this).index('')
    // });

    // var newItems = $.map(selectorTab, function(i) {
    //     return i + 1;
    //     // console.log(newItems);
    // });


    $('.modal-row').empty();
    selectedLetter = lettre;

    for (let j = 1; j <= 5; j++) {
        let modalCol =
            '<div class="col modal-col">' +
            ' <input type="radio" name="new-pic" value="'+ j +'" id="' + j + '">' +
            ' <label for="'+ j +'"><img src="" alt="" class="img-fluid result-image modal-img-class'+ j +'"/></label>' +
            '</div>';

        $('.modal-row').append(modalCol);

        if(hasCaracter === true) {
            $('.modal-col .modal-img-class'+ j).attr( 'src', 'assets/images/letters/CS/CS'+ j +'.jpg' );
        }
        else {
            $('.modal-col .modal-img-class' + j).attr( 'src', 'assets/images/letters/' + lettre + "/" + lettre + j + '.jpg' );
        }
    }

}

//GET NEW IMAGE FROM MODAL

$('#form2').submit(function(e) {
    e.preventDefault();
    let radio = $("input[name='new-pic']:checked").val();

    if(radio){
        if(hasCaracter === true) {
            $('.selected .result-image').attr( 'src', 'assets/images/letters/CS/CS' + radio + '.jpg' );
        }
        else{
            $( '.selected .result-image').attr( 'src', 'assets/images/letters/' + selectedLetter + "/" + selectedLetter + radio + '.jpg' );
        }
    }
    $('#exampleModal').modal('toggle');
});

// CHANGE BACKGROUND

let $radios = $('input[name="options"]');
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

    if(radioValue) {
        $('#section-print').removeClass('disabled');
    }
});

// PRINT RESULTS
function printData() {
    let divToPrint=document.getElementById("printTable").innerHTML;
    newWin= window.open("", '');
    newWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css" media="all"><link rel="stylesheet" type="text/css" href="assets/css/style.css" media="all"></head>');
    newWin.document.write('<body><div class="container">' + divToPrint + '</div><script src="assets/js/jquery-3.4.1.js"></script><script src="bootstrap/js/bootstrap.js"></script><script src="assets/js/exercice_1.js"></script></body></html>');
    newWin.print();
    newWin.close();
}

$('.js-print-link').on('click',function(){
    printData();
});