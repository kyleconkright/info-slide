let simpleSlide = function(thumb, target, options = {}) {

	let defaults = {
		direction: 'ltr',
		fade: false,
		speed: 300
	}

	let settings = Object.assign({}, defaults, options);

	let targetWidth = $('#target').parent().width();
	let boxWidthPx = $('#target li').width();
	let marginPx = $('#target li').css('margin').split('px');
	let boxMargin = parseInt(100 * marginPx[0]) / targetWidth * 2;
	let boxWidth = parseInt(100 * (boxWidthPx / targetWidth) + boxMargin ) + '%';


	
	$(thumb).on('click', (e) => {
		var txt = '<li>'+$(e.target).html()+'</li>';
		
		if(options.direction === 'rtl') {
			$(target).append(txt);
			if(options.fade) {$(target+' li').last().css({'opacity':'0'}).animate({'opacity':'1'}, settings.speed * 4);}
			$(target).animate({'right':boxWidth}, settings.speed, () => {
				$(target).css({right: '0'});
				$(target+' li').first().remove();
			});
		} else {
			$(target).prepend(txt)
			if(options.fade) {$(target+' li').first().css({'opacity':'0'}).animate({'opacity':'1'}, settings.speed * 4);}
			$(target).css({'left':'-'+boxWidth}).animate({'left':'0'}, settings.speed, () => {
				$(target+' li').last().remove();
			});	
		}

		console.log(options.fade);

	});

}