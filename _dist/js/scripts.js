var $ = jQuery;

$(function() {
	
	$('.start-tab-nav__item').on('click', function () {
		
		$('.start-tab-nav__selector').attr('data-pos', $(this).data('tab'))
		$('.form-item').removeClass('_active');
		$('.form-item[data-tab="'+ $(this).data('tab') +'"]').addClass('_active');
	})
})