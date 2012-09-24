$(document).ready( function() {

	$('#add_set').click( function() {

	// Disable "input" if field is empty 
	$('button[type="button"]').attr('disabled','disabled');
	$('input[type="text"]').keyup(function(){
		if($(this).val() != ''){
		   $('button[type="button"]').removeAttr('disabled');
		}
	});

	var setDescription = $('#set_description').val();
	
	$('.set_list').prepend('<div class="set">'
		+ '<div>'
			+ '<input type="checkbox" class="check_set" name="check_set"/>'
		+ '</div>'
		+ '<div class="set_description">'
		+ '<p>'
			+ setDescription
		+ '</p>'
		+ '</div>'
	+ '</div>');
	
	$('#set_form')[0].reset();
	
	$('.check_set').unbind('click');
	$('.check_set').click( function() {
		var set = $(this).parent().parent();
		set.addClass('checked');
		set.fadeOut('slow');
	});
	
	return false;

	});
	
});