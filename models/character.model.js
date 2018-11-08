class Character {
    constructor (x, y, width, heigth, context, canvas, movimentSpeed) {
        this.x = x;
        this.y = y;
        this.heigth = heigth;
        this.width = width;

        this.context = context;
        this.canvas = canvas;
        
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
    }

    drawCharacter() {
        this.currentTime = Date.now();
        this.deltaTime = ((this.currentTime - this.timePass) / 1000);
        this.timePass = this.currentTime;

        if (this.isClickingX) {
            // this.x += (this.movimentSpeed * this.deltaTime) * this.directionX;
            this.x = this.clamp((this.x + (this.movimentSpeed * this.deltaTime) * this.directionX),
                         0, this.canvas.width - this.width);

        }
        if (this.isClickingY) {
            // this.y += (this.movimentSpeed * this.deltaTime) * this.directionY;
            this.y = this.clamp((this.y + (this.movimentSpeed * this.deltaTime) * this.directionY),
            0, this.canvas.height - this.heigth);

        }

        // this.context.fillStyle  = "aqua";
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.charIcon, this.x, this.y, this.width, this.heigth);
    }

    getMovimentSpeed () {
        return this.getMovimentSpeed;
    }

    getCanvas () {
        return this.canvas;
    }

    getContext () {
        return this.context;
    }

	getX () {
        return this.x;
    }

    getY () {
        return this.y;
    }

    getHeigth () {
        return this.heigth;
    }

    getWidth () {
        return this.width;
    }

    setX (directionX) {
        this.directionX = directionX;
        this.isClickingX = true;
    }

    setY (directionY) {
        this.directionY = directionY;
        this.isClickingY = true;
    }

    unsetX () {
        this.isClickingX = false;
    }

    unsetY () {
        this.isClickingY = false;
    }
    
    setHeight (heigth) {
        this.heigth = heigth;
    }

    setWidth (width) {
        this.width = width;
    }

    setContext (context) {
        this.context = context;
    }

    setCanvas (canvas) {
        this.canvas = canvas;
    }

    setMovimentSpeed (movimentSpeed) {
        this.movimentSpeed = movimentSpeed;
    }

    clamp (n, lower, upper) {
        return Math.max(lower, Math.min(n, upper));
    }
}