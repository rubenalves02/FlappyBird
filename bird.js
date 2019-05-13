let bird = {
  r: 15,
  posX: width / 3,
  posY: height / 2,
  velY: 0.6,
  accY: 0.3,

  show() {
    fill(200, 200, 100);
    circle(this.posX, this.posY, 2 * this.r);
    this.posY += this.velY;
    this.velY += this.accY;
  },

  up() {
    if (this. posY + this.r < height) {
      this.velY = -5;
    } else {
      return false
    }

  },

  stop() {
    //console.log("GAME OVER");
    if (this.posX + this.r > pipes.posX &&
      this.posY + this.r < pipes.hole + 100) {
        this.velY = 10;
        this.posY += this.velY;
    } else {
      return false;
    }


  }
}
