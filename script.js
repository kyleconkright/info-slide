$('document').ready(() => {

	let addBio = function(thumb, target, options = {}) {

		let defaults = {
			direction: 'ltr'
		}

		let settings = Object.assign({}, defaults, options);

		let targetWidth = $('#content').parent().width();
		let boxWidthPx = $('#content li').width();
		let marginPx = $('#content li').css('margin').split('px');
		let boxMargin = parseInt(100 * marginPx[0]) / targetWidth * 2;
		let boxWidth = parseInt(100 * (boxWidthPx / targetWidth) + boxMargin ) + '%';

		
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

		console.log(options.direction);
	}


	addBio('#content li', '#target', {direction: 'rtl'});

});