let canvas;
let ctx;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('my Character is', world.character);
}