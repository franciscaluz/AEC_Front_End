$('#first_form').submit(function(e) {
    e.preventDefault();
    var myInput = $('#lettres').val();
    var alphabet = /^[a-zA-Z]+$/;

    $("#form1-error").hide();

    if (myInput.length < 3) {
        $("#form1-error").show().append('Votre mot doit contenir un minimum de 3 caractères!');
        return false;
    }

    if(myInput.match(alphabet)) {
        $('.letter-wrapper').hide();
        for(let i=0; i < myInput.length; i++) {
            // let path = "images/letters/" + myInput[i] + "/" + myInput[i] + "1";
            $('.letter-wrapper').show();
            $('.result-image').attr('src', "images/letters/" + myInput[i] + "/" + myInput[i] + "1");
        }

    } else {
        $("#form1-error").show().append('Votre mot ne doit pas contenir de chiffres!');
    }

});




