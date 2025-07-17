class Coin extends MoveableObject {
    width = 90;
    height = 90;
    IMAGES_MOVING = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_MOVING[0]);
        this.loadImages(this.IMAGES_MOVING);
        this.x = 400 + Math.random() * 220;
        this.y = 200 + Math.random() * 150;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.animateIcons(this.IMAGES_MOVING);
        }, 500);
    }
}