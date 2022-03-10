function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
   objectDetector=ml5.objectDetector('cocossd',modelLoaded); 
   objectDetctor.detect(video,gotResult)
   detectionTarget = document.getElementById('obj-target').value ;
}
function modelLoaded(){
    console.log("model loaded!")
    document.getElementById('status').innerHTML = "Status : Model Loaded";
    setTimeout(() => { document.getElementById('status').innerHTML = "Status : Detecting Objects"; }, 7000);
}
function gotResult(){
        if(detectionTarget = ""){
           document.getElementById('status').innerHTML = "✗(ERROR): NO DECTECTION TARGET ||| ✓(POSSIBLE SOLUTION) : enter something in above input box";
        }
}
