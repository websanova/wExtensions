if(!String.prototype.trimChar)
{
	Object.defineProperty(String.prototype, 'trimChar',
	{
		value: function(c)
		{
			if (!c || c === ' ') { c = '\\s'; }
			else if (c.match(/[\$\+\(\)\+\.\*\^\?\\]/)) { c = '\\' + c; }
			
			return this.replace(new RegExp('^' + c + '+|' + c + '+$', 'g'), "");
		},
		enumerable: false
	});
}
