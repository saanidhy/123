function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);

    canvas=createCanvas(500,500);
    canvas.position(410,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#f08080');
}

function modelLoaded(){
    console.log("poseNet is Ready");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}