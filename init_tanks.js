function initTanks(that) {
    tanks.children.iterate(function (child) {
        var tankSpeed = 80;
        child.setScale(2);
        child.lastFired = 0;
        child.body.allowGravity = false;
        child.setCollideWorldBounds(true);
        setInterval(function () {
            if (child.active == true) {
                switch (getRandomInt(0, 4)) {
                    case 0:
                        child.setVelocityX(tankSpeed);
                        child.setVelocityY(0);
                        child.anims.play('tankRight');
                        child.directionOfMove = "right";
                        break;
                    case 1:
                        child.setVelocityX(-1 * tankSpeed);
                        child.setVelocityY(0);
                        child.anims.play('tankLeft');
                        child.directionOfMove = "left";
                        break;
                    case 2:
                        child.setVelocityY(tankSpeed);
                        child.setVelocityX(0);
                        child.anims.play('tankDown');
                        child.directionOfMove = "down";
                        break;
                    case 3:
                        child.setVelocityY(-1 * tankSpeed);
                        child.setVelocityX(0);
                        child.anims.play('tankUp');
                        child.directionOfMove = "up";
                        break;
                }
            } else {
                //kill callback
            }

        }, 3000);

        setInterval(function () {
            setTimeout(function () {
                var d = new Date();
                var n = d.getTime();
                // Make enemy fire
                enemyFire(child, player, n, that);
            }, getRandomInt(2, 5) * 1000);
        }, 5000)
    });
}

function enemyFire(enemy, player, time, gameObject)
{
    if (enemy.active === false)
    {
        return;
    }

    if ((time - enemy.lastFired) > 1000)
    {
        enemy.lastFired = time;

        // Get bullet from bullets group
        var bullet = enemyBullets.get().setActive(true).setVisible(true);

        if (bullet)
        {
            bullet.body.allowGravity = false;
            bullet.fire(enemy, player);
            gameObject.physics.add.collider(player, bullet, playerHitCallback);
        }
    } else {
        // console.log("time" + time);
        // console.log("enemy.lastFired" + enemy.lastFired);
    }
}



function playerHitCallback(playerHit, bulletHit)
{
    bulletHit.destroy();
}
