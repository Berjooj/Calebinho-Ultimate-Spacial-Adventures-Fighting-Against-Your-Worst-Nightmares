class GameObject {
    constructor (x, y, currentX, currentY, width, heigth, context, canvas) {
        this.x = x;
        this.y = y;

        this.currentY = currentX;
        this.currentY = currentY;

        this.width = width;
        this.heigth = heigth;

        this.context = context;
        this.canvas = canvas;
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

    getX () {
        return this.x;
    }

    getY () {
        return this.y;
    }

    getCanvas () {
        return this.canvas;
    }

    getContext () {
        return this.context;
    }

    setHeight (heigth) {
        this.heigth = heigth;
    }

    setWidth (width) {
        this.width = width;
    }

    setCurrentX (x) {
        this.currentX = x;
    }

    setCurrentY (y) {
        this.currentY = y;
    }

    setContext (context) {
        this.context = context;
    }

    setCanvas (canvas) {
        this.canvas = canvas;
    }

    clamp (n, lower, upper) {
        return Math.max(lower, Math.min(n, upper));
    }
}