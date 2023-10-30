function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(900, 700);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modleLoaded);
}

function draw() {
    image(img, 0, 0, 900, 700);

    fill("#fc0303");
    text("C  a  t", 370, 80);
    noFill();
    stroke("#fc0303");
    rect(350, 60, 500, 450);
    strokeWeight(3);

    fill("#0238fa");
    text("D  o  g", 120, 80);
    noFill();
    stroke("#0238fa");
    rect(100, 60, 500, 600)

    fill("#02fa17");
    text("B  o  w  l", 390, 500);
    noFill();
    stroke("#02fa17");
    rect(370, 480, 200, 200)
}

function modleLoaded() {
    console.log("COCOSSD HAS LOADED SSSSSSSSSSSSSSSSS");
    Status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}