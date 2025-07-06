class Coin extends MovableObject {
    width = 70;
    height = 70;
    y = 300;
    IMAGES_MOVING = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_MOVING[0]);
        this.loadImages(this.IMAGES_MOVING);
        this.x = 400;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.animateIcons(this.IMAGES_MOVING);
        }, 500);
    }
}