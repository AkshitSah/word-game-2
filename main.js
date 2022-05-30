function setup()
{
    video=createCapture(VIDEO);
    video.size(350,350);
    canvas=createCanvas(400,400);
    canvas.position(560,150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
console.log("Posenet is intitialized");
}
function draw()
{
    background("#b9f783");
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
    }
}
