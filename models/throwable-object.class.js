class ThrowableObject extends MovableObject {
  width = 50;
  height = 60;

  constructor(x, y) {
    super();
    this.loadImage('img/7.Marcadores/Icono/Botella.png');
    this.x = x;
    this.y = y;
    this.throw();
  }

  throw() {
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
