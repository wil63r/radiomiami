//  Mobile Menu Toggle
$(function () {
	$('.toggle').on('click', function () {
		$('nav').toggleClass('show');
	});
});

//  Go to Top Scroll Animation
$(document).ready(function(){
	$('#up').on('click',function (e) {
		e.preventDefault();
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		}
	});
});

//  Show Go to Top Button
$(document).ready(function(){ 
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 350) { 
			$('.arriba').addClass('show'); 
		} else { 
			$('.arriba').removeClass('show');  
		} 
	}); 
	$('.arriba').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); 
		return false; 
	}); 
});

//  Open Search Screen
// $(function () {
// 	$('#search-btn').on('click', function () {
// 		$( ".site-search" ).addClass( "search-open" );
// 	});
// 	$('.search-close').on('click', function () {
// 		$(".site-search").removeClass( "search-open" );
// 	});
// });

//  Featured News Slider
$(function() {
	var auto = true;
	var pause = 7000;
	var $this = $('#slider');
	var slidesCont = $this.children('.slides-container');
	var slides = slidesCont.children('.slide');
	var arrowsCont = $this.children('.arrows');
	var prevSlide = arrowsCont.children('.prev');
	var nextSlide = arrowsCont.children('.next');
	var slidesCount = slides.length;
	var currentSlide = slides.first();
	var currentSlideIndex = 1;
	var autoPlay = null;

	slides.not(':first').css('display', 'none');
	currentSlide.addClass('active');
	function fadeNext() {
		currentSlide.removeClass('active').fadeOut(700);
		if(currentSlideIndex == slidesCount) {
			currentSlide = slides.first();
			currentSlide.delay(500).addClass('active').fadeIn(700);
			currentSlideIndex = 1;
		} else {
			currentSlideIndex++;
			currentSlide = currentSlide.next();
			currentSlide.delay(500).addClass('active').fadeIn(700);
		}
	}
	function fadePrev() {
		currentSlide.removeClass('active').fadeOut(700);
		if(currentSlideIndex == 1) {
			currentSlide = slides.last();
			currentSlide.delay(500).addClass('active').fadeIn();
			currentSlideIndex = slidesCount;
		} else {
			currentSlideIndex--;
			currentSlide = currentSlide.prev();
			currentSlide.delay(500).addClass('active').fadeIn(700);
		}
	}
	function AutoPlay() {
		clearInterval(autoPlay);
		if(auto == true)
			autoPlay = setInterval(function() {fadeNext()}, pause);
	}
	$(nextSlide).click(function(e) {
		e.preventDefault();
		fadeNext();
		AutoPlay();
	});

	$(prevSlide).click(function(e) {
		e.preventDefault();
		fadePrev();
		AutoPlay();
	});
	AutoPlay();
});