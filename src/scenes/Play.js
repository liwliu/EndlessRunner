class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load assets here
        this.load.image('platform', './assets/img/platform.png');
    }

    create() {
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