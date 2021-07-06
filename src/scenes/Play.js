class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load assets here
        this.load.image('platform', './assets/img/platform.png');
        this.load.image('female', './assets/img/femaleHumanEndless.png')
        this.load.image('male', './assets/img/maleHumanEndless.png')
        this.load.image('alien', './assets/img/characterEndlessRunner.png')
        this.load.image('background', './assets/img/backgroundEndlessRunner.png')
        this.load.spritesheet('ufo', './assets/img/UFO Animation.png', {frameWidth:64, frameHeight:64, startFrame: 0, endFrame:13});
    }

    create() {
        window.playScene = this;
        //spawn 3 platforms per level starting at 300 pixels apart
        this.plat1 = new Platform(this, game.config.width + borderUISize*6, borderUISize*2, 'platform', 0).setOrigin(0, 0);
        this.plat2 = new Platform(this, game.config.width + borderUISize*6 - 280, borderUISize*2, 'platform', 0).setOrigin(0, 0);
        this.plat3 = new Platform(this, game.config.width + borderUISize*6 - 560, borderUISize*2, 'platform', 0).setOrigin(0, 0);
        this.plat4 = new Platform(this, game.config.width + borderUISize*6, borderUISize*5, 'platform', 0).setOrigin(0, 0);
        this.plat5 = new Platform(this, game.config.width + borderUISize*6 - 280, borderUISize*5, 'platform', 0).setOrigin(0, 0);
        this.plat6 = new Platform(this, game.config.width + borderUISize*6 - 560, borderUISize*5, 'platform', 0).setOrigin(0, 0);
        this.plat7 = new Platform(this, game.config.width + borderUISize*6, borderUISize*8, 'platform', 0).setOrigin(0, 0);
        this.plat8 = new Platform(this, game.config.width + borderUISize*6 - 280, borderUISize*8, 'platform', 0).setOrigin(0, 0);
        this.plat9 = new Platform(this, game.config.width + borderUISize*6 - 560, borderUISize*8, 'platform', 0).setOrigin(0, 0);
        this.plat10 = new Platform(this, game.config.width + borderUISize*6, borderUISize*11, 'platform', 0).setOrigin(0, 0);
        this.plat11 = new Platform(this, game.config.width + borderUISize*6 - 280, borderUISize*11, 'platform', 0).setOrigin(0, 0);
        this.plat12 = new Platform(this, game.config.width + borderUISize*6 - 560, borderUISize*11, 'platform', 0).setOrigin(0, 0);
        this.plat13 = new Platform(this, game.config.width + borderUISize*6, borderUISize*14, 'platform', 0).setOrigin(0, 0);
        this.plat14 = new Platform(this, game.config.width + borderUISize*6 - 280, borderUISize*14, 'platform', 0).setOrigin(0, 0);
        this.plat15 = new Platform(this, game.config.width + borderUISize*6 - 560, borderUISize*14, 'platform', 0).setOrigin(0, 0);


        // ANIMATIONS
        this.anims.create({key: 'ufoAnim', frames: this.anims.generateFrameNumbers('ufo',{start:0, end:13, first:0}), frameRate: 10, repeat: -1});

        //UFO
        this.UFO = this.add.sprite(10, 10, 'ufoAnim').setOrigin(0,0);

        this.UFO.anims.play('ufoAnim');
    }
    update() {
        this.plat1.update();
        this.plat2.update();
        this.plat3.update();
        this.plat4.update();
        this.plat5.update();
        this.plat6.update();
        this.plat7.update();
        this.plat8.update();
        this.plat9.update();
        this.plat10.update();
        this.plat11.update();
        this.plat12.update();
        this.plat13.update();
        this.plat14.update();
        this.plat15.update();
    }

}