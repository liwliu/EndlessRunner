class Human extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = game.settings.speed;
    }


    update() {
        this.x -= this.moveSpeed;
        if(this.checkCollision(window.playScene.alien, this)){
            game.settings.gameOver = true;
        }
    }

    reset(platx) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        this.x = platx + Math.floor(Math.random() * 164);
    }

    checkCollision(alien, human) {
        if (alien.x < human.x + human.width && 
            alien.x + alien.width > human.x && 
            alien.y < human.y + human.height &&
            alien.height + alien.y > human. y) {
                return true;
        } else {
            return false;
        }
    }
}