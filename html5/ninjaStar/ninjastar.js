CanvasRenderingContext2D.prototype.ninjastar = function(x, y, width, height) {
  // if values are not set just exit
  if(!x || !y || !width || !height) { return true; }

  this.beginPath();
  this.moveTo(x + width*0.5, y);
  this.lineTo(x + width*0.35, y + height*0.35);
  this.lineTo(x, y + height*0.5);
  this.lineTo(x + width*0.35, y + height*0.65);
  this.lineTo(x + width*0.5, y + height);
  this.lineTo(x + width*0.65, y + height*0.65);
  this.lineTo(x + width, y +height*0.5);
  this.lineTo(x + width*0.65, y + height*0.35);
  this.lineTo(x + width*0.5, y);
  this.closePath();  
};