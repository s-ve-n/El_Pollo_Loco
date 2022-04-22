class ThrowableObject extends MovableObject {
  width = 70;
  height = 60;
  speedY = 10;
  IMAGES_ROTATION = [
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
    'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
  ];

  constructor(world, x, y) {
    super();
    this.loadImage('img/7.Marcadores/Icono/Botella.png');
    this.loadImages(this.IMAGES_ROTATION);
    this.x = x;
    this.y = y;
    // this.world = world;
    this.throw();
    this.applyGravity();
  }

  throw() {
    this.speed =
      world.character.movingRight || world.character.movingLeft
        ? 10
        : 5;
    this.move = world.character.otherDirection
      ? this.moveLeft
      : this.moveRight;
    this.moveInterval = setInterval(() => {
      this.move();
    }, 1000 / 100);
    setInterval(() => {
      this.playAnimation(this.IMAGES_ROTATION);
    }, 125);
    console.log(world);

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
