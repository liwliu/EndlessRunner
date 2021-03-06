class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    create() {
      if (game.settings.survivalTime > hiScore){
        hiScore = game.settings.survivalTime;
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding - 100, 'NEW HIGH SCORE!!', menuConfig).setOrigin(0.5);
      }
        
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'GAME OVER', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'YOU SURVIVED FOR ' + game.settings.survivalTime + ' SECONDS', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 42, 'USE R TO RESTART', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 84, 'PRESS SPACE TO RETURN TO MENU', menuConfig).setOrigin(0.5);
        
        
        /*menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        */
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
          game.settings = {
            speed: 4,
            gameOver: false
          }
          this.scene.start("playScene");    
        }

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          this.scene.start("menuScene");
        }
      }
}