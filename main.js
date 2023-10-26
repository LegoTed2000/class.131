function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(900, 700);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 900, 700);

    fill("#fc0303");
    text("C  a  t", 370, 80);
    noFill();
    stroke("#fc0303");
    rect(350, 60, 500, 450);
    strokeWeight(3);
}