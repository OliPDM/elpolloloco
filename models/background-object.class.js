class BackgroundObject extends MovableObject {
    height = 720;
    width = 540;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 660 - this.height;
    }
}