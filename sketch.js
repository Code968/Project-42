var iss
var spacecraft1
var hasDocked=false;
var scimg2
var scimg3
var scimg4
var issimg
function preload(){
issimg= loadImage("iss.png")
spacecraft1= loadImage("spacecraft1.png")
scimg2= loadImage("spacecraft2.png")
scimg3= loadImage("spacecraft3.png")
scimg4= loadImage("spacecraft4.png")
bg=loadImage("spacebg.jpg") 
}



function setup() {
  createCanvas(600,350);
  iss=createSprite(330,130);
  iss.scale=0.25;
  iss.addImage(issimg)
  
  spacecraft=createSprite(285,240)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale= 0.25;

}

function draw() {
  background(bg); 
  spacecraft.addImage(scimg2)
  if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1,1);

if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-2

}

if(keyDown("LEFT_ARROW")){
  spacecraft.x=spacecraft.x-2
  spacecraft.addImage(scimg3)
}

if(keyDown("RIGHT_ARROW")){
spacecraft.x=spacecraft.x+2
spacecraft.addImage(scimg2)
}

if(keyDown("DOWN_ARROW")){
spacecraft.addImage(spacecraft1)
}

  }
  drawSprites();
}