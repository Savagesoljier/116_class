leftEyeX=0,leftEyeY=0;
function preload() {
    glasses = loadImage("glasses.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 150);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized.")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftEyeX=results[0].pose.rightEye.x-75;
        leftEyeY=results[0].pose.rightEye.y-110;
    }

}

function draw() {
    image(video, 0, 0, 300, 300);
    image(glasses,leftEyeX,leftEyeY,200,250);
}

function takeSnapshot() {
    save("myfilterimage");
}