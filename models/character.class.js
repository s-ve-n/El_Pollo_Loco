class Character extends MovableObject {
  x = 0;
  y = 0;
  height = 250;
  speed = 3.5;
  movingRight = false;
  movingLeft = false;
  gamelost = false;
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
  trigger = false;

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
        world.keyboard.RIGHT &&
        this.x < world.level.level_end_x &&
        this.energy > 0
      ) {
        this.moveRight();
        this.otherDirection = false;
        this.movingRight = true;
      }

      if (!world.keyboard.RIGHT) {
        this.movingRight = false;
      }

      if (world.keyboard.LEFT && this.x > 0 && this.energy > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.movingLeft = true;
      }

      if (!world.keyboard.LEFT) {
        this.movingLeft = false;
        // console.log(this.movingLeft);
      }

      if (
        world.keyboard.SPACE &&
        !this.isAboveGround() &&
        this.energy > 0 //&&
        // this.jumpcounter == 0
      ) {
        this.jump();
      }

      world.camera_x = -this.x + 100;
    }, 1000 / 100);

    setInterval(() => {
      if (
        (world.keyboard.RIGHT || world.keyboard.LEFT) &&
        this.energy > 0 &&
        !this.isAboveGround()
      ) {
        this.playAnimation(this.IMAGES_WALKING);
      }
      if (this.isHurt() && this.energy > 0) {
        this.playAnimation(this.IMAGES_HURT);
      }
      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      }
    }, 100);

    // if (this.isAboveGround()) {
    //   setInterval(() => {
    //     this.playAnimation(this.IMAGES_JUMPING);
    //   }, 100);
    // }

    //   setInterval(() => {
    //     if (this.isAboveGround()) this.trigger = true; console.log(this.trigger);
    //     if (!this.isAboveGround()) this.trigger = false; console.log(this.trigger);
    //   }, 1000 / 100);

    //   setInterval(() => {
    //   if (this.trigger) {
    //     setInterval(() => {
    //       this.playAnimation(this.IMAGES_JUMPING);
    //     }, 100);
    //   }
    // }, 1000 / 100);

    setInterval(() => {
      if (
        !this.isAboveGround() &&
        !world.keyboard.LEFT &&
        !world.keyboard.RIGHT &&
        !this.isHurt() &&
        this.energy > 0
      ) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 200);

    let timesRun = 0;
    let interval1 = setInterval(() => {
      if (this.isDead()) {
        this.currentImage = 0;
        timesRun++;
        if (timesRun == 1) clearInterval(interval1);
      }
    }, 1000 / 60);

    let timesRun2 = 0;
    let interval2 = setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        timesRun2++;
        if (timesRun2 == 6) {
          setTimeout(() => {
            this.gamelost = true;
          }, 1000);
          setTimeout(() => {
            location.reload();
          }, 4000);
          clearInterval(interval2);
        }
      }
    }, 200);

    // setInterval(() => {
    //   if (!this.isAboveGround()) this.currentImage = 0;
    // }, 1000 / 60);

    // setInterval(() => {
    //   console.log(this.currentImage);
    // }, 1000 / 60);
  }
}
