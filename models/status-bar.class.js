class StatusBar extends DrawableObject {
  IMAGES = [
    'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
  ];

  percent = 100;

  constructor() {
    this.loadImages(this.IMAGES);
  }

  setPercent(percent) {
    this.percent = percent;
    let imagePath = this.IMAGES[this.resolveImageIndex()];
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
