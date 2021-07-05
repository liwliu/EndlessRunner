class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load audio here
    }

    create() {
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '40px',
            //backgroundColor: '#D3D3DE',
            color: '#3CD070',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ALIEN INVASION', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'USE SPACE TO START', menuConfig).setOrigin(0.5);
        /*menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        */
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          game.settings = {
            speed: 20,
          }
          this.scene.start("playScene");    
        }
      }
}