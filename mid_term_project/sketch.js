//MY VARIABLES
var firstPic;
var secondPic;


let pageNum = 1; 
let numPages = 6; 
let x = 0;
let y = 0;
let dim = 60.0;


function preload () {
  
  firstPic = loadImage ('pic1.png');
  secondPic = loadImage ('pic2.png');
  thirdPic = loadImage ('pic3.png');
  fourthPic = loadImage ('pic4.png');
  fifthPic = loadImage ('pic5.png');
  sixthPic = loadImage ('pic6.png');
  seventhPic = loadImage ('pic7.png');
  eighthPic = loadImage ('bmcc.jpg');
  mousePic = loadImage ('mouse.png');
  mySound = loadSound('florida.mp3');
  
}


function setup() {
  
  createCanvas(400, 400);
  console.log(pageNum); 
}


function draw() {
  
  if (pageNum == 1){
    background(255,200,200);
    text("Hi, my name is Rue, and this is my Story :-)", 90,100);
    translate (width /15, height / 70);
  translate(p5.Vector.fromAngle(millis() / 1000, 50));
    image (firstPic, 40,150, 200,200);
    
  }
  
  
  else if (pageNum == 2){
    background(135, 206, 235);
    text("I was born in Kissimmee, Florida", 120,50);
    image (secondPic, 5,100);
    
     x = x + 0.8;
  // If the shape goes off the canvas, reset the position
  if (x > width + dim) {
    x = -dim;
  }
   
  //sun
   translate(x, height / 2 - dim / 2);
  push()
  fill(240,200,0);
  noStroke();
  ellipse(-dim / 1, -dim / 1, dim, dim);
  pop();
    if (!mySound.isPlaying()) {
    mySound.play ();
    }
  //cloud
      push();
  noStroke();
  fill(255);
  ellipse(-100, -10, 70, 60); 
  ellipse(-80, -10, 70, 70);
  ellipse(-80, -15, 40, 40);
  ellipse(-120, -10, 40, 40);
  ellipse(-55, -6, 40, 40);
  pop();
    
    image (thirdPic, 90, 115, 80,100);
    
  }
  
  
  else if (pageNum == 3){
   mySound.stop ();
background(map(dist(mouseX, mouseY, width/2, height/2), 0, 200, 0, 255));
    
    //moon
  push()
  fill(254, 252, 215);
  noStroke();
  ellipse(100,100,40,40);
  pop();
    
    image (fourthPic, -20,100,450,250);
     text("But I was raised in Uzbekistan", 180,315);
    image (fifthPic, 85,225,70,100);
    
  }
  
  
  else if (pageNum == 4){
  
    image (eighthPic,0,0);
    image (sixthPic, mouseX, mouseY, 110,130);
    text("And I got back to the US after I got admitted to BMCC", 100,60);
  }
  
  
  else if (pageNum == 5){
    background(235,200,178);
    text("Now I am studying Multimedia Programming and Design here", 50,20);
    image (seventhPic, 20,10);
     translate (width /15, height / 70);
  translate(p5.Vector.fromAngle(millis() / 1000, 50));
    image (mousePic, 80,90);
  }
  
    else if (pageNum == 6){
    background(24, 216, 195);
    text("Thank you for your attention!", 120,190);
  }
  
  
}

function mousePressed(){
  
  if (pageNum < numPages){
    pageNum++;
  }
  
  
  else{
    pageNum = 1;
  }
  
  
  console.log(pageNum);
}