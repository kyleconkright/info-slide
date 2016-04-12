$('document').ready(() => {

	simpleSlide('#content li', '#target', {
		// direction: 'rtl',
		fade: true
		// speed: 1000
	});


	let bigFade = function(a) {
		$(a).css({
			'opacity':'0',
			'position':'relative',
			'top':'-16px'
		})
		.delay(100)
		.animate({
			'opacity':'1',
			'top':'0'
		});
	}

	bigFade('h1');
	bigFade('header p');


	let boxes = ($('#target li'));

	bigFade(boxes);



}); //jQuery