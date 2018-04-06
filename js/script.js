$(function(){
	$('.sphere').each(function(i, sp) {
		var color = $(sp).data('color');
		$(sp).css('background-color', color);
	})

	$('.module').each(function(i, module) {
		if ($(module).children().length > 1) {
			$(module).slick({
				infinite: false
			});
		}
	});

	$('.gallery').slick({
		slidesToShow: 2,
		draggable: false
	});

	$('.gallery__item').on('click', function() {
		var img = $(this).find('img').clone();

		$.fancybox.open(img)
	});

	function bubles() {
		var scene = $('#scene').get(0),
			scene2 = $('#scene2').get(0);

		var parallaxInstance = new Parallax(scene),
			parallaxInstance2 = new Parallax(scene2);
	}

	bubles();

	window.sr = ScrollReveal();

	// анимации
	sr.reveal('.section__title h2, .section__cell, .about__text, .about__person-img, .events__info, .section .btn');
	// sr.reveal('.gallery');

	sr.reveal('.welcome .sphere', 520);
	sr.reveal('.mission .sphere');
	sr.reveal('.welcome .point', 200);
	sr.reveal('.welcome__logo > *', { duration: 1000, scale: .5 }, 200);
	sr.reveal('.welcome__slogan', { delay: 1000 });
	sr.reveal('.teachers__member');
	sr.reveal('.steps__item');
	sr.reveal('.request .form > *');
	sr.reveal('.quest__item');
	sr.reveal('.footer__cell');
	
	$('[data-modal]').on('click', function(e) {
		e.preventDefault();

		var id = $(this).data('modal'),
			modal = $('#'+id);

		if (id === 'text-modal') {
			var item = $(this).closest('.section__row'),
				caption = $(item).find('.caption').text(),
				content = $(this).parent().find('.module__content').html();

			$(modal).find('.modal__title').text(caption);
			$(modal).find('.modal__content').html(content);
		} else if (id === 'answer-modal') {
			var item = $(this).closest('.quest__item'),
				caption = $(item).find('.quest__title span').text(),
				content = $(item).find('.quest__content-full').html();

			$(modal).find('.modal__title').text(caption);
			$(modal).find('.modal__content').html(content);
		} else if (id === 'teacher-modal') {
			var item = $(this).closest('.teachers__member'),
				caption = $(item).find('.teachers__member-name').text(),
				content = $(item).find('.teachers__text-full').html(),
				img = $(item).find('.teachers__member-img img').clone();

			$(modal).find('.modal__title').text(caption);
			$(modal).find('.modal__content').html(content).prepend(img);
		}

		$(modal).bPopup();

	});

	$('.form__submit').on('click', function(e) {
		e.preventDefault();

		var form = $(this).closest('form'),
			message = $(form).find('.form__message').get(0);

		$(message).addClass('show');

		setTimeout(function() {
			$(message).removeClass('show');
		}, 3000);
	});

	$('select').niceSelect();

	$('.reviews').slick({
		slidesToShow: 4
	});

	$('[data-scroll]').on('click', function(e) {
		e.preventDefault();
		
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	});
});