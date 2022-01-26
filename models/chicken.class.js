class Chicken extends MovableObject {
  static lastx = 500;
  x = Chicken.lastx + Math.random() * 500;
  y = 360;
  width = 80;
  height = 60;
  speed = 0;
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
    let interval1;
    let interval2;
    if (x == 1) {
      interval1 = setInterval(() => {
        this.moveLeft();
      }, 10);

      interval2 = setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
        console.log('interval2 running');
      }, 200);
    } else if (x == 0) {
      clearInterval(interval1);
      clearInterval(interval2);
      return 'true';
    }
  }

  deadImage() {
    this.animate(0);
    console.log(this.animate(0));
    this.loadImage(
      'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    );
  }
}
