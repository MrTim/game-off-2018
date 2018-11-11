function solidLayerInit() {
    // When loading from an array, make sure to specify the tileWidth and tileHeight
    const solidMap = this.make.tilemap({data: solidLevel, tileWidth: 16, tileHeight: 16});
    const solidTiles = solidMap.addTilesetImage("mario-tiles");
    solidLayer = solidMap.createStaticLayer(0, solidTiles, 0, 600 - cellSize * solidLevel.length);
    solidLayer.scaleX = 2;
    solidLayer.scaleY = 2;
    solidLayer.setCollisionByProperty({collides: true});

    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // solidLayer.renderDebug(debugGraphics, {
    //     tileColor: null, // Color of non-colliding tiles
    //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });
    solidLayer.setCollision(3);
    //
    //     ///////////////////
    // // When loading from an array, make sure to specify the tileWidth and tileHeight
    // const weakMap = this.make.tilemap({data: weakLevel, tileWidth: 16, tileHeight: 16});
    // const weakTiles = weakMap.addTilesetImage("mario-tiles");
    // weakLayer = weakMap.createStaticLayer(0, weakTiles, 0, 600 - cellSize * weakLevel.length);
    // weakLayer.scaleX = 2;
    // weakLayer.scaleY = 2;
    //
    // weakWalls = weakMap.createFromTiles(4, 2, 'weakWalls');
}