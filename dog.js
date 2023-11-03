function preload() {
    img = loadImage("84503915-funny-dog-in-summer-hat-and-sunglasses-holds-apple-and-tropic-cocktail.jpg");
}

function setup() {
    canvas = createCanvas(900, 700)
    canvas.center();
}

function draw() {
    image(img, 0, 0, 900, 700);

    fill("#0564fc");
    text("S  u  n   H  a  t", 200, 100);
    noFill();
    stroke("#0564fc");
    rect(180 ,60 ,600 ,250);
    strokeWeight(3);

    fill("#fcba03");
    text("A  p  p  l  e", 550, 370);
    noFill();
    stroke("#fcba03");
    rect(530 ,350 ,200 ,200);

    fill("#fc0303");
    text("C  o  k - t  a  i  l", 200, 420);
    noFill();
    stroke("#fc0303");
    rect(180 ,400 ,200 ,200);

}