var $ = jQuery;

$(function() {
	
	$('.start-tab-nav__item').on('click', function () {
		
		$('.start-tab-nav__selector').attr('data-pos', $(this).data('tab'))
		$('.form-item').removeClass('_active');
		$('.form-item[data-tab="'+ $(this).data('tab') +'"]').addClass('_active');
	})

	$('#sandbox-container .input-daterange').datepicker({
		autoclose: true,
		todayHighlight: true
	});

	$('#sandbox-container input').datepicker({
		autoclose: true,
		todayHighlight: true
	});
})