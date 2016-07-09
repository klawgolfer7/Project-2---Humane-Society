$(document).ready(function() {
	
	$('.entry').on('click', function(e) {

		var target = $(e.target)
		var src = target.attr('src')

		$('.lightbox img').attr('src', src);

		$('body').addClass('lightbox-active');

		$('.close').on('click', function() {
			$('body').removeClass('lightbox-active');
		});

	});

});