$('.home__body-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1010,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('#question1').click(function() {
    $('#answer1').toggleClass("show-answer")
    $('#answer1').removeClass("hidden-answer")
})

$('#question2').click(function() {
    $('#answer2').toggleClass("show-answer")
    $('#answer2').removeClass("hidden-answer")
})

$('#question3').click(function() {
    $('#answer3').toggleClass("show-answer")
    $('#answer3').removeClass("hidden-answer")
})

$('#question4').click(function() {
    $('#answer4').toggleClass("show-answer")
    $('#answer4').removeClass("hidden-answer")
})

$('#question5').click(function() {
    $('#answer5').toggleClass("show-answer")
    $('#answer5').removeClass("hidden-answer")
})

$('#question6').click(function() {
    $('#answer6').toggleClass("show-answer")
    $('#answer6').removeClass("hidden-answer")
})



$('#cross1').click(function() {
    $('#answer1').addClass("hidden-answer")
    $('#answer1').removeClass("show-answer")
})

$('#cross2').click(function() {
    $('#answer2').addClass("hidden-answer")
    $('#answer2').removeClass("show-answer")
})

$('#cross3').click(function() {
    $('#answer3').addClass("hidden-answer")
    $('#answer3').removeClass("show-answer")
})

$('#cross4').click(function() {
    $('#answer4').addClass("hidden-answer")
    $('#answer4').removeClass("show-answer")
})

$('#cross5').click(function() {
    $('#answer5').addClass("hidden-answer")
    $('#answer5').removeClass("show-answer")
})

$('#cross6').click(function() {
    $('#answer6').addClass("hidden-answer")
    $('#answer6').removeClass("show-answer")
})