(function($){
	$(function(){

	    $('.button-collapse').sideNav();

	    $('#prelim-btn').click(function() {
	    	$('#prelim-modal').modal();
	    });

	    $('#schedule-button1').click(function() {
	        $('#day1-schedule').modal();
	    });

	    $('#schedule-button2').click(function() {
	        $('#day2-schedule').modal();
	    });

	    $('#schedule-button3').click(function() {
	    	$('#day3-schedule').modal();
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

	    $('#jquiz-button').click(function() {
	    	console.log("Hello");
	    	$('#junior-quiz-modal').modal();
	    });

	    $("a").on('click', function(event) {

    		if (this.hash !== "") {
      			event.preventDefault();
			    var hash = this.hash;
			    $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
		        	window.location.hash = hash;
		    	});
    		}
  		});

	});
})(jQuery);