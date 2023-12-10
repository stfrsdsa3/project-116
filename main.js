noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/d1V1hTst/th.jpg');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet =ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPose);
}

function modeloaded() {
    console.log('PoseNet is initialized');
}

function gotPose(results) 
{
    if(results.length > 0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x =" + noseX);
console.log("nose y =" + noseY);

}

}

function draw() {
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');

}
   

modeloaded() 
{
    executingposene;
}

gotPose()


    if(results.length > 0)
{


console.log(results);
noseX=results[0].pose.mou.x;
noseY = results[0].pose.mou.y;
console.log("mou x =" + mouX);
console.log("mou y =" + mouY);
}
