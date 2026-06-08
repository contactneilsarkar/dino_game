//goal of project: make the player jump w/ help of sound
let soundClassifier;
let dino1;
let img;
let img2;
let img3;
let obstacles=[];
function preload(){
  img2=loadImage("dino1.jpeg")
  img=loadImage("cactus.png")
  img3=loadImage("bg.png")
  soundClassifier=ml5.soundClassifier("SpeechCommands18w")
}
function getCommands(error, results){
  if(error){
    console.log(error)
    return;
  }
  //results is an inbuilt keyword used to pass as a parameter
  if(results[0].label=="up"){
    console.log("hellooooo")
    dino1.jump()
  }
}
function setup() {
  createCanvas(400, 400);
  dino1=new Dino()
  if (soundClassifier && soundClassifier.classify){
    soundClassifier.classify(getCommands)
  }
}
function keyPressed(){
  if (key===" "){
    
    dino1.jump()
  }
      //keyPressed is used to check if a key has been pressed, and key parameter has all keys inside it
}
function draw() {
  background(img3)
  if (random()<0.02){
    //two ways to call class are 1. create an object for class 2. directly call the class
    obstacles.push(new Obstacle())
  }
    for (let a of obstacles){
      a.move()
      a.show()
      if(dino1.collision(a)){
        noLoop()
      }
    }
    dino1.move()
    dino1.show()
  
  //loop over the obstacles array and get all obstacles; keep on calling move function 
}