CanvasRenderingContext2D.prototype.trapezoid = function(x, y, width, height) {
  // if values are not set just exit
  if(!x || !y || !width || !height) { return true; }

  this.beginPath();
  this.moveTo(x + width*0.2, y);
  this.lineTo(x, y + height);
  this.lineTo(x + width, y + height);
  this.lineTo(x + width*0.8, y);
  this.lineTo(x + width*0.3, y);
  this.closePath();  
};