(function($){
	$(function(){

	    $('.button-collapse').sideNav();

	    $('#schedule-button1').click(function() {
	        $('#day1-schedule').modal();
	    });

	    $('#schedule-button2').click(function() {
	        $('#day2-schedule').modal();
	    });

	    $('#contact-button').click(function() {
	        $('#contact-modal').modal();
	    });

	    $('#signup-button').click(function() {
	        $('#signup-modal').modal();
	    });

	    $('#register-button').click(function() {
	        $('#register-modal').modal();
	    });

	}); // end of document ready
})(jQuery); // end of jQuery name space