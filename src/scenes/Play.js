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
        this.load.spritesheet('bigUFO', './assets/img/UFOanim.png',{frameWidth:128, frameHeight: 128, startFrame:0, endFrame:13});
    }

    create() {
        window.playScene = this;
        this.gameOver = false;

        this.cityBackground = this.add.tileSprite(0,0, 640, 480, 'background').setOrigin(0,0);
        // ANIMATIONS
        //this.anims.create({key: 'ufoAnim', frames: this.anims.generateFrameNumbers('ufo',{start:0, end:13, first:0}), frameRate: 10, repeat: -1});
        this.anims.create({key: 'bigUFO', frames: this.anims.generateFrameNumbers('bigUFO', {start:0, end:13, first:0}), frameRate:5, repeat: -1});

        //UFO
        this.UFO = this.add.sprite(200, 200, 'bigUFO').setOrigin(0,0);

        this.UFO.anims.play('bigUFO');

        //Background


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

        this.alien = new Player(this, 100, borderUISize*14 - 32, 'alien', 0).setOrigin(0,0);
        
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
        let timeConfig = {
            fontFamily: 'Impact',
            fontSize: '40px',
            color: '#3CD070',
        }

        this.timePassed = 0;
        this.timeText = this.add.text(500, 10, 0, timeConfig);
        let x = 0
        
        while(x<1000){
           this.clock = this.time.delayedCall((x * 1000) , () => {
                this.timeText.text = this.timePassed++;
           },null, this);
           x++;
        }
    }

    update() {
        if(this.game.settings.gameOver){
            game.settings.survivalTime = this.timePassed;
            this.scene.start("gameOver");
        }

        //insert moving background
        this.cityBackground.tilePositionX += 3;

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
        this.alien.update();
    }


}