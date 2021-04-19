function preload(){
  
 bg=loadImage("snow2.jpg") ;
 s1=loadImage("ezgif.com-gif-maker (3).png")
 s2=loadImage("ezgif.com-gif-maker (2).png")
 s3=loadImage("ezgif.com-gif-maker (1).png")
}function setup() {
  createCanvas(900,600);
  //createSprite(480, 490, 50, 50);
  sprite1=createSprite(800,530,40,40);
  sprite1.addImage(s1);
  sprite1.scale=0.5



  sprite2=createSprite(450,530,40,40);
  sprite2.addImage(s2);
  sprite2.scale=0.5
  sprite3=createSprite(100,530,40,40);
  sprite3.addImage(s3);
  sprite3.scale=0.5
}

function draw() {
  background(bg); 
  
  



  drawSprites();
}