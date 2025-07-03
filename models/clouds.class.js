class Clouds extends MovableObject {
    height = 400;
    width = 250;
    y = 10;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = Math.random() * 600;

    }

}