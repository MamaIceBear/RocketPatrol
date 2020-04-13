//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //Adds spaceship to scene
        this.points = pointValue;
    }

    update()
    {
        //Move spaceship left
        this.x -= game.settings.spaceshipSpeed;
        //Wraparound sceen bounds
        if(this.x <= 0 - this.width)
        {
            this.reset();
        }
    }

    reset()
    {
        this.x = game.config.width;
    }
}