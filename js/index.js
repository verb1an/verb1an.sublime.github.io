$(document).ready(function () {

	// Изменение навигации при скролле
	//620
	let mins =  ($(window).width() > 430 ? 620 : 520);
	$(window).scroll(function () {
		if($(this).scrollTop() < mins) {
			$('.menu').removeClass('fx');
		}else {
			$('.menu').addClass('fx');
		}
	});

	$('.totop').click(function () {
		window.scrollTo(0, 0);
	});

	$('.nav .item').click(function (e) {
		e.preventDefault();
		$('.nav .item').removeClass('current');
		$(this).addClass('current');

		window.scrollTo(0, $($(this).attr('href')).offset().top - 65);

		$('.nav').removeClass('active');
		$('html').removeClass('overhide');

	});

	$('.bar').click(function () {
		$('.nav').toggleClass('active');
		$('html').toggleClass('overhide');
	});

	filter('all');
	$('.project__nav .nav__item').click(function () {
		$('.project__nav .nav__item').removeClass('current');
		$(this).addClass('current');

		filter($(this).attr('data-setfilter'));
	});

	$('#projects .content .item').click(function () {
		$('#projects .content').css('height', '600px');
		$('#projects .content .item').removeClass('visible active');
		$(this).addClass('visible active');
	});
})

function filter(category) {
	$('#projects .content').css('height', 'auto');
	$('#projects .content .item').removeClass('visible active');
	$('#projects .content .item').each(function () {
		let thisCategory = $(this).attr('data-getfilter').split(' ');
		if(thisCategory.includes(category)) {
			$(this).addClass('visible');
		}
	});
}

