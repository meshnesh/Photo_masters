$(document).foundation()
$(function(){

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function(e){
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});
var vid = document.getElementById("video1");
vid.muted = true;