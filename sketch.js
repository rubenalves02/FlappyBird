let height = 450, width = 450;
let pipes = [];
let hitTop = false, hitBottom = false, hitFloor = false, hit = false;

function setup() {
  frameRate(60);

  var cnv = createCanvas(width, height);

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  cnv.position(x, y);
}

function draw() {
  background(100, 200, 255);

  push(); //floor
  fill(250, 250, 150);
  rect(0, height - 50, width, 50);
  pop();

  if (frameCount % 60 == 0) {
    pipes.push(new Pipe());
  }

  for (let p of pipes) {
    p.show();

    let hitTop = collideRectCircle(
      p.posX - 25, 0,
      50, p.hole,
      bird.posX, bird.posY,
      2 * bird.r - 5
    );

    let hitBottom = collideRectCircle(
      p.posX - 25, p.hole + 100,
      50, height - p.hole,
      bird.posX, bird.posY,
      2 * bird.r - 5
    );

    let hitFloor = collideRectCircle(
      0, height - 50,
      width, 50,
      bird.posX, bird.posY,
      2 * bird.r - 5
    );

    if (hitTop || hitBottom || hitFloor) {
      hit = true;
    }

    if (hit) {
      bird.stop();
      p.stop();
      noLoop();
    }

  }

  bird.show();

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
