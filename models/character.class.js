class Character extends MovableObject {
  y = 180;
  height = 250;
  speed = 7.5;
  dead = false;
  IMAGES_WALKING = [
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
  ];

  IMAGES_JUMPING = [
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
  ];

  IMAGES_DEAD = [
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
  ];

  IMAGES_HURT = [
    'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
  ];

  IMAGES_IDLE = [
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png',
  ];

  constructor() {
    super();
    this.loadImage(
      'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png'
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT &&
        this.x < this.world.level.level_end_x &&
        this.energy > 0
      ) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0 && this.energy > 0) {
        this.moveLeft();
        this.otherDirection = true;
      }

      if (
        this.world.keyboard.SPACE &&
        !this.isAboveGround() &&
        this.energy > 0 &&
        this.jumpcounter == 0
      ) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (
        (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) &&
        this.energy > 0 &&
        !this.isAboveGround()
      ) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 100);

    setInterval(() => {
      if (this.isHurt() && this.energy > 0) {
        this.playAnimation(this.IMAGES_HURT);
      }
    }, 100);

    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      }
    }, 100);

    setInterval(() => {
      if (
        !this.isAboveGround() &&
        !this.world.keyboard.LEFT &&
        !this.world.keyboard.RIGHT &&
        !this.isHurt() &&
        this.energy > 0
      ) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 200);

    setInterval(() => {
      if (this.isDead()) {
        this.dead = true;
      }
    }, 1000 / 60);

    let timesRun = 0;
    let interval = setInterval(() => {
      if (this.dead == true) {
        playdead();
        timesRun++;
        if (timesRun == 1) {
          clearInterval(interval);
        }
      }
    }, 1000 / 60);

    let playdead = () => {
      let playAnimationDead = setInterval(() => {
        console.log(this.dead);
        this.playAnimation(this.IMAGES_DEAD);
        console.log('dead');
        setTimeout(() => {
          clearInterval(playAnimationDead);
        }, 1000);
      }, 1000);
    };

    // setInterval(() => {
    //   setTimeout(() => {
    //     if (this.isDead()) {
    //       this.loadImage(
    //         'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png'
    //       );
    //     }
    //   }, 1000);
    // }, 1000 / 60);
  }
}
