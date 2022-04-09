class BottleCounter extends DrawableObject {
  IMAGES = [
    'img/7.Marcadores/Icono/Botella.png',
  ];

  x = 25;
  y = 60;
  width = 70;
  height = 60;
  percent = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercent(0);
  }

  setPercent(percent) {
    this.percent += percent;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percent == 0) {
      return 0;
    } else if (this.percent == 20) {
      return 1;
    } else if (this.percent == 40) {
      return 2;
    } else if (this.percent == 60) {
      return 3;
    } else if (this.percent == 80) {
      return 4;
    } else if (this.percent >= 100) {
      return 5;
    }
  }
}
