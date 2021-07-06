class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moving = false;

        this.sfxJump = scene.sound.add('jump');

        //this.ACCELERATION = 500;
        //this.MAX_X_VEL = 500;   // pixels/second
        //this.MAX_Y_VEL = 5000;
        //this.DRAG = 600;    // DRAG < ACCELERATION = icy slide
        //this.JUMP_VELOCITY = -1000;
        //this.physics.world.gravity.y = 3000;
    }
 

    update() {
        if(this.y > 500){
            game.settings.gameOver = true;
        }
        if(!this.moving) {
            if(Phaser.Input.Keyboard.JustDown(keyW)) {
                this.moving = true;
                for(let x = 0; x < 96; x++){
                    this.clock = window.playScene.time.delayedCall((x * 5) , () => {
                        this.y--;
                        if(x == 95){
                            this.moving = false;
                        }
                    },null, this);
                }
                this.sfxJump.play();
            }
            if((window.playScene.timePassed > 1) && (Phaser.Input.Keyboard.JustDown(keyS) || !this.checkPlatform(this, window.playScene.plat1) && !this.checkPlatform(this, window.playScene.plat2) && !this.checkPlatform(this, window.playScene.plat3) && !this.checkPlatform(this, window.playScene.plat4) && !this.checkPlatform(this, window.playScene.plat5) && !this.checkPlatform(this, window.playScene.plat6) && !this.checkPlatform(this, window.playScene.plat7) && !this.checkPlatform(this, window.playScene.plat8) && !this.checkPlatform(this, window.playScene.plat9) && !this.checkPlatform(this, window.playScene.plat10) && !this.checkPlatform(this, window.playScene.plat11) && !this.checkPlatform(this, window.playScene.plat12) && !this.checkPlatform(this, window.playScene.plat13) && !this.checkPlatform(this, window.playScene.plat14) && !this.checkPlatform(this, window.playScene.plat15))){
                this.moving = true;
                for(let x = 0; x < 96; x++){
                    this.clock = window.playScene.time.delayedCall((x * 5) , () => {
                        this.y++;
                        if(x == 95){
                            this.moving = false;
                        }
                    },null, this);
                }
            }
        }
    }

    checkPlatform(alien, platform) {
        if (alien.x < platform.x + platform.width && 
            alien.x + alien.width > platform.x && 
            alien.y < platform.y + platform.height -11 &&
            alien.height + alien.y + 11 > platform. y) {
                return true;
        } else {
            return false;
        }
    }

    
}