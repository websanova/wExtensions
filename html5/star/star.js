if (window.CanvasRenderingContext2D) {
  CanvasRenderingContext2D.prototype.star = function(x, y, width, height) {
    // if values are not set just exit
    if(!x || !y || !width || !height) { return true; }

    this.beginPath();
    this.moveTo(x + width*0.5, y);
    this.lineTo(x + width*0.375, y + height*0.4);
    this.lineTo(x, y + height*0.4);
    this.lineTo(x + width*0.3, y + height*0.625);
    this.lineTo(x + width*0.2, y + height);
    this.lineTo(x + width*0.5, y + height*0.725);
    this.lineTo(x + width*0.8, y + height);
    this.lineTo(x + width*0.7, y + height*0.625);
    this.lineTo(x + width, y + height*0.4);
    this.lineTo(x + width*0.625, y + height*0.4);
    this.lineTo(x + width*0.5, y);
    this.closePath(); 
  };
}