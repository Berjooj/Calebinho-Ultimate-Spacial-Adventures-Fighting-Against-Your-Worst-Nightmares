function hitByEnemy (character, enemyArray) {
    let hasHitten = false;
    
    for(let i = 0; i < enemyArray.length; i++) {
        hasHitten = intersects(enemyArray[i].getCurrentX(),
                                    enemyArray[i].getCurrentY(),
                                    enemyArray[i].getHeigth(),
                                    enemyArray[i].getWidth(),
                                    character.getX(),
                                    character.getY(),
                                    character.getWidth(),
                                    character.getHeigth());
        if (hasHitten) {
            hasHitten = false;
            enemyArray.splice(enemyArray.indexOf(enemyArray[i]), 1);
            break;
        }
    }
}

function hitEnemy (fireArray, enemyArray, context, width, heigth) {
    let hasHitten = false;

    for (let i = 0; i < enemyArray.length; i++) {
        for (let j = 0; j < fireArray.length; j++) {
            hasHitten = intersects(enemyArray[i].getCurrentX(),
                                    enemyArray[i].getCurrentY(),
                                    enemyArray[i].getHeigth(),
                                    enemyArray[i].getWidth(),
                                    fireArray[j].getCurrentX(),
                                    fireArray[j].getCurrentY(),
                                    fireArray[j].getWidth(),
                                    fireArray[j].getHeigth());
            if (hasHitten) {
                hasHitten = false;
                drawExplosion(context, fireArray[j].getCurrentX(), fireArray[j].getCurrentY(), width, heigth);
                enemyArray.splice(enemyArray.indexOf(enemyArray[i]), 1);
                fireArray.splice(fireArray.indexOf(fireArray[j]), 1);
                break;
            }
        }
    }
}

function intersects (x, y, h, w, x2, y2, w2, h2) {
    return !(x > (x2 + w2) 
            || (x + w) < x2 
            || y > (y2 + h2) 
            || (y + h) < y2);
}

function drawExplosion (context, x, y, width, heigth) {
    let explode = new Image();
    explode.src = "src/explode.gif";

    context.drawImage(explode,
        x,
        y,
        width, heigth);
}