class Fire extends GameObject {
    constructor(character, width, heigth, context, canvas, movimentSpeed, animationTime) {
        super(0, 0, 0, 0, width, heigth, context, canvas);
        this.character = character;
        
        this.currentTime = 0;
        this.timePass = Date.now();
        this.deltaTime = 0;

        this.movimentSpeed = movimentSpeed;

        this.fireIcon = new Image();
        this.fireIcon.src = "src/fire_icon.png";

        this.fireArray = new Array();

        this.canDeleteMyself = false;

        this.animationTime = animationTime;
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
    }

    shoot() {
        this.fireArray[this.fireArray.length] = new Fire(
            this.character,
            this.width,
            this.heigth,
            this.context,
            this.canvas,
            this.movimentSpeed,
            this.animationTime);

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

        if (this.currentX > this.canvas.width)
            this.canDeleteMyself = true;
    }

    canIBeDeleted () {
        return this.canDeleteMyself;
    }

    getShots () {
        return this.fireArray;
    }
}