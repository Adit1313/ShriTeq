(function($){
	$(function(){

	    $('.button-collapse').sideNav();
	    $('.parallax').parallax();

	    $('#modal-button').click(function() {
	        $('#modal1').modal();
	    });

	    $('#modal-button2').click(function() {
	        $('#modal2').modal();
	    });

	}); // end of document ready
})(jQuery); // end of jQuery name space