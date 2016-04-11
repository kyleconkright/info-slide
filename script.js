$('document').ready(() => {

	let addBio = function(thumb, target) {

		let targetWidth = $('#content').parent().width();
		let boxWidthPx = $('#content li').width();
		let marginPx = $('#content li').css('margin').split('px');
		let boxMargin = parseInt(100 * marginPx[0]) / targetWidth * 2;
		let boxWidth = parseInt(100 * (boxWidthPx / targetWidth) + boxMargin ) + '%';

		
		$(thumb).on('click', (e) => {
			var txt = '<li>'+$(e.target).html()+'</li>';
			
			$(target).prepend(txt);
			$(target).css({'left':'-'+boxWidth}).animate({'left':'0'}, () => {
				$(target+' li').last().remove();
			});
		});
	}


	addBio('#content li', '#target');

});