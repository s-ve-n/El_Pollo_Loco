class Endboss extends MovableObject {
  width = 250;
  height = 400;
  x = 4000;
  y = 55;

  IMAGES_WALKING = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
  ];

  IMAGES_HURT = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
  ];

  IMAGES_DEAD = [
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.energyBoss > 0) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 200);

    setInterval(() => {
      if (this.isHurtBoss() && this.energyBoss > 0) {
        this.playAnimation(this.IMAGES_HURT);
      }
    }, 100);

    let timesRun = 0;
    let interval1 = setInterval(() => {
      if (this.isDeadBoss()) {
        this.currentImage = 0;
        timesRun++;
        if (timesRun == 1) clearInterval(interval1);
      }
    }, 1000 / 60);

    let timesRun2 = 0;
    let interval2 = setInterval(() => {
      if (this.isDeadBoss()) {
        this.playAnimation(this.IMAGES_DEAD);
        this.y += 50;
        timesRun2++;
        if (timesRun2 == 9) {
          clearInterval(interval2);
        }
      }
    }, 200);
  }
}
