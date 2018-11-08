class Explosion {
    constructor (x, y, width, heigth, canvas, context, timeToFade) {
        this.x = x;
        this.y = y;

        this.width = width;
        this.heigth = heigth;

        this.canvas = canvas;
        this.context = context;
        this.context.font = "30px Arial";
        this.context.fillStyle = "red";

        this.timeToFade = timeToFade;

        this.currentTime = 0;
        this.timePass = Date.now();

        this.deleteMyself = false;

        this.explodeIcon = new Image();
        this.explodeIcon.src = "src/explode.gif";

        this.explosionArray = new Array();

        this.score = 0;
    }

    drawExplosion () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillText("Score: " + this.score, 10, this.canvas.height);

        for (let i = 0; i < this.explosionArray.length; i++) {
            this.explosionArray[i].updateExplosion(this.context);
            
            if (this.explosionArray[i].canIBeDeleted()) {
                this.score += 20;
                this.explosionArray.splice(this.explosionArray.indexOf(this.explosionArray[i]), 1);
                i--;
            }
        }
    }

    addExplosion(x, y, width, heigth) {
        this.explosionArray[this.explosionArray.length] = new Explosion (
            x,
            y,
            width,
            heigth,
            this.context,
            this.canvas,
            this.timeToFade);
    }

    updateExplosion (context) {
        this.currentTime = Date.now();
        let deltaTime = (this.currentTime - this.timePass);

        context.drawImage(this.explodeIcon,
            this.x,
            this.y,
            this.width, this.heigth);

        if (deltaTime >= this.timeToFade)
            this.deleteMyself = true;
    }

    canIBeDeleted () {
        return this.deleteMyself;
    }
}