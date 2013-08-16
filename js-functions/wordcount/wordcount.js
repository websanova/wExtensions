if(!String.prototype.wordcount) {
  String.prototype.wordcount = function() {
		return this.split(' ').length;
	};
}
