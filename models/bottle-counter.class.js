class BottleCounter extends DrawableObject {
  x = 25;
  y = 60;
  width = 70;
  height = 60;
  img = 'img/7.Marcadores/Icono/Botella.png';

  constructor() {
    super();
    this.loadImage(this.img);
  }
}

