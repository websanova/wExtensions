if(!String.prototype.trimRegex)
{
	Object.defineProperty(String.prototype, 'trimRegex',
	{
		value: function(c)
		{
			if (!c || c === ' ') { c = '\\s'; }
			else if (c.match(/[\$\+\(\)\+\.\*\^\?\\]/)) { c = '\\' + c; }
			
			return this.replace(new RegExp('^' + c + '*', 'g'), "").replace(new RegExp(c + '*$', 'g'), "");
		},
		enumerable: false
	});
}
