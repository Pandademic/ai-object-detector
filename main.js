function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
}
function draw(){
   objectDetector=ml5.objectDetector('cocossd',modelLoaded); 
    
}
function modelLoaded(){
    console.log("model loaded!")
    document.getElementById('status').innerHTML = "Status : Model Loaded";
    setTimeout(() => { document.getElementById('status').innerHTML = "Status : Detecting Objects"; }, 7000);
}
