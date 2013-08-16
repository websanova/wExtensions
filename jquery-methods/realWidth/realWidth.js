(function($) {
	$.fn.realWidth = function(type, margin) {
		var width = null, $div = null, method = null;

		type = type === 'inner' || type === 'outer' ? type : '';
		method = type === '' ? 'width' : type + 'Width';
		margin = margin === true ? true : false;
		$div = $(this).clone().css({position:'absolute', left:-10000}).appendTo('body');
		width = margin ? $div[method](margin) : $div[method]();

		$div.remove();

		return width;
	};
})(jQuery);
