

$(document).ready(function() {

        //settings for slider
        
        var animationSpeed = 1000;
        var pause = 4000;
        var currentSlide = 1;

        //cache DOM elements
        var $slider = $('#slider');
        var $slideContainer = $('.slides', $slider);
        var $slides = $('.slide', $slider);

        $('.button').click(function(){

            var currentWidth = $('.slide img').width();

            $('#slider .slides').css({"width": (currentWidth * 5.1)});

        	$slideContainer.animate({'margin-left': '-='+currentWidth}, animationSpeed, function() {
                    if (++currentSlide === $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0);
                    }
                });
        }); 

        $(window).resize(function () {
            $slideContainer.css('margin-left', 0);
        });


});