class Startscreen extends DrawableObject {
  x = 0;
  y = 0;
  width = 720;
  height = 480;

  constructor() {
    super();
    this.loadImage('img/9.Intro _ Outro Image/Start Screen/Opción 1.png');
  }

  removeStartscreen() {
    this.width = 0;
    this.height = 0;
    this.chickenBigSpeed();
    this.chickenSmallSpeed();
  }

  chickenBigSpeed() {
    for (let i = 0; i < this.world.level.chickensBig.length; i++)
      this.world.level.chickensBig[i].speed = 0.5 + Math.random() * 0.5;
  }

  chickenSmallSpeed() {
    for (let i = 0; i < this.world.level.chickensSmall.length; i++)
      this.world.level.chickensSmall[i].speed = 0.5 + Math.random() * 0.5;
  }
}
