if(!String.prototype.reverse) {
	String.prototype.reverse = function() {
		return this.split( '' ).reverse().join( '' );
	}
}
