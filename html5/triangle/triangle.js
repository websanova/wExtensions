CanvasRenderingContext2D.prototype.triangle = function(x, y, width, height) {
  // if values are not set just exit
  if(!x || !y || !width || !height) { return true; }

  this.beginPath();
  this.moveTo(x + width/2, y);
  this.lineTo(x, y + height);
  this.lineTo(x + width, y + height);
  this.lineTo(x + width/2, y);
  this.closePath();  
};