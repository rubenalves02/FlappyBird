let height = 450, width = 450;

function setup() {
  createCanvas(height, width);
  frameRate(60);
}

function draw() {
  background(100, 200, 255);

  pipes.show();
  bird.show();

  if (
    ((abs(bird.posX - pipes.posX) < 40) &&
    (bird.posY + bird.r > pipes.hole + 100 ||
    bird.posY - bird.r < pipes.hole)) ||
    (abs(bird.posY + bird.r - height) < 5)
  ) {
    pipes.stop();
    bird.stop();
  }

  if (height - bird.posY - bird.r < 0) {
    bird.posY = height - bird.r;
  }
}


function keyPressed() {
  if (keyCode === 32) {
    bird.up();
  } else {
    return false;
  }
}
