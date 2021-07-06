class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    create() {
        let menuConfig = {
            fontFamily: 'ShowGothic',
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
        
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'GAME OVER', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'YOU SURVIVED FOR ' + game.settings.survivalTime + ' SECONDS', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 42, 'USE SPACE TO RESTART', menuConfig).setOrigin(0.5);
        
        
        /*menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        */
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          game.settings = {
            speed: 4,
            gameOver: false
          }
          this.scene.start("playScene");    
        }
      }
}