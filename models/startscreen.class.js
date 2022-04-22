class Startscreen extends DrawableObject {
  constructor() {
    super();
  }

  removeStartscreen() {
    this.chickenBigSpeed();
    this.chickenSmallSpeed();
  }

  chickenBigSpeed() {
    for (let i = 0; i < world.level.chickensBig.length; i++)
      world.level.chickensBig[i].speed = 0.5 + Math.random() * 0.35;
  }

  chickenSmallSpeed() {
    for (let i = 0; i < world.level.chickensSmall.length; i++)
      world.level.chickensSmall[i].speed = 0.5 + Math.random() * 0.15;
  }
}
