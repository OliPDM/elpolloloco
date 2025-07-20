class World {
    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx; // kurzform für context
    keyboard;
    cameraX = 0;
    statusBar = new Statusbar();
    coinBar = new Coinbar();
    bottleBar = new Bottlebar();
    throwableObjects = [];
    // collectableObjects = [];
    collectedCoins = [];
    collectedBottles = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.setCollectableObjects();
    }

    run() {
        setInterval(() => {
            this.checkEnemyCollisions();
            // this.checkCoinCollisions();
            this.checkThrowObjects();
            this.checkCollectableCollisions();
        }, 200);
    }

    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentageHealth(this.character.energy);
            }
        })
    }

    setCollectableObjects() {
        this.setCoins();
        this.setBottles();
    };

    setCoins() {
        for (let i = 0; i < 5; i++) {
            let coins = new Coin();
            this.collectedCoins.push(coins);
        }
    }

    setBottles() {
        for (let i = 0; i < 1; i++) {
            let bottle = new Bottle();
            this.collectedBottles.push(bottle);
        }
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollectableCollisions() {
        this.checkCollectedCoins();
        this.checkCollectedBottles();
    }

    checkCollectedCoins() {
        this.collectedCoins.forEach((mo, index) => {
            if (this.character.isColliding(mo)) {
                mo.collectCoin(this.character);
                this.coinBar.setPercentageCoin(this.character.coins);
                this.collectedCoins.splice(index, 1);
                console.log('Collected coin! Total:', this.character.coins);
            }
        });
    }

    checkCollectedBottles() {
        this.collectedBottles.forEach((mo, index) => {
            if (this.character.isColliding(mo)) {
                mo.collectBottle(this.character);
                this.bottleBar.setPercentageBottle(this.character.bottles); // optional
                this.collectedBottles.splice(index, 1);
                console.log('Collected Bottles! Total:', this.character.bottles);
            }
        });
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
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.collectedCoins);
        this.addObjectsToMap(this.collectedBottles);
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