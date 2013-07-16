(function($) {
	$.fn.hasScrollbar = function() {
		var $this = $(this),
			tagName = $this.prop('tagName').toLowerCase();

		if (tagName === 'body') {
			return $(document).height() > $(window).height();
		}
		else {
			return this.get(0).scrollHeight > $this.innerHeight();
		}
	};
})(jQuery);
