img="";
objects="";
Status = "";

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
    
    if(Status != "") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected"; 

            fill("#0346ff");
            percent = floor(objects[i].confidence * 100);
            noFill();
            text(objects[i].label + " " + percent + " %", objects[i].x + 15, objects[i].y + 15);
            stroke("#0346ff");
            rect(objects[i].x,  objects[i].y,  objects[i].width, objects[i].height);
        }

        for(i = 2; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected"; 

            fill("#ff0314");
            percent = floor(objects[i].confidence * 100);
            noFill();
            text(objects[i].label + " " + percent + " %", objects[i].x + 15, objects[i].y + 15);
            stroke("#ff0314");
            rect(objects[i].x,  objects[i].y,  objects[i].width, objects[i].height);
        }
    }
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
    objects = results;
}