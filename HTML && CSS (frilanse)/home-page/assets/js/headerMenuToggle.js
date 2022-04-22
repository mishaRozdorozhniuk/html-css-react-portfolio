$('.header__menu').click(function() {
    $('.lines').toggleClass("active")
})

$('.modal-backdrop').click(function() {
    $('.lines').removeClass('active')
})

$('#exampleModal').click(function() {
    $('.lines').removeClass('active')
})

$('.get-consultation').click(function() {
    $('#staticBackdrop').addClass('show')
})

$('.header__menu').click(function() {
    $('#exampleModal').toggleClass('show');
})

$('#dropdownMenuButton1').click(function() {
    $('.dropdown-menu').toggleClass('show-lg');
})

$('#dropdownMenuButton1').click(function() {
    $('.dropdown-menu').toggleClass('show-lg');
})

$('#dropdownMenuButton2').click(function() {
    $('.dropdown-menu').toggleClass('show-sm');
})

$('#dropdownMenuButton2').click(function() {
    $('.dropdown-menu').toggleClass('show-sm');
})