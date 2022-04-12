class ThrowableObject extends MovableObject {
  width = 70;
  height = 60;

  constructor(world, x, y) {
    super();
    this.loadImage("img/7.Marcadores/Icono/Botella.png");
    this.x = x;
    this.y = y;
    this.world = world;
    this.throw();
    this.speedY = 10;
    this.applyGravity();
  }

  throw() {
    // let pos = this.world.throwableObjects.indexOf(this.world.bottle);

    if (!this.world.character.otherDirection) {
      if (!this.world.character.moving) {
        for (let index = 0; index < this.world.intervalArray.length; index++) {
          clearInterval(this.world.intervalArray[index]);
        }
        this.world.interval1 = setInterval(() => {
          this.x += 5;
          console.log("1");
        }, 1000 / 100);
        this.world.intervalArray.push(this.world.interval1);
        // this.world.pos1 = this.world.intervalArray.indexOf(
        //   this.world.interval1
        // );
        console.log(this.world.intervalArray);
      }
      if (this.world.character.moving) {
        for (let index = 0; index < this.world.intervalArray.length; index++) {
          clearInterval(this.world.intervalArray[index]);
        }
        this.world.interval2 = setInterval(() => {
          this.x += 10;
          console.log("2");
        }, 1000 / 100);
        this.world.intervalArray.push(this.world.interval2);
        // this.world.pos2 = this.world.intervalArray.indexOf(
        //   this.world.interval2
        // );
        console.log(this.world.intervalArray);
      }
    }

    if (this.world.character.otherDirection) {
      interval3 = setInterval(() => {
        this.x -= 5;
      }, 1000 / 100);
    }

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
