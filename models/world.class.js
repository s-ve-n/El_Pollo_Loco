class World {
  startscreen = new Startscreen();
  character = new Character();
  level = new Level();
  camera_x = 0;
  statusBarHealth = new StatusBarHealth();
  bottleCounter = new BottleCounter();
  throwableObjects = [];
  ctx = canvas.getContext('2d');
  qty = 0;
  throwTimeout = false;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.character.world = this;
    this.startscreen.world = this;
    this.bottleCounter.world = this;
    this.draw();
    this.run();
    this.jumpCollision();
    this.bottleCollision();
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      // document.getElementById('html-console').innerHTML = `character.y = ${this.character.y}`;
    }, 200);

    setInterval(() => {
      this.checkThrowObjects();
    }, 1000 / 100);
  }

  jumpCollision() {
    setInterval(() => {
      this.checkJumpCollisions();
    }, 1000 / 100);
  }

  bottleCollision() {
    setInterval(() => {
      this.checkBottleCollisions();
    }, 1000 / 100);
  }

  checkThrowObjects() {
    if (this.keyboard.D && !this.throwTimeout) {
      this.throwTimeout = true;
      let bottle = new ThrowableObject(
        this,
        this.character.x + 50,
        this.character.y + 100,
      );
      this.throwableObjects.push(bottle);
      setTimeout(() => {
        this.throwTimeout = false;
      }, 750);
    }
  }

  checkCollisions() {
    this.level.chickensBig.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        !this.character.isAboveGround() &&
        !enemy.dead
      ) {
        this.character.hit();
        this.statusBarHealth.setPercent(this.character.energy);
      } else this.checkJumpCollisions();
    });
    this.level.chickensSmall.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        !this.character.isAboveGround() &&
        !enemy.dead
      ) {
        this.character.hit();
        this.statusBarHealth.setPercent(this.character.energy);
      } else this.checkJumpCollisions();
    });
  }

  checkJumpCollisions() {
    this.level.chickensBig.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        this.character.isAboveGround() &&
        !this.character.isHurt() &&
        !enemy.dead
      ) {
        this.character.jump();
        enemy.deadImage();
        setTimeout(() => {
          let pos = this.level.chickensBig.indexOf(enemy);
          this.level.chickensBig.splice(pos, 1);
        }, 1000);
      }
    });
    this.level.chickensSmall.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        this.character.isAboveGround() &&
        !this.character.isHurt() &&
        !enemy.dead
      ) {
        this.character.jump();
        enemy.deadImage();
        setTimeout(() => {
          let pos = this.level.chickensSmall.indexOf(enemy);
          this.level.chickensSmall.splice(pos, 1);
        }, 1000);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0); // move the camera
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.level.endboss);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.chickensBig);
    this.addObjectsToMap(this.level.chickensSmall);
    this.addObjectsToMap(this.level.bottles);
    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0); // move the camera
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.bottleCounter);
    this.drawBottleCounter(this.qty);
    this.ctx.translate(this.camera_x, 0); // move the camera back
    this.ctx.translate(-this.camera_x, 0); // move the camera back
    requestAnimationFrame(() => {
      this.draw();
    });
  }

  checkBottleCollisions() {
    this.level.bottles.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.qty++;
        this.drawBottleCounter(this.qty);
        this.level.bottles.splice(bottle, 1);
      }
    });
  }

  drawBottleCounter(qty) {
    this.ctx.font = '50px Boogaloo';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`${qty}`, 75, 107);
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
      // console.log('first');
    }
    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImage(mo);
      // console.log('second');
    }
  }

  flipImage(mo) {
    // this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  // flipImageBack(mo) {
  //   mo.x = mo.x * -1;
  //   this.ctx.restore();
  // }
}
