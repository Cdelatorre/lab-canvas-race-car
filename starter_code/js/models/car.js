function Car(ctx, image, canvaswidth) {
  this.ctx = ctx;
  this.x = 222;
  this.y = 0;
  this.canvaswidth = canvaswidth;

  this.vx = 0;

  this.image = new Image();
  this.image.src = image;
  this.image.onload = (function() {
    this.isReady = true; this.width = this.image.width * SCALE_IMG_CONST ;
    this.height = this.image.height * SCALE_IMG_CONST ;
  }).bind(this);

 
  this.movements = {
    right: false,
    left: false
  }
}



Car.prototype.onKeyEvent = function(evt) {
  var state = event.type === 'keydown' ? true : false;
  switch (event.keyCode) {
    case KEY_LEFT:
      this.movements.left = state;
      break;
    case KEY_RIGHT:
      this.movements.right = state;
      break;
  }
};

Car.prototype.animate = function() {

  if (this.movements.right && this.x < this.canvaswidth - 105 ) {
    this.vx = SPEED_MOVE;
  }

  if (this.movements.left && this.x > 50) {
    this.vx = -SPEED_MOVE;
  }

  this.x += this.vx;
  this.vx *= FRICTION;
}



Car.prototype.draw = function() {
  this.animate();
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