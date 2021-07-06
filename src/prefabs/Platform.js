class Platform extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = game.settings.speed;
        this.ifhuman = Math.floor(Math.random() * 4);
        this.ifmale = Math.floor(Math.random() * 2);
        this.position = this.x + Math.floor(Math.random() * 164);
        if(this.ifhuman == 1){
            if(this.ifmale == 1){
                this.human = new Human(window.playScene, this.position, this.y - 32, 'male', 0).setOrigin(0, 0);
            }else{
                this.human = new Human(window.playScene, this.position, this.y - 32, 'female', 0).setOrigin(0, 0);
            }
        }else{
            if(this.ifmale == 1){
                this.human = new Human(window.playScene, -100, this.y - 32, 'male', 0).setOrigin(0, 0);
            }else{
                this.human = new Human(window.playScene, -100, this.y - 32, 'female', 0).setOrigin(0, 0);
            }
        }
    }

    update() {
        this.x -= this.moveSpeed;
        this.human.update();
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        this.x = game.config.width + Math.floor(Math.random() * 65);
        this.ifhuman = Math.floor(Math.random() * 4);
        if(this.ifhuman == 1){
            this.human.reset(this.x);
        }
    }
}