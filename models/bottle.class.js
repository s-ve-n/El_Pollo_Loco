class Bottle extends DrawableObject {
  static lastx = -200;
  x = Bottle.lastx + Math.random() * 700;
  y = 360;
  width = 80;
  height = 60;
  number = 1;
  img = Bottle.nextImg;
  static nextImg = 'img/6.botella/2.Botella_enterrada1.png';

  constructor() {
    super();
    this.loadImage(this.img);
    Bottle.lastx = this.x;
    this.getValue(this.number);
    Bottle.nextImg = `img/6.botella/2.Botella_enterrada${this.number}.png`;
  }

  getValue(number) {
    if (number == 1) this.number = 2;
    if (number == 2) this.number = 1;
  }
}
