(function($) {
	$.fn.hasClassRegex = function(regex) {
		var classes = $(this).attr('class');

		if (!classes || !regex) { return false; }

		classes = classes.split(' ');

		for (var i=0, ii=classes.length; i<ii; i++) {
			if (classes[i].match(regex)) { return true; }
		}

		return false;
	};
})(jQuery);
