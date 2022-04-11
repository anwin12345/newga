var bg1,bg1Img,h1,h1img,d1,d1img,d2,d2img,a1img,a2img,d3,d3img,d4,d4img,d5,d5img,d6,d6img;
var a2img;

function preload(){
bg1Img=loadImage("pics/bgggg.jpg");
h1img=loadAnimation("pics/1.png","pics/2.png","pics/3.png","pics/4.png","pics/5.png","pics/6.png","pics/7.png");
d1img=loadAnimation("pics/b6.png","pics/b66.png");
d2img=loadAnimation("pics/b5.png","pics/b55.png");
d3img=loadImage("pics/a11.png");
d4img=loadImage("pics/a12.png");
d5img=loadImage("pics/a13.png");
d6img=loadImage("pics/a14.png");
a1img=loadAnimation("pics/b1 (1).png");
//a2img=loadAnimation("pics/a1.png","pics/a2.png","pics/a3.png","pics/a4.png","pics/a5.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(400, 100, 50, 80);
 bg1.addImage(bg1Img);
 bg1.scale=1.5;
 h1 = createSprite(100,560,20,5);
 h1.addAnimation("walking",h1img);
 h1.scale=1.2;
h1.setCollider("circle",0,0,20);
h1.debug=true

d1 = createSprite(560,560, 50, 80);
 d1.addAnimation("sleeping",d1img);
 d1.scale=0.6;
 d1.setCollider("circle",0,0,20);
  d1.debug=true

 d2 = createSprite(560,400, 50, 80);
 d2.addAnimation("circle",d2img);
 d2.scale=0.5;
 d2.setCollider("circle",0,0,20);
  d2.debug=true

 d3 = createSprite(900,300, 50, 80);
 d3.addImage(d3img);
 d3.scale=0.8;

 d4 = createSprite(900,370, 50, 80);
 d4.addImage(d4img);
 d4.scale=0.8;

 d5 = createSprite(900,420, 50, 80);
 d5.addImage(d5img);
 d5.scale=0.8;

 d6 = createSprite(900,540, 50, 80);
 d6.addImage(d6img);
 d6.scale=0.8;
}

function draw() {
  background(0,0,0);
   
  if(keyDown("left_arrow")){
    h1.x = h1.x - 3;
  }
  
  if(keyDown("right_arrow")){
   h1.x = h1.x + 3;
  }
  
  if(keyDown("up_arrow")){
    h1.y = h1.y - 3;
  }
  
  if(keyDown("down_arrow")){
   h1.y = h1.y + 3;
  }

  if(h1.isTouching(d2)){
   d2.changeAnimation("standing",a1img);
   h1.x =100
   }
if(h1.isTouching(d1)){
// d1.changeAnimation("sitting",a2img);

}
  drawSprites();
}