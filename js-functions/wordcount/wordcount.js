if(!String.prototype.wordcount)
{
	Object.defineProperty(String.prototype, 'wordcount',
	{
		value: function()
		{
			return this.split(' ').length;
		},
		enumerable: false
	});
}
