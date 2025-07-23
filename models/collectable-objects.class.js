class CollectableObject extends MovableObject {
    collected = false;

    constructor() {
        super();

    }

    collectCoin(character) {
        if (!this.collected) {
            this.collected = true;
            character.coins++;
        }
        // console.log('number of Coins=', character.coins);
    }

    collectBottle(world) {
        if (!this.collected) {
            this.collected = true;
            world.currentBottleCount++;
            world.bottleBar.setPercentageBottle(world.currentBottleCount);
        }
        console.log('number of Bottles=', world.currentBottleCount);
    }

}