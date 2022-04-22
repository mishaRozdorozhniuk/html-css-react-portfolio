$(document).ready(function() {
    if ($(window).width() < 600) {
        $('.reviews-item-wr').addClass("slick");
        $('.slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
        });
    } else {
        $('.slick').slick('unslick')
        $('.reviews-item-wr').removeClass("slick");
    }
    $(window).resize(function() {
        if ($(window).width() < 600) {
            $('.reviews-item-wr').addClass("slick");
            $('.slick').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
            });
        } else {
            $('.slick').slick('unslick')
            $('.reviews-item-wr').removeClass("slick");
        }
    });
});