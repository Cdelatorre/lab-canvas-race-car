function Road(ctx, width, height) {
  
  this.ctx = ctx;
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;

  
}

Road.prototype.draw = function() {
  this.ctx.save(); //starts with save the road

  //Draw grey background road
  this.ctx.beginPath();
  this.ctx.rect(this.x, this.y, this.width, this.height);
  this.ctx.fillStyle = "grey";
  this.ctx.fill();
  this.ctx.closePath()

  //Draw green sides of the road
  this.ctx.beginPath();
  this.ctx.rect(this.x, this.y, 30, this.height);
  this.ctx.rect(this.width - 30, this.y, 30, this.height);
  this.ctx.fillStyle = "green";
  this.ctx.fill();
  this.ctx.closePath()

  //Draw white sides of the road
  this.ctx.beginPath();
  this.ctx.rect(30, this.y, 10, this.height);
  this.ctx.rect(this.width - 40, this.y, 10, this.height);
  this.ctx.fillStyle = "white";
  this.ctx.fill();
  this.ctx.closePath()

  //Draw white striped line of the road
  this.ctx.beginPath();
  this.ctx.setLineDash([30,31]);
  this.ctx.moveTo(250, this.height);
  this.ctx.lineTo(250, 0);
  this.ctx.strokeStyle = "white";
  this.ctx.lineWidth = 5;
  this.ctx.stroke();
  this.ctx.closePath()


  this.ctx.restore(); // Close with save the road
 

 
}
