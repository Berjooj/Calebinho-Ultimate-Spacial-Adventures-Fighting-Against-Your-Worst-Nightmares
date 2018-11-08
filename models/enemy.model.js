class Enemy {
    constructor(width, heigth, context, canvas, movimentSpeed) {
        this.width = width,
        this.heigth = heigth;
        this.currentX = width;
        this.currentY = 0;

        this.currentTime = 0;
        this.timePass = Date.now();
        this.deltaTime = 0;

        this.context = context;
        this.canvas = canvas;

        this.movimentSpeed = movimentSpeed;

        let enemySkin = Math.floor(Math.random() * 3) + 1;
        this.fireIcon = new Image();
        this.fireIcon.src = "src/enemy_" + enemySkin + ".png";

        this.enemyArray = new Array();

        this.canDeleteMyself = false;
    }

    drawEnemy() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.enemyArray.length; i++) {
            this.enemyArray[i].updateEnemy();
            
            if (this.enemyArray[i].canIBeDeleted()) {
                this.enemyArray.splice(this.enemyArray.indexOf(this.enemyArray[i]), 1);
                i--;
            }
        }
        if (this.enemyArray.length <= 7) {
            let rand = Math.floor(Math.random() * 10000);

            if (rand >= 9900)
                this.addNewEnemy();
        }
    }

    addNewEnemy() {
        this.enemyArray[this.enemyArray.length] = new Enemy(
            this.width,
            this.heigth,
            this.context,
            this.canvas,
            this.movimentSpeed);

        let randomY = Math.floor(Math.random() * (this.canvas.height - this.heigth) + 1);

        // console.log(randomY);

        this.enemyArray[this.enemyArray.length - 1].setCurrentX(this.canvas.width);
        this.enemyArray[this.enemyArray.length - 1].setCurrentY(randomY);
    }

    updateEnemy() {
        this.currentTime = Date.now();
        this.deltaTime = ((this.currentTime - this.timePass) / 1000);
        this.timePass = this.currentTime;

        this.context.drawImage(this.fireIcon,
            this.currentX,
            this.currentY,
            this.width, this.heigth);

        this.currentX -= parseFloat(this.movimentSpeed * this.deltaTime);

        if (this.currentX < 0) //|| bater em algo (fogo ou usuário)
            this.canDeleteMyself = true;
    }

    canIBeDeleted () {
        return this.canDeleteMyself;
    }

    setCurrentX (x) {
        this.currentX = x;
    }

    setCurrentY (y) {
        this.currentY = y;
    }

    getWidth () {
        return this.width;
    }

    getHeigth () {
        return this.heigth;
    }

    getCurrentX() {
        return this.currentX;
    }

    getCurrentY() {
        return this.currentY;
    }

    getEnemies () {
        return this.enemyArray;
    }

    clamp (n, lower, upper) {
        return Math.max(lower, Math.min(n, upper));
    }
}