
var stupid;
var running;
var canvas;
var bench;

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}


function preload(){


bench = loadImage("../media/images/f-13092.jpg")
running = loadImage("../media/images/giphy.gif")
stupid = loadSound("../media/audio/8d82b5_Forrest_Stupid_is_as_Stupid_does_Sir_Sound_Effect.mp3");


}


function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  

}

function draw() {
  background("#B5D5EC");

  
  if(mouseIsPressed){
    stupid.play();
   }
   
 
  image (running, mouseX-20,mouseY-20,100,100,100);
  image (bench, windowWidth/2,windowHeight/2-100,500,400,200 )

  
  push()
  fill("#2B1A0A")
  textSize(20);
  text("Favorite Qoute:\n", windowWidth/2-100,windowHeight/2-100)
  pop()
  push()
  textSize(30)
  fill("#012583")
  text("\"Mama Always Said, Life Was Like a Box of Chocolates!\"",windowWidth/2-400,windowHeight/2-50)
  pop()

}
