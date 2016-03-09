$(document).on('ready', function() {

	for(i = 1; i <= $('form').length; i++) {

		$('#form_' + i).on('submit', function(e) {
			e.preventDefault();

			var total_id = $(this).attr('id').replace('form_', '');	
			var submit_button = $('#form_' + total_id).find('#submit_' + total_id);
			var submit_text = $(submit_button).attr("value");
			var div_status = $('#status_' + total_id);
			var div_progress = $('#progressbar_' + total_id);
			var div_result = $('#result_' + total_id);
			var type = $(this).attr('method');
			var action = $(this).attr('action');
			var data = $(this).serialize();

			div_status.addClass('success').show();
			div_result.hide().html('');
			div_progress.attr('value', '0').show();

			$.ajax({
				type: type,
				url: action, 
				data: data,
				dataType: 'json',
				beforeSend: function() {
					$(submit_button).prop( "disabled", true).val('Wait...');
					div_progress.animate({
						value: 50
					}, 500);
				},
				complete: function() {
					div_progress.animate({
						value: 100
					}, 500, function() {
						div_progress.hide();
						div_result.show();
						$(submit_button).prop( "disabled", false).val(submit_text).blur();
					});
				},
				error: function() {
					setTimeout(function() {
						div_result.html('<div class="danger">Error Form</div>');
					}, 500);
				},
				success: function(data) {
					$('#' + data.focus).focus();
					div_result.html('<div class="' + data.class + '">' + data.text + '</div>');
					if (data.check) {
						setInterval(function() {
							$('input').prop( "disabled", true);
							$(submit_button).prop( "disabled", true).val('Wait...');
						}, 1);
						setTimeout(function() {
							div_result.hide().html('');
							div_progress.attr('value', '0').show();
							div_progress.animate({
								value: 100
							}, 1000, function() {
								setTimeout("location.href='" + data.redirect + "'", 0);
							});
						}, 2000);
					}
				}
			});

		});

	};

});
