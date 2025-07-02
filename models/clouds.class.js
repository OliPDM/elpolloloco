class Clouds extends MovableObject {
    y = 10;
    height = 400;
    width = 250;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png',);

        this.x = Math.random() * 600;

    }

}