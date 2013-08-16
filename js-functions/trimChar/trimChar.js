if(!String.prototype.trimChar) {
	String.prototype.trimChar = trimChar = function(c) {
		if (!c || c === ' ') { c = '\\s'; }
		else if (c.match(/[\$\+\(\)\+\.\*\^\?\\]/)) { c = '\\' + c; }
		
		return this.replace(new RegExp('^' + c + '+|' + c + '+$', 'g'), "");
	}
}
