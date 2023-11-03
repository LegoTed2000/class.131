function preload() {
    img = loadImage("b.ball cort.jpg");
}

function setup() {
    canvas = createCanvas(900, 700)
    canvas.center();
}

function draw() {
    image(img, 0, 0, 900, 700);

    fill("#0564fc");
    text("C  r  o  w d", 20, 200);
    noFill();
    stroke("#0564fc");
    rect(10 ,180 ,880 ,200);
    strokeWeight(3);

    fill("#02f55b");
    text("b . b  a  l  l    c  o  r  t", 20, 440);
    noFill();
    stroke("#02f55b");
    rect(10 ,420 ,880 ,260);


}