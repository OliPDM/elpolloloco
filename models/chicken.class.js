class Chicken extends MovableObject {
    height = 70;
    width = 70;
    y = 330;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 400 + Math.random() * 220;
    }

}