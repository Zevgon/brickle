var
  w = 800,
  h = 600,
  paddleWidth = 200,
  paddleHeight = 20,
  paddleVelocity = 5,
  brickAreaWidth = w - 200,
  brickAreaHeight = 200,
  bricksPerRow = 9,
  bricksPerCol = 10,
  brickDist = 3,
  bricks = [],
  ball,
  ballRadius = 20,
  ballSpeed = 4,
  lastMouseX = -1,
  mouseInterval = 50,
  topBound = 40,
  paddle;

var createBricks = function() {
  var leftBound = parseInt((w - brickAreaWidth) / 2);
  var brickWidth = parseInt(brickAreaWidth / bricksPerRow);
  var brickHeight = parseInt(brickAreaHeight / bricksPerCol);
  for (var i = 0; i < bricksPerCol; i++) {
    for (var j = 0; j < bricksPerRow; j++) {
      bricks.push(new Brick(
        leftBound + j * brickWidth + brickDist / 2,
        topBound + i * brickHeight + brickDist / 2,
        brickWidth - brickDist,
        brickHeight - brickDist));
    }
  }
}

function setup() {
  createCanvas(w, h);
  paddle = new Paddle(w / 2 - paddleWidth / 2, h - 30, paddleWidth, paddleHeight, paddleVelocity);
  createBricks();
  ball = new Ball(w / 2, h / 2, ballRadius, ballSpeed);
  setInterval(function() {
      paddle.updateSpeed(mouseX - lastMouseX);
      lastMouseX = mouseX;
    }, mouseInterval);
}

document.addEventListener('mousemove', function() {
  paddle.move();
});

function draw() {
  background(200);
  paddle.show();
  ball.update();
  ball.show();
  for (var i = 0; i < bricks.length; i++) {
    var brick = bricks[i];
    var collision = ball.collidesWith(brick);
    if (collision) {
      ball.handleCollision(collision);
      brick.remove();
    }
    brick.show();
  }
  if (ball.collidesWith(paddle)) {
    ball.xSpeed += paddle.speed / 10;
    ball.reverseDirection('t');
  }
}
