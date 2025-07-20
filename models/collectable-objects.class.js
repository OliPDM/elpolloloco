class CollectableObject extends MovableObject {
    collected = false;


    constructor() {
        super();

    }

    collect(character) {
        if (!this.collected) {
            this.collected = true;
            character.coins++;
        }
        console.log('number of Coins=', character.coins);
    }

}