function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);
    canvas=createCanvas(550,450);
    canvas.position(730,150);
 
    my_posenet=ml5.poseNet(video, model_loaded);
    my_posenet.on("pose", got_poses);

}
function model_loaded(){
    console.log("Model Loaded"); 
   }