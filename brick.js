function Brick(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.isNull = false;

  this.show = function() {
    if (this.isNull) return;
    fill(10, 50, 100);
    rect(this.x, this.y, this.w, this.h);
  }

  this.remove = function() {
    this.isNull = true;
  }
}
