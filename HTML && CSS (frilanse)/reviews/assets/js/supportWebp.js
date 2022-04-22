$(document).ready(function() {
    if ($(window).width() < 376) {
        $('.articles__body').addClass("slick");
        $('.slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            mobileFirst: true,
        });
    } else {
        $('.slick').slick('unslick')
        $('.articles__body').removeClass("slick");
    }
    $(window).resize(function() {
        if ($(window).width() < 376) {
            $('.articles__body').addClass("slick");
            $('.slick').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                mobileFirst: true,
            });
        } else {
            $('.slick').slick('unslick')
            $('.articles__body').removeClass("slick");
        }
    });
});