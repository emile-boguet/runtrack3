$("#hide").hide()

$('main').append('<p></p>')

$('p').append("le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.")

$('p').hide()

$('#button').click(function () {
    $('p').show();
    $('#button').hide()
    $("#hide").show()
})

$('#hide').click(function () {
    $('*').hide()
})