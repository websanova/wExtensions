if(!String.prototype.capitalize) {
	String.prototype.capitalize = function() {
    return this.slice(0,1).toUpperCase() + this.slice(1).toLowerCase();
  }
}
