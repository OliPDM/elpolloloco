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
        console.log('number of Coins=', character.coins);
    }

    collectBottle(character) {
        if (!this.collected) {
            this.collected = true;
            character.bottles++;
        }
        console.log('number of Bottles=', character.bottles);
    }

}