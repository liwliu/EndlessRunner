class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 2
           
    }

    update() {
        if (keyW.isDown && this.y < this.width + borderUISize){
            // jump
            // this.y += this.moveSpeed;
        }
        if (keyA.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.movementSpeed;
        } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.movementSpeed;
        }

        if (keyS.isDown && this.y > borderUISize){
            // drop down.
        }
    }

    reset() {

    }
    
}