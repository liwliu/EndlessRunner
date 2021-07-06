class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load audio here
        this.load.image('menuBackground', './assets/img/endlessrunnerMenu.png');
        this.load.audio('jump', './assets/audio/jump.wav');
        this.load.audio('menuMusic', './assets/audio/menuMusic.wav'); 
    }

    create() {

       menuMusic = this.sound.add('menuMusic');
       menuMusic.play({loop: true});
       

        

        //menu background
        this.newMenu - this.add.tileSprite(0,0, 640, 480, 'menuBackground').setOrigin(0,0);
        
        //this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ALIEN INVASION', menuConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2, 'USE SPACE TO START', menuConfig).setOrigin(0.5);
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        if (hiScore > 0) {
            this.add.text(140, 35, ' HI-SCORE: ' + hiScore + " SEC", menuConfig).setOrigin(0.5);
        }
        
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          game.settings = {
            speed: 4,
            gameOver: false,
            survivalTime: 0
          }
          this.scene.start("playScene");    
        }
      }
}