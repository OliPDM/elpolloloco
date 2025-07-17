class Bottlebar extends DrawableObjcet {
    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 10;
        this.y = 80;
        this.height = 60;
        this.width = 200;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 10) {
            return 5;
        } else if (this.percentage > 8) {
            return 4;
        } else if (this.percentage > 6) {
            return 3;
        } else if (this.percentage > 4) {
            return 2;
        } else if (this.percentage > 2) {
            return 1;
        } else {
            return 0;
        }
    }
}