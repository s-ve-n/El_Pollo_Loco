class Bottle extends DrawableObject {
  static lastx = 100;
  x = Bottle.lastx + Math.random() * 500;
  y = 360;
  width = 80;
  height = 60;
  static number = 1;

  constructor() {
    super();
    Bottle.lastx = this.x;
    Bottle.img = `img/6.botella/2.Botella_enterrada${Bottle.number}.png`;
    this.loadImage(Bottle.img);
    // this.getNumber(Bottle.number);
    this.getNumber();
  }

  // getNumber(number) {
  //   if (number == 1) Bottle.number = 2;
  //   if (number == 2) Bottle.number = 1;
  // }

  getNumber() {
    if (Math.random() < 0.5) Bottle.number = 1;
    else Bottle.number = 2;
  }

  // this.bottles[i] = new Bottle(Math.random());

  // constructor(number) {
  //   super();
  //   Bottle.lastx = this.x;
  //   this.getNumber(number);
  //   this.img = `img/6.botella/2.Botella_enterrada${this.number}.png`;
  //   this.loadImage(this.img);
  // }

  //   getNumber(number) {
  //   if (number < 0.5) this.number = 1;
  //   else this.number = 2;
  // }
}
