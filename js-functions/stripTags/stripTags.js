if(!String.prototype.stripTags) {
	String.prototype.stripTags = function() {
		return this.replace(/<\/?[^>]+>/gi, '');
	};
}
