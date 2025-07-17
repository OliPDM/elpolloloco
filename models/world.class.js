class World {
    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    coins = level1.coins;
    canvas;
    ctx; // kurzform für context
    keyboard;
    cameraX = 0;
    statusBar = new Statusbar();
    coinBar = new Coinbar();
    bottleBar = new Bottlebar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;

    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            })
        }, 1000);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.cameraX, 0); // Back
        // ----- space for fixed objects ----- //
        this.addToMap(this.coinBar);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.cameraX, 0); // Forwards

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.cameraX, 0);


        let self = this // muss so gehandhabt werden, da "this" innerhalb der Funktion nicht erkannt wird
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }

    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}