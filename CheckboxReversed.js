$(function() {
	$('body').on('change', '.checkbox-reversed', function() {
		$fieldtype_checkbox = $(this).siblings('.FieldtypeCheckbox').first();
		$fieldtype_checkbox[0].checked = !this.checked;
	});
});
