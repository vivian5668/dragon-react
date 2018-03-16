
$(document).ready(function(){
	$('#loginBox').on('submit', function(e) {
		$('#loginModal').modal('hide');
	});

	$('#signupBox').on('submit', function(e) {
		$('#signupModal').modal('hide');
	})
})