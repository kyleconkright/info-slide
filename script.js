$('document').ready(() => {

	let addBio = function(thumb, target) {
		$(thumb).on('click', (e) => {
			var txt = '<li>'+$(e.target).html()+'</li>';
			
			$(target).prepend(txt);
			$(target).css({'left':'-33.333333%'}).animate({'left':'0'}, 'easeOut', function(){
				$(target+' li').last().remove();
			});
		});
	}

	addBio('#content li', '#target');

});