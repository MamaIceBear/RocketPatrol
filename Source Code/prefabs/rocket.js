//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //Adds rocket to the scene
        this.isFiring = false; //Track rocket's firing status
        this.sfxRocket = scene.sound.add('sfx_rocket'); //Adds rocket sound effect
    }
    
    update()
    {
        //Left/Right movement
        if(!this.isFiring)
        {
            if(keyLEFT.isDown && this.x >= 47)
            {
                this.x -= 2;
            }
            else if(keyRIGHT.isDown && this.x <= 578)
            {
                this.x += 2;
            }
        }
        //Fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring)
        {
            this.isFiring = true;
            this.sfxRocket.play(); //Play the rocket sound effect
        }
        //If firing
        if(this.isFiring && this.y >= 108)
        {
            this.y -= 2;
        }
        //If the rocket reaches a certain pixel height
        if(this.y <= 108)
        {
            this.isFiring = false;
            this.y = 431;
        }
    }

    reset()
    {
        this.isFiring = false;
        this.y = 431;
    }
}