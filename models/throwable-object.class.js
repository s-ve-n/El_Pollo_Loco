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
    this.checkY();
  }

  checkY() {
    this.checkYInterval = setInterval(() => {
      console.log(this.y);
      if (this.y >= 392.5) {
        this.y = 392.5;
        this.speed = 0;
        this.acceleration = 0;
        this.speedY = 0;
        clearInterval(this.rotationInterval);
        this.splashInterval = setInterval(() => {
          this.playAnimation(this.IMAGES_SPLASH);
        }, 175);
        clearInterval(this.checkYInterval);
      }
    }, 10);
  }

  throw() {
    this.speed =
      world.character.movingRight || world.character.movingLeft ? 10 : 5;
    this.move = world.character.otherDirection ? this.moveLeft : this.moveRight;
    setInterval(() => {
      this.move();
    }, 1000 / 100);
    this.rotationInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_ROTATION);
    }, 125);
    setTimeout(() => {
      console.log('splash');
      clearInterval(this.splashInterval);
    }, 1300);

    // let pos = this.world.throwableObjects.indexOf(this.world.bottle);

    // if (!this.world.character.otherDirection) {
    //   if (!this.world.character.movingRight) {
    //     for (let i = 0; i < this.world.intervalArray.length; i++) {
    //       clearInterval(this.world.intervalArray[i]);
    //     }
    //     this.world.interval1 = setInterval(() => {
    //       this.x += 5;
    //       console.log("1");
    //     }, 1000 / 100);
    //     this.world.intervalArray.push(this.world.interval1);
    //   }
    //   if (this.world.character.movingRight) {
    //     for (let i = 0; i < this.world.intervalArray.length; i++) {
    //       clearInterval(this.world.intervalArray[i]);
    //     }
    //     this.world.interval2 = setInterval(() => {
    //       this.x += 10;
    //       console.log("2");
    //     }, 1000 / 100);
    //     this.world.intervalArray.push(this.world.interval2);
    //   }
    // }

    // if (this.world.character.otherDirection) {
    //   this.x = this.world.character.x - 30;
    //   if (!this.world.character.movingLeft) {
    //     for (let i = 0; i < this.world.intervalArray.length; i++) {
    //       clearInterval(this.world.intervalArray[i]);
    //     }
    //     this.world.interval3 = setInterval(() => {
    //       this.x -= 5;
    //       console.log("3");
    //     }, 1000 / 100);
    //     this.world.intervalArray.push(this.world.interval3);
    //   }
    //   if (this.world.character.movingLeft) {
    //     for (let i = 0; i < this.world.intervalArray.length; i++) {
    //       clearInterval(this.world.intervalArray[i]);
    //     }
    //     this.world.interval4 = setInterval(() => {
    //       this.x -= 10;
    //       console.log("4");
    //     }, 1000 / 100);
    //     this.world.intervalArray.push(this.world.interval4);
    //     // console.log(this.world.intervalArray);
    //   }
    // }

    // setTimeout(() => {
    //   clearInterval(interval1);
    //   clearInterval(interval2);
    //   clearInterval(interval3);
    // }, 1000);

    // setTimeout(() => {
    //   this.world.throwableObjects.splice(pos, 1);
    // }, 500);
  }
}
