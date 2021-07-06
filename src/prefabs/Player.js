class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 2

        this.ACCELERATION = 500;
        this.MAX_X_VEL = 500;   // pixels/second
        this.MAX_Y_VEL = 5000;
        this.DRAG = 600;    // DRAG < ACCELERATION = icy slide
        this.JUMP_VELOCITY = -1000;
        //this.physics.world.gravity.y = 3000;
    }

    update() {
        if (keyW.isDown && this.y < this.width + borderUISize ){
            // jump
            // this.y += this.moveSpeed;
            this.y += this.moveSpeed;
        }
        if (keyA.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }

        if (keyS.isDown && this.y > borderUISize){
            // drop down.
            this.y -= this.moveSpeed;
        }
    }

    reset() {

    }
    
}