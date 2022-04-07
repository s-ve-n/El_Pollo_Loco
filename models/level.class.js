class Level {
  level_end_x = 3800;
  bottles = [];
  clouds = [];
  chickens = [];
  backgroundObjects = [];
  endboss = new Endboss();

  constructor() {
    this.addClouds();
    this.addChickensBig();
    this.addBackgroundObjects();
    this.addBottles();
  }

  addClouds() {
    for (let i = 0; i < 100; i++) {
      this.clouds[i] = new Cloud();
    }
  }

  addChickensBig() {
    for (let i = 0; i < 5; i++) {
      this.chickens[i] = new ChickenBig();
    }
  }

  addBottles() {
    for (let i = 0; i < 5; i++) {
      this.bottles[i] = new Bottle();
    }
  }

  addBackgroundObjects() {
    this.backgroundObjects = [
      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1438),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1438),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1438),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1438),

      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 2157),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 2157),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 2157),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 2157),

      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 2876),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 2876),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 2876),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 2876),

      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 3595),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 3595),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 3595),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 3595),

      new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 4314),
      new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 4314),
      new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 4314),
      new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 4314),
    ];
  }
}
