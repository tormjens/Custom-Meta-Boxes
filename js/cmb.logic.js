/**
 * Custom Meta Boxes Logic Field jQuery Plugin
 * @author tormjens <tormorten@tormorten.no>
 *
 * Usage: 
 *	$('.myelement').cmbLogic({
 *		rules : [
 *			{
 *				field: '.myrequired',
 *				operator: 'isset', // accepted values: isset, =, <=, >=, !=
 *				value: 'myvalue' // will only be read if operator is not 'isset'
 *			}
 *		],
 *		condition: 'AND' // accepted values: AND, OR
 *	});
 *
 */

 (function($) {

    $.fn.cmbLogic = function(options) {

    	// settings object
    	var settings = $.extend({
            rules		: null,
            condition	: 'AND'
        }, options);

        return this.each( function() {

        	var current = $(this);

        	$.each(settings.rules, function(rule) {

        		var logic = settings.rules[rule];

    			var main = current,
    				main_id = current.attr('id'),
        			main_type = main.attr('type'),
        			field = $(logic.field),
        			field_id = logic.field,
        			field_type = field.attr('type');

        		// logic for the isset operator
        		if(logic.operator == 'isset') {

	        		if((field_type == 'checkbox' || field_type == 'radio') && field.is(':checked'))
	    				main.parent().parent().show();

	        		else if((field_type == 'checkbox' || field_type == 'radio') && !field.is(':checked'))
	        			main.parent().parent().hide();

	        		else {
	        			if(field.val() == '') {
	        				main.parent().parent().hide();
	        			}
	        			else {
	        				main.parent().parent().show();
	        			}
	        		}

	        		field.parent().on('keyup change', field_id, function() {
	        			
	        			if(field_type == 'checkbox' || field_type == 'radio') {
	        				if($(this).is(':checked')) {
	        					main.parent().parent().show();
	        				}
	        				else {
	        					main.parent().parent().hide();
	        				}
	        			}
	        			else {
		        			if($(this).val() == '') {
		        				main.parent().parent().hide();
		        			}
		        			else {
		        				main.parent().parent().show();
		        			}
		        		}

	        		});
        		}
        		else if(logic.operator == '=') {

        			var value = logic.value;

        			if(field_type == 'checkbox' || field_type == 'radio') {
        				if(field.is(':checked') && field.val() == value) {
        					main.parent().parent().show();
        				}
        				else {
        					main.parent().parent().hide();
        				}
        			}
        			else {
	        			if(field.val() == value) {
	        				main.parent().parent().show();
	        			}
	        			else {
	        				main.parent().parent().hide();
	        			}
	        		}

        			field.parent().on('keyup change', field_id, function() {

						if(field_type == 'checkbox' || field_type == 'radio') {
	        				if($(this).is(':checked') && $(this).val() == value) {
	        					main.parent().parent().show();
	        				}
	        				else {
	        					main.parent().parent().hide();
	        				}
	        			}
	        			else {
		        			if($(this).val() == value) {
		        				main.parent().parent().show();
		        			}
		        			else {
		        				main.parent().parent().hide();
		        			}
		        		}
        			});

        		}
        		else if(logic.operator == '<=') {

        			var value = logic.value;

        			if(field_type == 'checkbox' || field_type == 'radio') {
        				if(field.is(':checked') && field.val() <= value) {
        					main.parent().parent().show();
        				}
        				else {
        					main.parent().parent().hide();
        				}
        			}
        			else {
	        			if(field.val() <= value) {
	        				main.parent().parent().show();
	        			}
	        			else {
	        				main.parent().parent().hide();
	        			}
	        		}

        			field.parent().on('keyup change', field_id, function() {

						if(field_type == 'checkbox' || field_type == 'radio') {
	        				if($(this).is(':checked') && $(this).val() <= value) {
	        					main.parent().parent().show();
	        				}
	        				else {
	        					main.parent().parent().hide();
	        				}
	        			}
	        			else {
		        			if($(this).val() <= value) {
		        				main.parent().parent().show();
		        			}
		        			else {
		        				main.parent().parent().hide();
		        			}
		        		}
        			});

        		}
        		else if(logic.operator == '>=') {

        			var value = logic.value;

        			if(field_type == 'checkbox' || field_type == 'radio') {
        				if(field.is(':checked') && field.val() >= value) {
        					main.parent().parent().show();
        				}
        				else {
        					main.parent().parent().hide();
        				}
        			}
        			else {
	        			if(field.val() >= value) {
	        				main.parent().parent().show();
	        			}
	        			else {
	        				main.parent().parent().hide();
	        			}
	        		}

        			field.parent().on('keyup change', field_id, function() {

						if(field_type == 'checkbox' || field_type == 'radio') {
	        				if($(this).is(':checked') && $(this).val() >= value) {
	        					main.parent().parent().show();
	        				}
	        				else {
	        					main.parent().parent().hide();
	        				}
	        			}
	        			else {
		        			if($(this).val() >= value) {
		        				main.parent().parent().show();
		        			}
		        			else {
		        				main.parent().parent().hide();
		        			}
		        		}
        			});

        		}
        		else if(logic.operator == '!=') {

        			var value = logic.value;

					if(field_type == 'checkbox' || field_type == 'radio') {
        				if(field.is(':checked') && field.val() != value) {
        					main.parent().parent().show();
        				}
        				else {
        					main.parent().parent().hide();
        				}
        			}
        			else {
	        			if(field.val() != value) {
	        				main.parent().parent().show();
	        			}
	        			else {
	        				main.parent().parent().hide();
	        			}
	        		}

        			field.parent().on('keyup change', field_id, function() {

						if(field_type == 'checkbox' || field_type == 'radio') {
	        				if($(this).is(':checked') && $(this).val() != value) {
	        					main.parent().parent().show();
	        				}
	        				else {
	        					main.parent().parent().hide();
	        				}
	        			}
	        			else {
		        			if($(this).val() != value) {
		        				main.parent().parent().show();
		        			}
		        			else {
		        				main.parent().parent().hide();
		        			}
		        		}
        			});

        		}

        	});

        });

    }

}(jQuery));
