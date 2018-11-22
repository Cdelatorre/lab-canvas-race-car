function Car(ctx, image, canvaswidth) {
  this.ctx = ctx;
  this.x = 222;
  this.y = 0;
  this.canvaswidth = canvaswidth;

  this.speed = 20;

  this.image = new Image();
  this.image.src = image;
  this.image.onload = (function() {
    this.isReady = true; this.width = this.image.width * SCALE_IMG_CONST ;
    this.height = this.image.height * SCALE_IMG_CONST ;
  }).bind(this);

  document.onkeydown = this.onKeyDown.bind(this); // Usamos bind por que quien es this realmente aqui es window ya que estamos diciendole al documento
  // que le metodo onkeydown se produzca aunque nuestro objetivo es que sea Car.onKeyDown quien identifique las teclas para mover el coche.
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

Car.prototype.onKeyDown = function(evt) {
  if (evt.keyCode == RIGHT_KEY) {
    this.moveRight();
  } else if (evt.keyCode == LEFT_KEY) {
    this.moveLeft();
  }
};


Car.prototype.moveRight = function() {
  if (this.x < this.canvaswidth - 98) {
    this.x += this.speed;
  }
};

Car.prototype.moveLeft = function() {
  if (this.x > 42) {
    this.x -= this.speed;
  }

};
