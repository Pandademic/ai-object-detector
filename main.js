function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded); 
}
function draw(){
   image(video,0,0,640,420);//cover the canvas with camera
}
function modelLoaded(){
    document.getElementById('status').innerHTML = "Model Loaded !";
    setTimeout(() => { document.getElementById('status').innerHTML = "Status : Detecting Objects"; }, 7000);
  

}
