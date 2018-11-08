class Character extends GameObject {
    constructor (x, y, width, heigth, context, canvas, movimentSpeed, maxLife) {
        super(x, y, 0, 0, width, heigth, context, canvas)
        
        this.movimentSpeed = movimentSpeed;
        
        this.currentTime = 0;
        this.timePass = Date.now();
        this.deltaTime = 0;
        
        this.directionX = 1;
        this.directionY = 1;
        
        this.isClickingX = false;
        this.isClickingY = false;
        
        this.charIcon = new Image();
        this.charIcon.src = "src/char_icon.png";

        this.lifePoints = new Array();
        this.maxLife = maxLife;
        this.lifePointsCount = this.maxLife;
        this.gameOver = false;
        this.fillLifePoints();
    }

    drawCharacter() {
        this.currentTime = Date.now();
        this.deltaTime = ((this.currentTime - this.timePass) / 1000);
        this.timePass = this.currentTime;

        if (this.isClickingX) {
            this.x = this.clamp((this.x + (this.movimentSpeed * this.deltaTime) * this.directionX),
                         0, this.canvas.width - this.width);

        }
        if (this.isClickingY) {
            this.y = this.clamp((this.y + (this.movimentSpeed * this.deltaTime) * this.directionY),
            0, this.canvas.height - this.heigth);

        }

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawLifePoints();
        this.context.drawImage(this.charIcon, this.x, this.y, this.width, this.heigth);
    }

    drawLifePoints () {
        for (let i = 0; i < this.maxLife; i++) {
            this.context.drawImage(this.lifePoints[i], 
                i * 30, 
                10, 
                30, 30);
        }
    }

    fillLifePoints () {
        for (let i = 0; i < this.maxLife; i++) {
            let fullHeartIcon = new Image();
            fullHeartIcon.src = "src/heart.png";

            this.lifePoints[this.lifePoints.length] = fullHeartIcon;
        }
    }

    gotHittenByEnemy () {
        this.lifePointsCount --;

        if (this.lifePointsCount > 0) {
            let deadHeartIcon = new Image();
            deadHeartIcon.src = "src/deadHeart.png";
            this.lifePoints[this.lifePointsCount] = deadHeartIcon;
        } else {
            this.gameOver = true;
        }
    }

    getMovimentSpeed () {
        return this.getMovimentSpeed;
    }

    unsetX () {
        this.isClickingX = false;
    }

    unsetY () {
        this.isClickingY = false;
    }

    setMovimentSpeed (movimentSpeed) {
        this.movimentSpeed = movimentSpeed;
    }

    setX (directionX) {
        this.directionX = directionX;
        this.isClickingX = true;
    }

    setY (directionY) {
        this.directionY = directionY;
        this.isClickingY = true;
    }

    isGameOver () {
        return this.gameOver;
    }
}