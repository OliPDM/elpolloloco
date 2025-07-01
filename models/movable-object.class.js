class MovableObject {
    x = 50;
    y = 150;
    img;
    height = 100;
    width = 250;

    loadImage(path) {
        this.img = new Image(); // this.img = document.ge ElementById('image') <img id="image" src>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}