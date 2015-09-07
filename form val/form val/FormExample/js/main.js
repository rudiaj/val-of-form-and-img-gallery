$(document).ready(function(){
	
	$("#licence").click(function() {
		if ($("#licence").is(':checked')) {
			$("#register").attr('disabled', false);
		} else {
			$("#register").attr('disabled', true);
		}
	});


	$("#register").click(function(event){
		event.preventDefault();

		var formIsValid = true;


		if ($("#firstname").val() === '') {
			formIsValid = false;
			$("#firstname").addClass('error');
		} else {
			$("#firstname").removeClass('error');
		}

		if ($("#lastname").val() === '') {
			formIsValid = false;
			$("#lastname").addClass('error');
		} else {
			$("#lastname").removeClass('error');
		}

		if ($("#email").val().indexOf("@") === -1) {
			formIsValid = false;
			$("#email").addClass('error');
		} else {
			$("#email").removeClass('error');
		}

		if ($("#password").val().length < 6) {
			formIsValid = false;
			$("#password").addClass('error');
		} else {
			$("#password").removeClass('error');
		}

		if ($("#password2").val() !== $("#password").val()) {
			formIsValid = false;
			$("#password2").addClass('error');
		} else {
			$("#password2").removeClass('error');
		}



		return false;

	});


});