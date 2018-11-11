function createDudeAnimation(game) {
    game.anims.create({
        key: 'right',
        frames: game.anims.generateFrameNumbers('dude', { start: 1, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'turnLeft',
        frames: [ { key: 'dude', frame: 7 } ],
        frameRate: 20
    });

    game.anims.create({
        key: 'turnRight',
        frames: [ { key: 'dude', frame: 0 } ],
        frameRate: 20
    });

    game.anims.create({
        key: 'left',
        frames: game.anims.generateFrameNumbers('dude', { start: 8, end: 10 }),
        frameRate: 10,
        repeat: -1
    });
}


function createTankAnimation(game) {
    game.anims.create({
        key: 'tankRight',
        frames: game.anims.generateFrameNumbers('tank', { start: 6, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'tankLeft',
        frames: game.anims.generateFrameNumbers('tank', { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'tankUp',
        frames: game.anims.generateFrameNumbers('tank', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'tankDown',
        frames: game.anims.generateFrameNumbers('tank', { start: 4, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
}

function createBrickAnimation(game) {
    game.anims.create({
        key: 'brickStay',
        frames: game.anims.generateFrameNumbers('tank', { start: 16, end: 16 }),
        frameRate: 10,
        repeat: 1
    });

    game.anims.create({
        key: 'halfBrickStay',
        frames: game.anims.generateFrameNumbers('tank', { start: 20, end: 20 }),
        frameRate: 10,
        repeat: 1
    });
}