class ThrowableObject extends MovableObject {
  width = 70;
  height = 60;
  speedY = 10;
  touchdown = false;
  IMAGES_ROTATION = [
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
  ];
  IMAGES_SPLASH = [
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
  ];

  constructor(x, y) {
    super();
    this.loadImage('img/7.Marcadores/Icono/Botella.png');
    this.loadImages(this.IMAGES_ROTATION);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.throw();
    this.applyGravity();
    this.checkSplashCollisions();
  }

  throw() {
    if (world.qty > 0) {
      this.speed =
        world.character.movingRight || world.character.movingLeft ? 8 : 5;
      this.move = world.character.otherDirection
        ? this.moveLeft
        : this.moveRight;
      setInterval(() => {
        this.move();
      }, 1000 / 100);
      this.rotationInterval = setInterval(() => {
        this.playAnimation(this.IMAGES_ROTATION);
      }, 125);
      this.checkYInterval = setInterval(() => {
        if (this.y >= 392.5) {
          this.y = 392.5;
          this.speed = 0;
          this.acceleration = 0;
          this.speedY = 0;
          world.bottle.energy = 0;
          this.splashInterval = setInterval(() => {
            clearInterval(this.rotationInterval);
            this.playAnimation(this.IMAGES_SPLASH);
          }, 90);
          clearInterval(this.checkYInterval);
        }
      }, 10);
      setTimeout(() => {
        let pos = world.throwableObjects.indexOf(world.bottle);
        world.throwableObjects.splice(pos, 1);
        clearInterval(this.splashInterval);
      }, 1300);
      world.qty--;
    }
  }

  checkSplashCollisions() {
    setInterval(() => {
      // console.log(world.bottle);
      world.level.chickensBig.forEach((enemy) => {
        if (
          world.bottle.energy > 0 &&
          world.bottle.isColliding(enemy) &&
          !enemy.dead
        ) {
          enemy.deadImage();
          setTimeout(() => {
            let pos = world.level.chickensBig.indexOf(enemy);
            world.level.chickensBig.splice(pos, 1);
          }, 1000);
        }
      });
      world.level.chickensSmall.forEach((enemy) => {
        if (
          world.bottle.energy > 0 &&
          world.bottle.isColliding(enemy) &&
          !enemy.dead
        ) {
          enemy.deadImage();
          setTimeout(() => {
            let pos = world.level.chickensSmall.indexOf(enemy);
            world.level.chickensSmall.splice(pos, 1);
          }, 1000);
        }
      });
    }, 1000 / 100);
  }
}
