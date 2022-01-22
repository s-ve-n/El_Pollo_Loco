class StatusBarHealth extends DrawableObject {
  IMAGES = [
    'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
  ];

  x = 40;
  y = 0;
  width = 200;
  height = 60;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercent(100);
  }

  setPercent(percent) {
    this.percent = percent;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percent == 100) {
      return 5;
    } else if (this.percent >= 80) {
      return 4;
    } else if (this.percent >= 60) {
      return 3;
    } else if (this.percent >= 40) {
      return 2;
    } else if (this.percent >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
