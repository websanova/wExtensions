if(!String.prototype.reverse)
{
	Object.defineProperty(String.prototype, 'reverse',
	{
		value: function()
		{
			return this.split( '' ).reverse().join( '' );
		},
		enumerable: false
	});
}
