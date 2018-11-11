var Bullet = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    // Bullet Constructor
        function Bullet (scene)
        {
            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
            this.speed = 0.1;
            this.xSpeed = 0;
            this.ySpeed = 0;
            this.setSize(6, 6, true);
        },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        this.setPosition(shooter.x, shooter.y); // Initial position

        switch (shooter.directionOfMove) {
            case "up":
                this.ySpeed = -1*this.speed;
                this.xSpeed = 0;
                break;
            case "down":
                this.ySpeed = this.speed;
                this.xSpeed = 0;
                break;
            case "left":
                this.xSpeed = -1*this.speed;
                this.ySpeed = 0;
                break;
            case "right":
                this.xSpeed = this.speed;
                this.ySpeed = 0;
                break;
        }
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
    }

});