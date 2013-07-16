(function($) {
	$.fn.lineCount = function() {
		var $this = $(this),
			tagName = $this.prop('tagName').toLowerCase();

		if (tagName === 'input' && $this.prop('type').toLowerCase() === 'text') {
			return 1;
		}
		else if (tagName === 'textarea') {
			var lineHeight = parseInt($this.css('lineHeight'), 10);
			$this.css('height', lineHeight);
			return $this.prop('scrollHeight') / lineHeight;
		}
		else {
			return 0;
		}
	};
})(jQuery);
