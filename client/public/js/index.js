
$(document).ready(function(){
		$('#loginBox').on('submit', function(e) {
			// $('#loginSubmitButton').attr('data-dismiss', 'modal')
			$('#loginModal').modal('toggle');
			// setTimeout(function() {
				
				// $('#page-top').removeClass('modal-open')

				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
			// }, 500)
		});

		$('#signupBox').on('submit', function(e) {
			// $('#signupSubmitButton').attr('data-dismiss', 'modal')
			$('#signupModal').modal('toggle');
			// setTimeout(function() {
				
				$('#page-top').removeClass('modal-open')
				$('.modal-backdrop').remove();
			// }, 500)
		})
})
