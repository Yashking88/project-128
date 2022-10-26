music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    function preload() {
        music1 = loadSound("Avicii - The Nights (320 kbps).mp3");
        music2 = loadSound("Harry Potter - Main Theme.mp3");
    }
}

function setup()
{
        Canvas = createCanvas(600, 600);
        Canvas.center();
    
        video = createCapture(VIDEO);
        video.hide();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 650, 600);
    fill("#FF0000");
    stroke("#FF0000")
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results)
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX + " leftWristY = " + leftWristY);
    }
}