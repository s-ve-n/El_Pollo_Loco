class World {
  startscreen = new Startscreen();
  character = new Character();
  level = new Level();
  camera_x = 0;
  statusBarHealth = new StatusBarHealth();
  statusBarBottles = new StatusBarBottles();
  throwableObjects = [];
  ctx = canvas.getContext('2d');
  throwableobject = new ThrowableObject();

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.character.world = this;
    this.startscreen.world = this;
    this.throwableobject.world = this;
    this.draw();
    this.run();
    this.jumpCollision();
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  jumpCollision() {
    setInterval(() => {
      this.checkJumpCollisions();
    }, 1000 / 100);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions() {
    this.level.chickens.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        !this.character.isAboveGround()
      ) {
        this.character.hit();
        this.statusBarHealth.setPercent(this.character.energy);
      } else this.checkJumpCollisions();
    });
    this.level.bottles.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.statusBarBottles.setPercent(20);
        this.level.bottles.splice(bottle, 1);
      }
    });
  }

  checkJumpCollisions() {
    this.level.chickens.forEach((enemy) => {
    if (
      this.character.isColliding(enemy) &&
      this.character.isAboveGround() &&
      !this.character.isHurt()
    ) {
      this.character.jump();
      // this.level.chickens.splice(enemy, 1);
      // console.log(enemy);
      enemy.speed = 0;
      enemy.deadImage();
    }
  });
  }


  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0); // move the camera
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.level.endboss);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.chickens);
    this.addObjectsToMap(this.level.bottles);
    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0); // move the camera
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarBottles);
    this.addToMap(this.startscreen);
    this.ctx.translate(this.camera_x, 0); // move the camera back
    this.ctx.translate(-this.camera_x, 0); // move the camera back

    requestAnimationFrame(() => {
      this.draw();
    });
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
    mo.drawFrame(this.ctx);

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
