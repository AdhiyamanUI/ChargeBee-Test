$(document).ready(function(){
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
var animations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', animations);
    }
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
	$(window).on('scroll', animations);
    $(window).trigger('scroll');
});




