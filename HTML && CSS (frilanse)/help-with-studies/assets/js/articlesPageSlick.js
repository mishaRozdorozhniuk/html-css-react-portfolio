// Пришлось убрать asynk await и заменить стрелочные функции на function, так как IE с этим всем не работает, как оказалось

function supportsWebp() {
    if (!self.createImageBitmap) return false;

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = fetch(webpData).then(function(r) { return r.blob() });
    return createImageBitmap(blob).then(function() { return true }, function() { return false });
}

(function() {
    if (supportsWebp()) {
        return
    } else {
        alert('Этот браузер не поддерживает фотографии с разширением .webp,можете скопировать ссылку,и скачать браузер который поддерживает: https://www.google.com.ua; https://www.mozilla.org; https://www.opera.com');
    }
})();

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