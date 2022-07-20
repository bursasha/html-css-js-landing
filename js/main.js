$(function()
{
	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-button slick-next"></button>',
		prevArrow: '<button type="button" class="slick-button slick-prev"></button>',
		infinite: false
	});

	$('select').styler();

	$('.header__button-menu').on('click', function(){
		$('.menu ul').slideToggle();
	});
});