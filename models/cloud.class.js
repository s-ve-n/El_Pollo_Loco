class Cloud extends MovableObject {
  y = 20;
  width = 500;
  height = 250;

  constructor() {
    super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

    this.x = 200 + Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }



}
