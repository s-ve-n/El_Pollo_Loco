class ThrowableObject extends MovableObject {
  width = 70;
  height = 60;

  constructor(x, y) {
    super();
    this.loadImage('img/7.Marcadores/Icono/Botella.png');
    this.x = x;
    this.y = y;
    this.throw();
  }

  throw() {
    this.speedY = 10;
    this.applyGravity();
    if (!this.otherDirection) {
      setInterval(() => {
        this.x += 5;
      }, 1000 / 100);
    } else {
      setInterval(() => {
        this.x -= 5;
      }, 1000 / 100);
    }
  }
}
