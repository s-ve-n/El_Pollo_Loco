class Cloud extends MovableObject {
  static lastx = -200;
  x = Cloud.lastx + 500;
  y = 20;
  width = 500;
  height = 250;

  constructor() {
    super();
    this.loadImage('img/5.Fondo/Capas/4.nubes/1.png');
    this.animate();
    Cloud.lastx = this.x;
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      this.x -= 0.15;
    }, 1000 / 60);
  }
}
