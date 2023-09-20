var doggo;
var cat;
var meow;

function preload(){

doggo = loadImage("../media/images/doggo.jpg");

cat = createImg("https://i.imgflip.com/3zixqd.png");

meow = loadSound("media/audio/meow.wav");


}

function setup() {

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  rect(50, 50, 100, 100);


  push()
    fill("red");
    ellipse(100,100, 150);
  pop()

  fill("blue");
  beginShape();
    vertex(180,82);
    vertex(207,36);
    vertex(214,63);
    vertex(407,11);
    vertex(412,30);
    vertex(219,82);
    vertex(226,109);
  endShape(CLOSE);


  arc(200,200,80,80,0,PI);
  arc(300,300,80,80,3.14,2*PI);
  arc(300,400,80,80,1.57,PI);
  arc(300,500,80,80,-3, PI);

  image(doggo, 300,300,100,100);
  cat.position(0,0);
  cat.size(200,200);

  
  push()
  fill(0)
  text(mouseX + "," + mouseY, 20, 20)
  pop()
}
