class Fire {
    constructor(character, width, heigth, context, canvas, movimentSpeed) {
        this.character = character;
        this.width = width,
        this.heigth = heigth;
        this.currentX = 0;
        this.currentY = 0;

        this.currentTime = 0;
        this.timePass = Date.now();
        this.deltaTime = 0;

        this.context = context;
        this.canvas = canvas;

        this.movimentSpeed = movimentSpeed;

        this.fireIcon = new Image();
        this.fireIcon.src = "src/fire_icon.png";

        this.fireArray = new Array();

        this.canDeleteMyself = false;
    }

    drawFire() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.fireArray.length; i++) {
            this.fireArray[i].updateFire();
            
            if (this.fireArray[i].canIBeDeleted()) {
                this.fireArray.splice(this.fireArray.indexOf(this.fireArray[i]), 1);
                i--;
            }
        }
        // console.log(this.fireArray.length);
    }

    shoot() {
        this.fireArray[this.fireArray.length] = new Fire(
            this.character,
            this.width,
            this.heigth,
            this.context,
            this.canvas,
            this.movimentSpeed);

        this.fireArray[this.fireArray.length - 1].setCurrentX((this.character.getX() + (this.character.getWidth() * 0.8)));
        this.fireArray[this.fireArray.length - 1].setCurrentY(this.character.getY());
    }

    updateFire() {
        this.currentTime = Date.now();
        this.deltaTime = ((this.currentTime - this.timePass) / 1000);
        this.timePass = this.currentTime;

        this.context.drawImage(this.fireIcon,
            this.currentX,
            this.currentY,
            this.width, this.heigth);

        this.currentX += parseFloat(this.movimentSpeed * this.deltaTime);

        if (this.currentX > this.canvas.width) //|| bater em algo (inimigo)
            this.canDeleteMyself = true;
    }

    canIBeDeleted () {
        return this.canDeleteMyself;
    }

    setCurrentX(x) {
        this.currentX = x;
    }

    setCurrentY(y) {
        this.currentY = y;
    }

    getCurrentX() {
        return this.currentX;
    }

    getCurrentY() {
        return this.currentY;
    }

    getShots () {
        return this.fireArray;
    }

    getWidth () {
        return this.width;
    }

    getHeigth () {
        return this.heigth;
    }
}