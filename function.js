$(document).on('ready', function() {

	for(i = 1; i <= $('form').length; i++) {

		$('#form_' + i).on('submit', function(e) {
			e.preventDefault();

			var total_id = $(this).attr('id').replace('form_', '');	
			var submit_button = $('#form_' + total_id).find('#submit_' + total_id);
			var submit_text = $(submit_button).attr("value");
			$('#status_' + total_id).show();
			$('#result_' + total_id).hide().html('');
			$('#progress_' + total_id).show();
			$('#progressbar_' + total_id).attr('value', '0');

			$.ajax({
				type: $(this).attr('method'),
				url: $(this).attr('action'), 
				data: $(this).serialize(),
				dataType: 'json',
				beforeSend: function() {
					$(submit_button).attr("disabled", "disabled").val('Espere...');
					$('#progressbar_' + total_id).attr('value', '50');
				},
				complete: function() {
					$('#progressbar_' + total_id).attr('value', '100');
					setTimeout(function() {
						$('#progress_' + total_id).hide();
						$('#result_' + total_id).show();
						$(submit_button).removeAttr('disabled').val(submit_text).blur();
					}, 500);
				},
				error: function() {
					setTimeout(function() {
						$('#result_' + total_id).html('<div class="danger">Página Form No Existe</div>');
					}, 500);
				},
				success: function(data) {
					$('#' + data.focus).focus();
					$('#result_' + total_id).html('<div class="' + data.class + '">' + data.text + '</div>');
					if (data.check) {
						setTimeout("location.href='" + data.redirect + "'", 1000);
					}
				}
			});

		});

	};

});
