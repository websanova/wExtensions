if(!String.prototype.capitalize)
{
    Object.defineProperty(String.prototype, 'capitalize',
    {
        value: function()
        {
            return this.slice(0,1).toUpperCase() + this.slice(1).toLowerCase();
        },
        enumerable: false
    });
}
