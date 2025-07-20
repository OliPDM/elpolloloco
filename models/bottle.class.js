class Bottle extends CollectableObject {
    width = 70;
    height = 70;
    IMAGES_BOTTLE = ['img/6_salsa_bottle/1_salsa_bottle_on_ground.png',];


    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[0]);
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 200 + Math.random() * 300;
        this.y = 355;
    }

}