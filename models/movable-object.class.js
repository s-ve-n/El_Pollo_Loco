class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 0.5;
  energy = 100;
  energyBoss = 100;
  lastHit = 0;
  lastHitBoss = 0;
  jumpcounter = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
      if (!this.isAboveGround() && this.speedY < 0) {
        this.y = 180;
      }
    }, 1000 / 60);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      // console.log('character.y = ' + this.y);
      return this.y < 180;
    }
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.x < mo.x + mo.width &&
      this.y + this.height > mo.y &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  hitBoss() {
    this.energyBoss -= 0.4;
    if (this.energyBoss <= 0) {
      this.energyBoss = 0;
    } else {
      this.lastHitBoss = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  isHurtBoss() {
    let timepassed = new Date().getTime() - this.lastHitBoss;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  isDead() {
    return this.energy == 0;
  }

  isDeadBoss() {
    return this.energyBoss == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 11;
    this.currentImage = 0;
    // if (this.isAboveGround()) {
    //   this.currentImage = 0;
    // }
    // if (!this.isAboveGround()) {
    //   this.currentImage = 0;
    // }
  }
}
