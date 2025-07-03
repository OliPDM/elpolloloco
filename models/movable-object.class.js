class MovableObject {
    img;
    y = 150;


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