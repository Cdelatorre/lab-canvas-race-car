function Obstacle(ctx, x, y, width) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  this.width = width;
  this.height = 20;

  this.vy = OBSTACLE_SPEED_MOVE;
}


Obstacle.prototype.animate = function() {
  this.y += this.vy;
}

Obstacle.prototype.draw = function() {
  this.animate();

  this.ctx.fillRect(
    this.x,
    this.y,
    this.width,
    this.height
  )
}