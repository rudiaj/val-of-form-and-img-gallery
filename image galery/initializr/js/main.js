

$( document ).ready(function() {

	var currentSlide = 1;

	
	var $slider = $('#slider');
	var $slideContainer = $('.slides', $slider);
	var $slides = $('.slide', $slider);

	var interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-=720'}, 1000, function() {
				if (++currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, 2000);
	}
	function pauseSlider() {
		clearInterval(interval);
	}

	$slideContainer
	.on('mouseenter', pauseSlider)
	.on('mouseleave', startSlider);

	startSlider();


});
