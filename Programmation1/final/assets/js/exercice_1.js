let form1Valid = false;

$('#form1').submit(function(e) {
    e.preventDefault();
    var myInput = $('#lettres').val();

    $("#form1-error").hide();
    $('.result-col').hide();

    // ERROR MESSAGES

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
                '    <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" id="IdLink" class="result-link">' +
                '        <img src="' + path + '" alt="" class="img-fluid result-image" id="IdImg" />' +
                '    </a>' +
                '</div>';
            let modalCol = '<div class="col modal-col" id="ModalColId">' +
                '        <img src="' + path + '" alt="" class="img-fluid result-image" id="IdImg" />' +
                '</div>';
            let srcpath = 1;

            $('.result-row').append(divCol);

            if (myInput.charAt(i) === "é" || myInput.charAt(i) === "è" || myInput.charAt(i) === "ê" || myInput.charAt(i) === "ë" ) {
                $('#IdImg').attr('src', 'assets/images/letters/E/E1.jpg');
            }
            else if (myInput.charAt(i) === "à" || myInput.charAt(i) === "â") {
                $('#IdImg').attr('src', path).replace(path, 'assets/images/letters/A/A1.jpg' );
            }
            else if (myInput.charAt(i) === "ù" || myInput.charAt(i) === "û" || myInput.charAt(i) === "ü") {
                $('#IdImg').attr('src', 'assets/images/letters/A/A1.jpg');
            }
            else if (myInput.charAt(i) === "&") {
                $('#IdImg').attr('src', 'assets/images/letters/CS/CS1.jpg');
            }
            else {
            }
            // MODAL CAROUSEL LOOP
            for (let j = 0; j < 5; j++) {
                srcpath+=1;
                $('.modal-row').append(modalCol);
                $("#ModalImg").attr( 'src', 'assets/images/letters/' + myInput[i] + "/" + myInput[i] + srcpath[i] + '.jpg' );
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


