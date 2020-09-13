var final_array = [];

var count = 0

var index = 0

var imgs = [
    "images/arcenciel1.png",
    "images/arcenciel2.png",
    "images/arcenciel3.png",
    "images/arcenciel4.png",
    "images/arcenciel5.png",
    "images/arcenciel6.png",

]

var ordered_puzzle =
    [
        "images/arcenciel1.png",
        "images/arcenciel2.png",
        "images/arcenciel3.png",
        "images/arcenciel4.png",
        "images/arcenciel5.png",
        "images/arcenciel6.png",

    ]

console.log(ordered_puzzle);

for (let i = 0; i < 6; i++) {
    $('#melangees').append("<img src=" + imgs[i] + " alt=puzzle tiles></img>");
}

function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

$('#button').click(function () {

    $("img").remove()

    new_imgs = shuffle(imgs)

    for (let i = 0; i < new_imgs.length; i++) {

        $('#melangees').append("<img src=" + new_imgs[i] + " alt=puzzle tiles></img>");

        $("img").click(function () {

            if ($(this).parent().attr('id') == "melangees") {


                $(this).appendTo("#rangees");

                src = $(this).attr("src")

                final_array[index] = src;
                console.log(final_array)
                index++


                if (final_array.length === 6) {

                    console.log(ordered_puzzle);

                    for (let j = 0; j < final_array.length; j++) {
                        console.log(final_array[j])

                        if (ordered_puzzle[j] === final_array[j]) {
                            console.log('ddd')
                            count++
                            console.log(count);

                        }
                    }

                    if (count === 6) {
                        $("body").append('<p></p>')

                        $('p').append('<h1>')
                        $('h1').append('Vous avez gagné');
                        $('h1').css('color', 'green')
                    }

                    else {
                        $("body").append('<p></p>')
                        $('p').append('<h1>')
                        $('h1').append('Vous avez perdu');
                        $('h1').css('color', 'red')
                    }
                }

            }
        })
    }
})

console.log(final_array)
