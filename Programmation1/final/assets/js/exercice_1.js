$('#first_form').submit(function(e) {
    e.preventDefault();
    var myInput = $('#lettres').val();
    var alphabet = /^[a-zA-Z]+$/;

    $("#form1-error").hide();
    $('.result-col').hide();

    if (myInput.length < 3) {
        $("#form1-error").show().append('Votre mot doit contenir un minimum de 3 caractères!');
        return false;
    }
    if(myInput.match(alphabet)) {
        for (let i = 0; i < myInput.length; i++) {
            path = "images/letters/" + myInput[i] + "/" + myInput[i] + "1.jpg";

            $('.result-col').show().append('<a href="#exampleModal" data-toggle="modal" data-target="#exampleModal" class="result-link"><img src="" alt="" class="img-fluid result-image"></a>');
            $('.result-image').attr('src', path);

            if(myInput[i] === "é") {
                $('.result-image').attr('src','assets/images/E/E1.jpg');
            }

        }
    } else {
        $("#form1-error").show().append('Votre mot ne doit pas contenir de chiffres!');
    }
});




// path_pattern = 'images/letters/<letter>/<letter>1';
// for(var i=0; i < myInput.length; i++) {
//     path = path_pattern.replace('<letter>',  myInput[i]);
// }



