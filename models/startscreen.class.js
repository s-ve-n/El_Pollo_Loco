class Startscreen extends DrawableObject {
  constructor() {
    super();
  }

  removeStartscreen() {
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
