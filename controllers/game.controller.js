$(document).ready(function () {
    let characterCanvas = document.getElementById("character");
    let contextCanvasCharacter = characterCanvas.getContext("2d");

    let fireCanvas = document.getElementById("fire");
    let contextCanvasFire = fireCanvas.getContext("2d");

    let enemyCanvas = document.getElementById("enemy");
    let contextCanvasEnemy = enemyCanvas.getContext("2d");

    let effectsCanvas = document.getElementById("effects");
    let contextCanvasEffects = effectsCanvas.getContext("2d");

    let character = new Character (25, 25, 160, 70, contextCanvasCharacter, characterCanvas, 650);
    let fireAction = new Fire (character, 35, 35, contextCanvasFire, fireCanvas, 500, 500);
    let enemy = new Enemy (70, 50, contextCanvasEnemy, enemyCanvas, 500, 12);
    let explosions = new Explosion (0, 0, 30, 30, effectsCanvas, contextCanvasEffects, 200);

    // let hud = new HUD (HUDCanvas, contextCanvasHUD);

    setInterval(function () {
        hitByEnemy(character, enemy.getEnemies());
        hitEnemy(fireAction.getShots(), enemy.getEnemies(), 50, 50, explosions);
        
        character.drawCharacter();
        fireAction.drawFire();
        enemy.drawEnemy();
        explosions.drawExplosion();
    }, 1/60);

    $(this).on('keydown', keyPress => {
        // Move left and right
        if (keyPress.which === 68)
            character.setX(1);
        else if (keyPress.which === 65)
            character.setX(-1);

        // Move top and bottom
        if (keyPress.which === 87)
            character.setY(-1);
        else if (keyPress.which === 83)
            character.setY(1);

        // Fire
        if (keyPress.which === 32)
            fireAction.shoot();

    }).on('keyup', keyUp => {
        if (keyUp.which === 68)
            character.unsetX();
        else if (keyUp.which === 65)
            character.unsetX();
        if (keyUp.which === 87)
            character.unsetY();
        else if (keyUp.which === 83)
            character.unsetY();
    });
});