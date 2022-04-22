$('.modal-second-step').click(function() {
    $('.test1').removeClass('active')
    $('.modal-tab-active-first').removeClass('active-tab')
})

$("#staticBackdropBtn").click(function() {
    $('.test2').addClass('active')
    $('.modal-tab-active-second').addClass('active-tab')
})

$('.modal-second-step').click(function() {
    $('.modal-body').removeClass('top')
})

$('.modal-first-step-btn').click(function() {
    $('.modal-body').addClass('top')
})

$('.learning-order-select').click(function() {
    $('.order-select-group').addClass('flex-column-reverse-custom')
    $('.learning-order-select').addClass('active')
    $('.learning-order-select').addClass('active-btn')
    $('.first-part-of-modal').addClass('active')
    $('.teachers-order-select').removeClass('active')
    $('.teachers-order-select').removeClass('active-btn')
    $('.second-part-of-modal').removeClass('active')
})

$('.teachers-order-select').click(function() {
    $('.order-select-group').removeClass('flex-column-reverse-custom')
    $('.teachers-order-select').addClass('active active-btn')
    $('.teachers-order-select').addClass('active-btn')
    $('.second-part-of-modal').addClass('active')
    $('.learning-order-select').removeClass('active')
    $('.learning-order-select').removeClass('active-btn')
    $('.first-part-of-modal').removeClass('active')
})

function limitChars(myObject, max, leftChars) {
    $(myObject).keydown(function() {
        var count = $(this).val().length;
        var num = max - count;

        if (num > 0) {
            $(leftChars).text('Можно ввести символов: ' + num);
            $(this).removeClass('type');
        } else {
            $(leftChars).text('Достигнут лимит символов');
            $(this).addClass('type');
        }
    });
}

$(document).ready(function() {
    var myObject = 'textarea#topic';
    var mySecObject = 'textarea#description'
    var myThirdObject = 'textarea#descriptionteacher'

    var max = 250;
    var descMax = 1000;
    var descTeacherMax = 1000;

    var leftChars = '#leftChars';
    var leftCharsDesc = '#leftCharsDesc';
    var leftCharsDescTeachet = '#leftCharsTeach';

    limitChars(myObject, max, leftChars);
    limitChars(mySecObject, descMax, leftCharsDesc);
    limitChars(myThirdObject, descTeacherMax, leftCharsDescTeachet);
});

$(function() {
    $(".label-check-inp").click(function() {
        $("#staticBackdropBtn").attr("disabled", !this.checked);
    });
});

$(document).ready(function() {
    $('.field input').keyup(function() {
        var empty = false;

        $('.field input').each(function() {
            if ($(this).val().length == 0) {
                $("#staticBackdropBtn").attr("disabled", false);
                empty = true;
            }
        });

        if (empty) {
            $('#staticBackdropBtn').attr('disabled', 'disabled');
        } else {
            $('#staticBackdropBtn').attr('disabled', empty);
        }
    });
});


$(function() {
    $('textarea#description').keyup(function() {
        $('textarea#description').addClass('textarea-border-t')
        if ($('#leftCharsDesc').text() === 'Достигнут лимит символов') {
            $('textarea#description').addClass('textarea-border')
        } else {
            $('textarea#description').removeClass('textarea-border')
        }
    })

    $('textarea#topic').keyup(function() {
        $('textarea#topic').addClass('textarea-border-t-topic')
        if ($('#leftChars').text() === 'Достигнут лимит символов') {
            $('textarea#topic').addClass('textarea-border')
        } else {
            $('textarea#topic').removeClass('textarea-border')
        }
    })

    $('textarea#descriptionteacher').keyup(function() {
        $('textarea#descriptionteacher').addClass('textarea-border-t-teacher')
        if ($('#leftCharsTeach').text() === 'Достигнут лимит символов') {
            $('#descriptionteacher').addClass('textarea-border')
        } else {
            $('textarea#descriptionteacher').removeClass('textarea-border')
        }
    })
})