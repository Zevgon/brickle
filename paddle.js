function Paddle(x, y, width, height, v) {
  this.x = x;
  this.y = y;
  this.w = width;
  this.h = height;
  this.speed = 0;

  this.show = function() {
    fill(0);
    rect(this.x, this.y, this.w, this.h);
  };

  this.updateSpeed = function(newSpeed) {
    this.speed = newSpeed;
  }

  this.move = function() {
    this.x = constrain(mouseX - parseInt(this.w / 2), 0, parseInt(w - this.w));
  };
}
