class ThrowableObject extends MovableObject {
  width = 70;
  height = 60;

  constructor(world, x, y) {
    super();
    this.loadImage('img/7.Marcadores/Icono/Botella.png');
    this.x = x;
    this.y = y;
    this.world = world;
    this.throw();
  }

  throw() {
    this.speedY = 10;
    this.applyGravity();
    let intervall1;
    let intervall2;
    if (!this.world.character.otherDirection) {
      if (!this.world.character.moving) {
        clearInterval(intervall2);
        intervall1 = setInterval(() => {
          this.x += 5;
          console.log('1');
        }, 1000 / 100);
      } if (this.world.character.moving) {
        clearInterval(intervall1);
        intervall2 = setInterval(() => {
          this.x += 8.5;
          console.log('2');
        }, 1000 / 100);
      }
    } else {
      setInterval(() => {
        this.x -= 5;
      }, 1000 / 100);
    }
  }
}
