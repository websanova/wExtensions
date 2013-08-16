if (window.CanvasRenderingContext2D) {
  CanvasRenderingContext2D.prototype.parallelogram = function(x, y, width, height) {
    // if values are not set just exit
    if(!x || !y || !width || !height) { return true; }

    this.beginPath();
    this.moveTo(x + width*0.3, y);
    this.lineTo(x, y + height);
    this.lineTo(x + width*0.7, y + height);
    this.lineTo(x + width, y);
    this.lineTo(x + width*0.3, y);
    this.closePath();  
  };
}