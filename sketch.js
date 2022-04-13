var bg1,bg1Img,h1,h1img,d1,d1img,d2,d2img,a1img,a2img,d3,d3img,d4,d4img,d5,d5img,d6,d6img;
var a2img,help1,help1img,help2img,help2,p1,p1img,score=0,time=0;

function preload(){
bg1Img=loadImage("pics/bgggg.jpg");
h1img=loadAnimation("pics/1.png","pics/2.png","pics/3.png","pics/4.png","pics/5.png","pics/6.png","pics/7.png");
d1img=loadAnimation("pics/b6.png","pics/bb6.png");
d2img=loadAnimation("pics/b5.png","pics/bb5.png");
d3img=loadImage("pics/a11.png");
d4img=loadImage("pics/a12.png");
d5img=loadImage("pics/a13.png");
d6img=loadImage("pics/a14.png");
a1img=loadAnimation("pics/bb6.png");
a2img=loadAnimation("pics/a1.png","pics/a2.png","pics/a3.png","pics/a4.png","pics/a5.png");
help1img=loadImage("pics/help1.png");
help2img=loadImage("pics/help2.png");
p1img=loadImage("pics/p1.png");
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

help1 = createSprite(660,330, 50, 80);
help1.addImage(help1img);
help1.scale=0.5;

help2 = createSprite(660,500, 50, 80);
help2.addImage(help2img);
help2.scale=0.2;

p1 = createSprite(140,460, 50, 80);
p1.addImage(p1img);
p1.scale=0.6;
}

function draw() {
  background(0,0,0);
   time=time+Math.round(getFrameRate()/16)

  if(keyDown("left_arrow")){
    h1.x = h1.x - 3;
    p1.x = p1.x - 3;
  }
  
  if(keyDown("right_arrow")){
   h1.x = h1.x + 3;
   p1.x = p1.x + 3;
  }
  
  if(keyDown("up_arrow")){
    h1.y = h1.y - 3;
    p1.y = p1.y - 3;
  }
  
  if(keyDown("down_arrow")){
   h1.y = h1.y + 3;
   p1.y = p1.y + 3;
  }

  if(h1.isTouching(d2)){
  d2.changeAnimation("a1image",a1img);
   h1.x =100
   p1.destroy();
   }
if(h1.isTouching(d1)){
 d1.changeAnimation("a2image",a2img);

}
if(time<1500 && h1.isTouching(d2)===true){
  textSize(100)
  fill ("RED")
 text('YOU WIN',500,200)
}
  drawSprites();
  textSize(30)
  fill ("black")
  text("count ="+time,17,30)
  textSize(20)
  fill ("orange")
 text('help 2 people before count 1500 otherwise u will lose',17,55)
}
