class Chicken extends MovableObject {


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 400 + Math.random() * 220;
        this.y = 320;
        this.height = 70;
        this.width = 70;
    }

}