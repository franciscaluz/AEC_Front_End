let form1Valid = false;
var selectedLetter;

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
    } else if (myInput.length = ContientChiffre(myInput)) {
        $("#form1-error").show().append('Votre mot ne doit pas contenir de chiffres!');
        form1Valid = false;
    } else {
        form1Valid = true;

        // LETTER PHOTO LOOP

        for (let i = 0; i < myInput.length; i++) {
            let path = "assets/images/letters/" + myInput[i] + "/" + myInput[i] + "1.jpg";
            let divCol = '<div class="col result-col" id="IdCol">' +
                '    <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" id="IdLink" class="result-link img-class" onclick=setModalImages("'+ myInput[i]+'")>' +
                '        <img src="' + path + '" alt="" class="img-fluid result-image img-class' + i + ' result-image-' + myInput[i] +'"/>' +
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
                $('.img-class'+ i).attr('src', 'assets/images/letters/A/A1.jpg');
            }
            else if (myInput.charAt(i) === "&") {
                $('.img-class' + i ).attr('src', 'assets/images/letters/CS/CS1.jpg');
            }
        }
    }
    CheckFormulaire();

});


$('#section-background').hide();
$('.default-col').show();

function CheckFormulaire(){
    if(form1Valid === false) {
        $('.default-col').show();

    }
    if(form1Valid === true){
        $('#section-background').show();
        $('.default-col').hide();

    }
}

function ContientChiffre(str) {
    return (/[0-9]/.test(str));
}

function ContientCaracteres(str) {
    return (/[$%/_@#§!(){}°*€£-]/.test(str));
}

function setModalImages(lettre) {
    selectedLetter = lettre;
    $('.modal-row').empty();
    for (let j = 1; j <= 5; j++) {
        let modalCol = '<div class="col modal-col" id="ModalColId">' +
            ' <input type="radio" name="new-pic" value="'+ j + '">' +
            ' <img src="" alt="" class="img-fluid result-image img-class' + j + '"/>' +
            '</div>';
        $('.modal-row').append(modalCol); $('.modal-col .img-class' + j).attr( 'src', 'assets/images/letters/' + lettre + "/" + lettre + j + '.jpg' );
    }
}

$('#form2').submit(function(e) {
    e.preventDefault();
    var radioValue = $("input[name='new-pic']:checked").val();
    if(radioValue){
        $('.result-col .result-image' + selectedLetter).attr( 'src', 'assets/images/letters/' + selectedLetter + "/" + selectedLetter + radioValue + '.jpg' );
    }
});


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

$('#btn-print').click(function(){
    $(".result-content").print();
});