function Car(ctx, image) {
  this.ctx = ctx;
  this.x = 222;
  this.y = 0;

  this.speed = 20;

  this.image = new Image();
  this.image.src = image;
  this.image.onload = (function() {
    this.isReady = true; this.width = this.image.width * SCALE_IMG_CONST ;
    this.height = this.image.height * SCALE_IMG_CONST ;
  }).bind(this);
  
  document.onkeydown = this.onKeyDown.bind(this);
}


Car.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.save();
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.x,
      window.innerHeight - this.height - 5,
      this.width,
      this.height
    );
  }
  this.ctx.restore();


}

Car.prototype.onKeyDown = function(event) {
  this.x++
};

Car.prototype.moveLeft =  function(){
  this.x--
}

Car.prototype.moveRight =  function(){
  this.x++
}