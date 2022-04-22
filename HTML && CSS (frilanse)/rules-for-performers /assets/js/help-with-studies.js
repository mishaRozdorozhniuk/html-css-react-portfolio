$(document).ready(function() {
    if ($(window).width() < 562) {
        $('.articles-inner-slider').addClass("slick");
        $('.slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            mobileFirst: true,
        });
    } else {
        $('.slick').slick('unslick')
        $('.articles-inner-slider').removeClass("slick");
    }
    $(window).resize(function() {
        if ($(window).width() < 562) {
            $('.articles-inner-slider').addClass("slick");
            $('.slick').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                mobileFirst: true,
            });
        } else {
            $('.slick').slick('unslick')
            $('.articles-inner-slider').removeClass("slick");
        }
    });
});