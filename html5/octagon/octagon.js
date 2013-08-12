CanvasRenderingContext2D.prototype.octagon = function(x, y, width, height) {
  // if values are not set just exit
  if(!x || !y || !width || !height) { return true; }

  var facShort = 0.275,
  	  facLong = 1 - facShort;

  this.beginPath();
  this.moveTo(x + width*facShort, y);
  this.lineTo(x, y + height*facShort);
  this.lineTo(x, y + height*facLong);
  this.lineTo(x + width*facShort, y + height);
  this.lineTo(x + width*facLong, y + height);
	this.lineTo(x + width, y + height*facLong);
  this.lineTo(x + width, y + height*facShort);
  this.lineTo(x + width*facLong, y);
  this.lineTo(x + width*facShort, y);
  this.closePath();  
};