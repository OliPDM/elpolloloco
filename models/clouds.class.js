class Clouds extends MoveableObject {
    height = 300;
    width = 400;
    y = 10;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = Math.random() * 600;
        this.animate();
    }


    animate() {
        this.moveLeft();
    };
}