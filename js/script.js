$(function(){
	$('.sphere').each(function(i, sp) {
		var color = $(sp).data('color');
		$(sp).css('background-color', color);
	})

	$('.module').slick({
		infinite: false
	});

	$('.gallery').slick({
		slidesToShow: 2
	});

	$('.gallery__item').fancybox();

	function bubles() {
		var scene = $('#scene').get(0),
			scene2 = $('#scene2').get(0);

		var parallaxInstance = new Parallax(scene),
			parallaxInstance2 = new Parallax(scene2);
	}

	bubles();

	window.sr = ScrollReveal();

	sr.reveal($('.section__title h2, .section__cell, .about__text, .about__person-img, .events__info, .section .btn'));
	sr.reveal($('.gallery'), { scale: 1 } );

	sr.reveal($('.welcome .sphere'), 520);
	sr.reveal($('.mission .sphere'));
	sr.reveal($('.point'), 200);
	sr.reveal($('.welcome__logo > *'), { duration: 1000, scale: .5 }, 200)
	sr.reveal($('.welcome__slogan'), { delay: 1000 })
	sr.reveal($('.teachers__member'), 100)
	sr.reveal($('.steps__item'), 100)
	sr.reveal($('.request .form > *'), 100)
	sr.reveal($('.quest__item'), 100)
	sr.reveal($('.footer__cell'), 100)
	
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
});