let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [menu, play],
};

let game = new Phaser.Game(config);
