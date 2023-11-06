objects="";
Status = "";

function preload() {
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modleLoaded);
}

function draw() {
    image(video, 0, 0, 350, 350);
    
    if(Status != "") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected"; 
            document.getElementById("number_of_objects").innerHTML = "The Numcber of objects is : " + objects.length;
            
            r = random(255);
            g = random(255);
            b = random(255);

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            noFill();
            text(objects[i].label + " " + percent + " %", objects[i].x + 15, objects[i].y + 15);
            stroke(r,g,b);
            rect(objects[i].x,  objects[i].y,  objects[i].width, objects[i].height);
        }
    }
}

function modleLoaded() {
    console.log("COCOSSD HAS LOADED SSSSSSSSSSSSSSSSS");
    Status = true;
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}