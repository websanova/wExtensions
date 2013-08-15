(function($) {
	$.fn.realHeight = function(type, margin) {
		var height = null, $div = null, method = null;

		type = type === 'inner' || type === 'outer' ? type : '';
		method = type === '' ? 'height' : type + 'Height';
		margin === true ? true : false;
		$div = $(this).clone().css({position:'absolute', left:-10000}).appendTo('body');
		height = margin ? $div[method](margin) : $div[method]();

		$div.remove();

		return height;
	};
})(jQuery);
