window.shuffleArray = (function() {
	return function(arr) {
		for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		return arr;
	}
})();

if(jQuery) {
    jQuery.extend({
        shuffleArray: function(arr) { return window.shuffleArray(arr); }
    });
}
