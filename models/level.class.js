class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    level_end_x = 1440;

    constructor(enemies, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    };
}