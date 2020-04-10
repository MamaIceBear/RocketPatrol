//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);

        //Adds rocket into the scene
        scene.add.existing(this);
        this.points = pointValue;
    }

    update(){
        //Move spaceship left
        this.x -= 3;
        //Wraparound sceen bounds
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }
}