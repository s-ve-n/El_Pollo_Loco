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
  }

  throw() {
    let interval1 = setInterval(() => {
      this.x += 5;
      console.log("1");
    }, 1000 / 100);
    let interval2 = setInterval(() => {
      this.x += 8.5;
      console.log("2");
    }, 1000 / 100);
    this.speedY = 10;
    this.applyGravity();
    if (!this.world.character.otherDirection) {
      if (!this.world.character.moving) {
        clearInterval(interval2);
        interval1;
      }
      if (this.world.character.moving) {
        clearInterval(interval1);
        interval2;
      }
    }
    if (this.world.character.otherDirection) {
      setInterval(() => {
        this.x -= 5;
      }, 1000 / 100);
    }
  }
}
