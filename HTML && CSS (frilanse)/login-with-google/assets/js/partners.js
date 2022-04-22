$('.partners-popup-subject').on('click', function() {
    $(this).toggleClass('choosen choosen-img');
});

$('.choose-theme-of-subject').on('click', () => {
    $('.partners-studies-work-popup').addClass('show-popup')
    $('.partners-studies-work-popup').removeClass('hide-popup')
})

$('.close-work-popup').on('click', () => {
    $('.partners-studies-work-popup').addClass('hide-popup')
    $('.partners-studies-work-popup').removeClass('show-popup')
})

$('.choose-teacher-subject').on('click', () => {
    $('.partners-work-popup-teacher').addClass('show-popup-teacher')
    $('.partners-work-popup-teacher').removeClass('hide-popup')
})

$('.close-work-popup').on('click', () => {
    $('.partners-work-popup-teacher').addClass('hide-popup')
    $('.partners-work-popup-teacher').removeClass('show-popup-teacher')
})