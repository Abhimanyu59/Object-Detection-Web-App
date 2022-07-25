img = "";
status = "";


function back(){
    window.location = "index.html";
}

function preload(){
    img = loadImage('Laptop.jpg');
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Text_color").innerHTML = "Detecting Objects";
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function modelLoaded(){
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}