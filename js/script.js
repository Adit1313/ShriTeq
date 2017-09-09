document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

$(document).ready(function(){
    $('#top').sticky({topSpacing: 0})
})

$( window ).load(function() {
    $('.fillWidth' ).get(0).play();
 });

console.log($(window))
$(document).onload(function() {
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    var plz = $(window).height();

     //>=, not <=
    if (scroll >= plz) {
        $(".fortheloveofgod").addClass("navbar-fixed");
    } else if (scroll < plz) {
    	$(".fortheloveofgod").removeClass("navbar-fixed");
    }
});
});