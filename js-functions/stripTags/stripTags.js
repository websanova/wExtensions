if(!String.prototype.reverse)
{
	Object.defineProperty(String.prototype, 'stripTags',
	{
		value: function()
		{
			return this.replace(/<\/?[^>]+>/gi, '');
		},
		enumerable: false
	});
}
