var $ = jQuery;

$(function() {
	
	$('.start-tab-nav__item').on('click', function () {
		
		$('.start-tab-nav__selector').attr('data-pos', $(this).data('tab'))
	})
})