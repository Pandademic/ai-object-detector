console.log("the script was callled")
let detections;
function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    canvas.parent('p5-target');
    video = createCapture(VIDEO); 
    setTimeout(() => {objectDetector = ml5.objectDetector('cocossd',modelLoaded);}, 10000);
}
function draw(){
    setTimeout(() => {detect();}, 10000);
    console.log("I hope you see me")
    detectionTarget = document.getElementById('target').value;
    if(detections){
	detections.forEach(detected => {
	   console.log("FOUND:",detected.label , " @ ",detected.x,detected.y)
	});

    }
}
function modelLoaded(){
    console.log("model loaded!");
    //detect();
}
function detect(){
    console.log("DETECTOR CALLED");
    if(detections){
	detections.forEach(detected => {
	    console.log("FOUND:",detected.label , " @ ",detected.x,detected.y)
            if(detected.label == detectionTarget){
		console.warn("I FOUND WHAT UR LOOOKING FOR")
                document.getElementById("msgbox").innerHTML = "I FOUND WHAT YOU'RE LOOKING FOR. I FOUND A "+detected.label+" and I think your looking for a "+ detectionTarget+" !!!!!!"
	    }
	});
    };
    objectDetector.detect(video,gotResult);
}
function gotResult(err, results){
    console.log("GOT RESULTS HANDLER CALLED");
    if(err){
	console.warn(err);
    }
    if(detectionTarget == ""){
	console.warn("detection target is empty")
	return
    }

    if(results.length > 0){
	console.log(results);
    }
    console.log("setting detections")
    detections = results;
    detect();
}
