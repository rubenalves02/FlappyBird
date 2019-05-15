let pipes = {
  hole: Math.random() * (height - 150),
  posX: 2 * width,
  velX: 4,

  show() {
    push(); //pipe
    noStroke();
    fill(50, 150, 50);
    rect(this.posX - 25, 0, 50, height - 50);
    pop();

    push(); //hole
    noStroke();
    fill(100, 200, 255);
    rect(this.posX - 25, this.hole, 50, 100);
    pop();
    this.posX -= this.velX;
  },

  stop() {
    this.velX = 0;
  }
}
