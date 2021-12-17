class ThrowableObject extends MovableObject {
  constructor(x, y) {
    super().loadImage('img/7.Marcadores/Icono/Botella.png');
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 60;
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
