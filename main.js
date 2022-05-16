song = "";

function preload(){
song = loadSound("OMG.mp3");
}
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.position(330,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
}

function modelLoaded(){
    console.log("PoseNet Is Intialized")
}
function gotPoses(results){
    if(results.length>0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX: " + leftWristX + "leftWristY: " + leftWristY);
        console.log("rightWristX: " + rightWristX + "rightWristY: " + rightWristY);
    }
}
function draw() {
    image(video , 0 , 0 , 600 , 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
