let height = 450, width = 450;

function setup() {
  createCanvas(width, height);
  frameRate(60);
}

function draw() {
  background(100, 200, 255);

  push(); //floor
  fill(250, 250, 150);
  rect(0, height - 50, width, 50);
  pop();

  pipes.show();
  bird.show();

  if (
    ((abs(bird.posX - pipes.posX) < 40) &&
    (bird.posY + bird.r > pipes.hole + 100 ||
    bird.posY - bird.r < pipes.hole)) ||
    (abs(bird.posY + bird.r - height) < 50)
  ) {
    pipes.stop();
    bird.stop();
  }

  if (height - 50 - bird.posY - bird.r < 0) {
    bird.posY = height - 45 - bird.r;
  }
}


function keyPressed() {
  if (keyCode === 32) {
    bird.up();
  } else {
    return false;
  }
}
