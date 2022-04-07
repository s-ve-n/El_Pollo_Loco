class ChickenSmall extends MovableObject {
  static lastx = 500;
  x = ChickenSmall.lastx + Math.random() * 500;
  y = 380;
  width = 60;
  height = 40;
  speed = 0;
  interval1;
  interval2;
  dead = false;
  IMAGES_WALKING = [
    'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
    'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
    'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png',
  ];

  constructor() {
    super();
    this.loadImage(
      'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png'
    );
    this.loadImages(this.IMAGES_WALKING);
    this.animate(1);
    ChickenSmall.lastx = this.x;
  }

  animate(x) {
    if (x == 1) {
      this.interval1 = setInterval(() => {
        this.moveLeft();
      }, 10);

      this.interval2 = setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
      }, 200);
    } else if (x == 0) {
      clearInterval(this.interval1);
      clearInterval(this.interval2);
      this.dead = true;
    }
  }

  deadImage() {
    this.animate(0);
    this.loadImage(
      'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
    );
  }
}
