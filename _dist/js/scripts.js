var $ = jQuery;

$(function() {
	
	$('.start-tab-nav__item').on('click', function () {
		
		$('.start-tab-nav__selector').attr('data-pos', $(this).data('tab'))
		$('.form-item').removeClass('_active');
		$('.form-item[data-tab="'+ $(this).data('tab') +'"]').addClass('_active');
	})

	if($('#sandbox-container').length) {
		
		$('#sandbox-container .input-daterange').datepicker({
			autoclose: true,
			todayHighlight: true
		});

		$('#sandbox-container input').datepicker({
			autoclose: true,
			todayHighlight: true
		});
	}

	$('.loader__line').on('animationend', function() {
		
		$('.result__item.loader').removeClass('_active');
		$('.result__item.content').addClass('_active');
	})

	$('.bottom-content__submit input').on('click', function (e) {
		
		e.preventDefault();
		e.stopPropagation();
		$('.result__item.content').removeClass('_active');
		$('.result__item.thanks').addClass('_active');
	})
})