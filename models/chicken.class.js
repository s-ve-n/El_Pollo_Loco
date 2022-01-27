class Chicken extends MovableObject {
  static lastx = 500;
  x = Chicken.lastx + Math.random() * 500;
  y = 360;
  width = 80;
  height = 60;
  speed = 0;
  interval1;
  interval2;
  dead = false;
  IMAGES_WALKING = [
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
  ];

  constructor() {
    super();
    this.loadImage(
      'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png'
    );
    this.loadImages(this.IMAGES_WALKING);
    this.animate(1);
    Chicken.lastx = this.x;
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
      'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    );
  }
}
