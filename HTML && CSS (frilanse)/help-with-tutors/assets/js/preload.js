function preloader() {
    $('#loading').hide();
   }
$(window).on('load', function() {
    setTimeout(preloader, 2000);
})