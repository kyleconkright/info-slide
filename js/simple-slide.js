let simpleSlide = function(thumb, target, options = {}) {

	let defaults = {
		direction: 'ltr'
	}

	let settings = Object.assign({}, defaults, options);

	let targetWidth = $('#target').parent().width();
	let boxWidthPx = $('#target li').width();
	let marginPx = $('#target li').css('margin').split('px');
	let boxMargin = parseInt(100 * marginPx[0]) / targetWidth * 2;
	let boxWidth = parseInt(100 * (boxWidthPx / targetWidth) + boxMargin ) + '%';

	const SPEED = 300;

	
	$(thumb).on('click', (e) => {
		var txt = '<li>'+$(e.target).html()+'</li>';
		
		if(options.direction === 'rtl') {
			$(target).append(txt);
			$(target).animate({'right':boxWidth}, () => {
				$(target).css({right: '0'});
				$(target+' li').first().remove();
			});
		} else {
			$(target).prepend(txt);
			$(target).css({'left':'-'+boxWidth}).animate({'left':'0'}, () => {
				$(target+' li').last().remove();
			});	
		}

	});

}