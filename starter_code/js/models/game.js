function Game(canvasId) {

  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 500;
  this.canvas.height = window.innerHeight;
  this.ctx = this.canvas.getContext('2d');


  this.road = new Road(this.ctx, this.canvas.width, this.canvas.height);
  this.car = new Car(this.ctx, "./images/car.png", this.canvas.width);

  document.addEventListener('keydown', this.onKeyEvent.bind(this));
  document.addEventListener('keyup', this.onKeyEvent.bind(this));

}



Game.prototype.start = function(){

  setInterval(function(){
    this.clear();
    this.draw();
  }.bind(this),1000 / 60)
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
  this.road.draw();
  this.car.draw();
}

Game.prototype.onKeyEvent = function(){
  this.car.onKeyEvent()
}
