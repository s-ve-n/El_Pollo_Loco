class StatusBarBottles extends DrawableObject {
  IMAGES = [
    'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
  ];

  x = 40;
  y = 55;
  width = 200;
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