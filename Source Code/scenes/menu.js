class Menu extends Phaser.Scene
{
    constructor()
    {
        super("menuScene");
    }
    preload()
    {
        this.load.audio('sfx_select', './Assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './Assets/explosion38.wav');
        this.load.audio('sfx_rocket', './Assets/rocket_shot.wav');
    }
    create()
    {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //Show the text menu
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64; //Spaces by certain amount of pixels

        this.add.text(centerX, centerY - textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Variant by Sam Nguyen', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Use <- -> arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + textSpacer * 2, 'Press <- for EASY or -> for HARD', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update()
    {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) 
        {
            //Easy Mode
            game.settings = 
            {
                spaceshipSpeed: 3,
                gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) 
        {
            //Hard Mode
            game.settings = 
            {
              spaceshipSpeed: 4,
              gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");  
        }
    }
}