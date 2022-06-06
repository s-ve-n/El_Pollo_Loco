class Gameover extends DrawableObject {
  width = 720;
  height = 480;
  x = 0;
  y = 0;

  IMAGE_GAMEOVER = [
    'img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png',
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGE_GAMEOVER[0]);
    this.loadImages(this.IMAGE_GAMEOVER);
  }
}
