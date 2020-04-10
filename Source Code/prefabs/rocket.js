//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //Adds rocket into the scene
        scene.add.existing(this);
        this.isFiring = false; //Track rocket's firing status
    }
    update(){
        //Left/Right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= 47){
                this.x -= 2;
            }
            else if(keyRIGHT.isDown && this.x <= 578){
                this.x += 2;
            }
        }
        //Fire button
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true;
        }
        //If firing
        if(this.isFiring && this.y >= 108){
            this.y -= 2;
        }
        if(this.y <= 108){
            this.isFiring = false;
            this.y = 431;
        }
    }
}