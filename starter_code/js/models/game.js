function Game(canvasId) {

  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 500;
  this.canvas.height = window.innerHeight;
  this.ctx = this.canvas.getContext('2d');

  this.road = new Road(this.ctx, this.canvas.width, this.canvas.height);
  this.car = new Car(this.ctx, "./images/car.png", this.canvas.width);

  document.addEventListener('keydown', this.onKeyEvent.bind(this));
  document.addEventListener('keyup', this.onKeyEvent.bind(this));

  this.coins = 0;
  this.obstacles = [];
  this.drawIntervalCount = 0;
  this.drawIntervalId = undefined;
}



Game.prototype.start = function () {
  if (!this.isRunning()) {
    this.drawnIntervalId = setInterval(function () {
      this.drawIntervalCount++;
      this.clear();

      if (this.drawIntervalCount % OBSTACLE_INTERVAL === 0) {
        this.addObstacle();
        this.drawIntervalCount = 0;
      } else if (this.drawIntervalCount % COIN_INTERVAL === 0) {
        this.coins++;
      }

      if (this.isGameOver()) {
        this.stop();
        alert('Your Score is : ' + this.coins)
      }
      this.draw();
    }.bind(this), DRAW_INTERVAL_MS)

  }
}

Game.prototype.isRunning = function () {
  this.drawIntervalId !== undefined;
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function () {
  this.road.draw();
  this.car.draw();
  this.obstacles.forEach(function (obstacle) {
    obstacle.draw();
  })
}

Game.prototype.finalScore = function () {
  document.getElementById(canvasId);
}

Game.prototype.stop = function () {
  clearInterval(this.drawIntervalId);
  this.drawIntervalId === undefined;
}

Game.prototype.onKeyEvent = function () {
  this.car.onKeyEvent()
}

Game.prototype.isGameOver = function () {
  return this.obstacles.some(function (obstacle) {
    return this.car.collideWith(obstacle);
  }.bind(this));
}


Game.prototype.addObstacle = function () {
  var widthUp = (Math.random() * this.canvas.width / 2) + 40;
  if(widthUp <= 80){
    this.obstacles.push(new Obstacle(this.ctx, (Math.random() * widthUp + 50), 0, 80))    
  } else {
  this.obstacles.push(new Obstacle(this.ctx, (Math.random() * widthUp + 50), 0, widthUp))
  }
  console.log('holas');


}
