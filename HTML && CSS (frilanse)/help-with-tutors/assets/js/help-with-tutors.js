$(document).ready(function() {
    if ($(window).width() < 377) {
        $('.slider-inner').addClass("slick");
        $('.slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            mobileFirst: true,
        });
    } else {
        $('.slick').slick('unslick')
        $('.slider-inner').removeClass("slick");
    }
    $(window).resize(function() {
        if ($(window).width() < 377) {
            $('.slider-inner').addClass("slick");
            $('.slick').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                mobileFirst: true,
            });
        } else {
            $('.slick').slick('unslick')
            $('.slider-inner').removeClass("slick");
        }
    });
});