function Ball(x, y, r, s) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xSpeed = 0;
  this.yspeed = s;

  this.show = function() {
    fill(80, 40, 30);
    ellipse(this.x, this.y, this.r);
  }

  this.update = function() {
    if (this.x - this.r <= 0 || this.x + this.r >= w) this.reverseDirection('l');
    if (this.y - this.r <= 0 || this.y + this.r >= h) this.reverseDirection('b');
    this.x += this.xSpeed;
    this.y += this.yspeed;
  }

  this.collidesWith = function(brick) {
    if (brick.isNull) return false;
    var rx = brick.x;
    var ry = brick.y;
    var rw = brick.w;
    var rh = brick.h;
    //2d
    // temporary variables to set edges for testing
    var testX = this.x;
    var testY = this.y;
    var xEdge;

    // which edge is closest?
    if (this.x < rx) {
      testX = rx;     // left edge
      xEdge = 'l';
    } else if (this.x > rx+rw) {
      testX = rx+rw;      // right edge
      xEdge = 'r';
    }

    if (this.y < ry) {
      testY = ry;       // top edge
      yEdge = 't';
    } else if (this.y > ry+rh) {
      testY = ry+rh;   // bottom edge
      yEdge = 'b';
    }   // bottom edge

    // // get distance from closest edges
    var distance = dist(this.x,this.y,testX,testY)

    // if the distance is less than the radius, collision!
    if (distance <= this.r) {
      return [xEdge, yEdge];
    }
    return false;
  }

  this.handleCollision = function(collision) {
    console.log(collision[0]);
    console.log(collision[1]);
    this.reverseDirection(collision[0]);
    this.reverseDirection(collision[1]);
  }

  this.reverseDirection = function(edge) {
    switch (edge) {
      case 't':
        this.yspeed = 0 - this.yspeed;
        break;
      case 'b':
        this.yspeed = 0 - this.yspeed;
        break;
      case 'r':
        this.xSpeed = 0 - this.xSpeed;
        break;
      case 'l':
        this.xSpeed = 0 - this.xSpeed;
        break;
      default:
        return
    }
  }
}
