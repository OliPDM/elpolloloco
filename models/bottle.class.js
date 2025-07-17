class Bottle extends MoveableObject {
    height = 90;
    width = 90;

    constructor(imagePath) {
        super().loadImages(imagePath);
        this.x = 400 + Math.random() * 220;
        this.y = 200 + Math.random() * 150;
    }

}