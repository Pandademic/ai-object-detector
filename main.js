function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    video = createCapture(VIDEO);
}
function draw(){
   video.parent("camera_div")
   objectDetector=ml5.objectDetector('cocossd',modelLoaded); 
    
}
function modelLoaded(){
    document.getElementById('status').innerHTML = "Model Loaded !";
    setTimeout(() => { document.getElementById('status').innerHTML = "Status : Detecting Objects"; }, 7000);
}
