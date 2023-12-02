$(document).ready(function() {
	$('.show-menu').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.bar').toggleClass('show');
	});
});