var leval=1
var msec=0
var sec=0
var start
var intro="start"
var OOf=0
var on=1
var setting=OOf
var music 
var sound 
var mplug=0
var splug=0
var t=1
var tt=1
var Boss1helth=3
var boss1time=0
var boss1=0
var level=1

function preload() {
win1=loadImage("Black_Up_Arrow.png")
loss1=loadImage("Down-Arrow-PNG-Pic.png")  
startimg=loadImage("images.png")
settingimg=loadImage("21-512.webp")
 offimg=loadImage("off.png")
 onimg=loadImage("on.png")

 
  
  
}

function setup() {
createCanvas(400, 400);


GROUND=createSprite(200,390,400,5)
GROUND1L=createSprite(398,200,5,4000)
GROUND1R=createSprite(2,200,5,4000)
GROUND1UP=createSprite(165,0,35000,5)
INGROUND=createSprite(200,388,400,2)
GROUND2=createSprite(630,388,350,5)
INGROUND2=createSprite(630,385,350,5)
GROUND2R=createSprite(800,200,5,4000)
GROUND3=createSprite(1025,390,350,5)
GROUND3L=createSprite(1200,200,5,3900)
  GROUND4L=createSprite(2000,200,5,3900)
INGROUND3=createSprite(1025,387,350,5)
  Moff=createSprite(-650,890,350,5)
  Soff=createSprite(-650,920,350,5)
  GROUND4R=createSprite(1600,200,5,4000)
   Moff.addImage(onimg);
   Soff.addImage(onimg);
  Moff.scale=0.5
  Soff.scale=0.5
  Win1=createSprite(20,20)
  Win1.addImage(win1);
  Win1.scale=0.05
  Loss1=createSprite(430,430)
  Loss1.addImage(loss1);
  Loss1.scale=0.05
  Win2=createSprite(420,40)
  Win2.addImage(win1);
  Win2.scale=0.05
  Loss2=createSprite(830,430)
  Loss2.addImage(loss1);
  Loss2.scale=0.05
  Win3=createSprite(820,20)
  Win3.addImage(win1);
  Win3.scale=0.05
  start = createSprite(-600,200,25,25)
  start.addImage(startimg);
  start.scale=0.5
  redBall = createSprite(200,370,25,25)
  setting = createSprite(-4500000,50,25,25)
   setting.addImage(settingimg)
   setting.scale=0.1
   Win4=createSprite(1220,20)
  Win4.addImage(win1);
  Win4.scale=0.05
  
  
    box1=createSprite(380,319,50,5)
    INbox1=createSprite(380,315,50,5)
    box2=createSprite(225,237,50,5)
    INbox2=createSprite(225,235,50,5)
    box3=createSprite(95,222,20,5)
    INbox3=createSprite(95,220,20,5)
    box4=createSprite(235, 180,50,10)
    INbox4=createSprite(235, 176,50,10)
    box5=createSprite(255, 170,10,25)
    INbox5=createSprite(255, 168,10,25)
    box6=createSprite(320, 100,50,5)
    INbox6=createSprite(320, 97,50,5)
    box7=createSprite(155,294,10,5)
    INbox7=createSprite(155,291,10,5)
    box8=createSprite(200,65,50,20)
    INbox8=createSprite(200,60,50,20)
    box9=createSprite(340,20,2,40)
    box10=createSprite(370,40,60,2)
    box11=createSprite(420,450,70,5)
    box12=createSprite(455,425,5,80);
    box13=createSprite(520,300,7,7)
    box14=createSprite(620,280,7,7);
    box15=createSprite(720,280,50,5);
    INbox13=createSprite(520,297,7,7)
    INbox14=createSprite(620,277,7,7);
    INbox15=createSprite(720,277,50,5)
    box16=createSprite(790,235,7,7)
    box17=createSprite(720,170,50,7);
    box18=createSprite(600,170,20,7);
    INbox16=createSprite(790,232,7,7)
    INbox17=createSprite(720,167,50,7);
    INbox18=createSprite(600,167,20,7)
    box19=createSprite(470,100,100,5)
    INbox19=createSprite(470,105,100,5)
    //box20 is missing
    box21=createSprite(670,290,10,10)
    box22=createSprite(570,180,10,10)
    box23=createSprite(770,70,10,10)
    box24=createSprite(850,420,5,67)
    box25=createSprite(820,450,30,5)
    box26=createSprite(1050,330,30,5)
    box27=createSprite(1120,280,30,5)
    box28=createSprite(1190,230,30,5)
    box29=createSprite(1120,180,30,5)
    box30=createSprite(1050,130,30,5)
    box31=createSprite(980,80,30,5)
    box32=createSprite(870,80,10,10)
    box33=createSprite(825,80,10,10)
    box34=createSprite(835,15,5,30)
    INbox26=createSprite(1050,327,30,5)
    INbox27=createSprite(1120,277,30,5)
    INbox28=createSprite(1190,227,30,5)
    INbox29=createSprite(1120,177,30,5)
    INbox30=createSprite(1050,127,30,5)
    INbox31=createSprite(980,77,30,5)
    INbox32=createSprite(870,77,10,10)
    INbox33=createSprite(825,77,10,10)
    INbox34=createSprite(835,12,5,30)
    box35=createSprite(1070,80,10,10)
    box36=createSprite(1025,80,10,10)
    box37=createSprite(1035,15,10,10)
    box38=createSprite(1400,390,70,10)
    INbox38=createSprite(1400,387,70,10)
     box39=createSprite(1450,300,60,10)
   INbox39=createSprite(1450,300,60,10)
     box40=createSprite(1250,300,60,10)
   INbox40=createSprite(1250,300,60,10)
  box41=createSprite(1450,200,10,10)
  box42=createSprite(1450,300,10,10)
   box43=createSprite(1450,100,10,10)
    box44=createSprite(1500,390,80,10)
    box45=createSprite(1300,390,80,10)
   INbox44=createSprite(1500,387,80,10)
    INbox45=createSprite(1300,387,80,10)
  box46=createSprite(1800,390,400,10)
  box47=createSprite(1650,370,10,50)
  box48=createSprite(1627,340,50,10)
  
  
  box50=createSprite(1627,3400,10,10)
  box51=createSprite(1627,3400,10,10)
  box52=createSprite(1627,3400,10,10)

  
  
  
  
  INbox46=createSprite(1800,387,400,10)
  boss1=createSprite(1900,360,40,40)
  
  
  
     IN1=createSprite(280,200,5,400)
     IN2=createSprite(50,200,5,400)
     IN3=createSprite(450,220,25,25)
     IN4=createSprite(450,80,25,25)
     IN6=createSprite(410,200,5,400)
     IN7=createSprite(790,200,5,400)
     IN8=createSprite(600,10,400,5)
     IN9=createSprite(600,390,400,5)
     IN10=createSprite(810,200,5,400)
     IN11=createSprite(1190,200,5,400)
     IN12=createSprite(1000,10,400,5)
     IN13=createSprite(1000,390,400,5)
     IN14=createSprite(1210,200,5,400)
     IN15=createSprite(1590,200,5,400)
     IN16=createSprite(1400,40,400,5)
     IN17=createSprite(1400,390,400,5)
  
      rope1=createSprite(163,65,220,2)
  // 300,282.5
  
       box8.velocityX=-5
       INbox8.velocityX=-5
       INbox19.velocityY=5
       box19.velocityY=5
       box21.setVelocity(2,6)
       box22.setVelocity(0.2,6)
       box23.setVelocity(2,4)
       box35.setVelocity(2,4)
       box36.setVelocity(0.2,4.8)
       box37.setVelocity(3.1,2.9)
      box39.setVelocity(3,3)
      INbox39.setVelocity(3,3)
      box40.setVelocity(-3,-3)
      INbox40.setVelocity(-3,-3)
  box43.setVelocity(3,0)
      box41.setVelocity(-3,0)
    box42.setVelocity(3,0)

}


function draw() {

  
background("skyblue")
msec = msec + 1 ;
if (msec == 17) {
  sec = sec + 1;
  msec = 0;
}
    boss1.velocityY = boss1.velocityY + 0.8
   
  textSize(30);
  fill("red")
  text("You find the village",2080,100)
  textSize(24);
  fill("black")
  text("Java Editing",2130,230)
  text("made by Tanmay agarwal",2080,300)
   
  textSize(50);
  fill("yellow")
  
  
  
  text("You win",2110,180)
  textSize(20);
  fill("red")
  text("leval"+leval,344,20)
  text ("Time"+sec,170,20)
  text("jump(easy)",280,380)
  text("leval"+2,744,20)
  text ("Time"+sec,570,20)
  text("visible ball (normal)",610,380)
  text("leval"+3,1144,20)
  text ("Time"+sec,970,20)
  text("Invisible ball (normal)",1010,380)
  text("ball figth (hard)",1450,380)
  text("leval"+4,1544,20)
  text ("Time"+sec,1370,20)
  text("boss fight (hard)",1610,20)
  text("leval"+5,1944,20)
  text ("Time"+sec,1770,20)
  fill("black")
 text ("BOSS:"+Boss1helth,1770,70)
  text ("Time"+sec,2170,20)
  C
   redBall.collide(GROUND1R)
   redBall.collide(GROUND1L)
   redBall.collide(GROUND1L)
   redBall.collide(GROUND1R)
   redBall.collide(GROUND)
   redBall.collide(GROUND1UP)
   redBall.collide(GROUND2)
   redBall.collide(GROUND2R)
   redBall.collide(GROUND3)
   redBall.collide(GROUND3L)
   redBall.collide(GROUND4R)
   redBall.collide(box38)
   redBall.collide(box1)
   redBall.collide(box2)
   redBall.collide(box3)
   redBall.collide(box4)
   redBall.collide(box5)
   redBall.collide(box6)
   redBall.collide(box7)
   redBall.collide(box8)
   redBall.collide(box9)
   redBall.collide(box10)
   redBall.collide(box11)
   redBall.collide(box12)
   redBall.collide(box13)
   redBall.collide(box14)
   redBall.collide(box15)
   redBall.collide(box16)
   redBall.collide(box17)
   redBall.collide(box18)
   redBall.collide(box19)
   redBall.collide(box21)
   redBall.collide(box22)
   redBall.collide(box23)
   redBall.collide(box24)
   redBall.collide(box25)
   redBall.collide(box26)
   redBall.collide(box27)
   redBall.collide(box28)
   redBall.collide(box29)
   redBall.collide(box30)
   redBall.collide(box31)
   redBall.collide(box32)
   redBall.collide(box33)
   redBall.collide(box34)
   redBall.collide(box35)
   redBall.collide(box36)
   redBall.collide(box38)
  redBall.collide(box39)
  redBall.collide(box40)
   redBall.collide(box44)
   redBall.collide(box45)
  redBall.collide(box46)
   redBall.collide(box47)
   boss1.collide(box46)
  redBall.collide(box48)
   
  
  
  INGROUND.visible=false
  INGROUND2.visible=false
  INGROUND3.visible=false
  INbox1.visible=false
  INbox2.visible=false
  INbox3.visible=false
  INbox4.visible=false
  INbox5.visible=false
  INbox6.visible=false
  INbox7.visible=false
  INbox8.visible=false
  // INBOX9 is mising
  // INBOX10 is mising
  // INBOX11 is mising
  // INBOX12 is mising
  INbox13.visible=false
  INbox14.visible=false
  INbox15.visible=false
  INbox16.visible=false
  INbox17.visible=false
  INbox18.visible=false
  INbox19.visible=false
  INbox13.visible=false
  INbox26.visible=false
  INbox27.visible=false
  INbox28.visible=false
  INbox29.visible=false
  INbox30.visible=false
  INbox31.visible=false
  INbox32.visible=false
  INbox33.visible=false
  INbox34.visible=false
  INbox39.visible=false
  INbox40.visible=false
  //INBOX20 is mising
  box21.visible=true
  box22.visible=true
  box23.visible=true
  box35.visible=false
  box36.visible=false
  box37.visible=false
  INbox38.visible=false
  INbox45.visible=false
  INbox44.visible=false
  INbox46.visible=false
  
  
   IN3.visible=false
   IN1.visible=false
   IN4.visible=false
   IN2.visible=false
   IN6.visible=false
   IN7.visible=false
   IN8.visible=false
   IN9.visible=false
   IN13.visible=false
   IN11.visible=false
   IN10.visible=false
   IN12.visible=false
   IN14.visible=false
   IN15.visible=false
   IN16.visible=false
   IN17.visible=false
  
  GROUND3.shapeColor=("green")
  GROUND3L.shapeColor=("green")
   GROUND4R.shapeColor=("green")
  GROUND.shapeColor=("green")
  GROUND2.shapeColor=("green")
  redBall.shapeColor=("red")
  rope1.shapeColor=("brown")
  box1.shapeColor=("green")
  box2.shapeColor=("green")
  box3.shapeColor=("green")
  box4.shapeColor=("green")
  box5.shapeColor=("green")
  box6.shapeColor=("green")
  box7.shapeColor=("green")
  box8.shapeColor=("green")
   box38.shapeColor=("green")
  box39.shapeColor=("green")
  // box9 is missing
  // box10 is missing
  // box11 is missing
  box12.shapeColor=("green")
  box13.shapeColor=("green")
  box14.shapeColor=("green")
  box15.shapeColor=("green")
  box16.shapeColor=("green")
  box17.shapeColor=("green")
  box18.shapeColor=("green")
  box19.shapeColor=("green")
  // box20 is missing
  box21.shapeColor=("blue")
  box22.shapeColor=("blue")
  box23.shapeColor=("blue")
  box24.shapeColor=("green")
  box25.shapeColor=("green")
  box26.shapeColor=("green")
  box27.shapeColor=("green")
  box28.shapeColor=("green")
  box29.shapeColor=("green")
  box30.shapeColor=("green")
  box31.shapeColor=("green")
  box32.shapeColor=("green")
  box33.shapeColor=("green")
  box34.shapeColor=("green")
   box40.shapeColor=("green")
  box41.shapeColor=("red")
  box42.shapeColor=("red")
  box43.shapeColor=("red")
  box44.shapeColor=("green")
  box45.shapeColor=("green")
   box46.shapeColor=("green")
  box47.shapeColor=("green")
  box48.shapeColor=("green")
  boss1.shapeColor=("black")
  
   box50.shapeColor=("red")
  box51.shapeColor=("black")
  box52.shapeColor=("red")
 
  
  
  
  
  box8.bounceOff(IN1)
  box8.bounceOff(IN2)
  INbox8.bounceOff(IN1)
  INbox8.bounceOff(IN2)
  INbox19.bounceOff(IN4)
  box19.bounceOff(IN4)
  INbox19.bounceOff(IN3)
  box19.bounceOff(IN3)
  box21.bounceOff(IN6)
  box21.bounceOff(IN7)
  box22.bounceOff(IN6)
  box22.bounceOff(IN7)
  box21.bounceOff(IN8)
  box21.bounceOff(IN9)
  box22.bounceOff(IN8)
  box22.bounceOff(IN9)
  box23.bounceOff(IN6)
  box23.bounceOff(IN7)
  box23.bounceOff(IN8)
  box23.bounceOff(IN9)
  
  box35.bounceOff(IN10)
  box35.bounceOff(IN11)
  box35.bounceOff(IN12)
  box35.bounceOff(IN13)
  box36.bounceOff(IN10)
  box36.bounceOff(IN11)
  box36.bounceOff(IN12)
  box36.bounceOff(IN13)
  box37.bounceOff(IN11)
  box37.bounceOff(IN12)
  box37.bounceOff(IN13)
  box37.bounceOff(IN10)
  box39.bounceOff(IN14)
  box39.bounceOff(IN15)
  box39.bounceOff(IN16)
  box39.bounceOff(IN17)
 box40.bounceOff(IN14)
  box40.bounceOff(IN15)
  box40.bounceOff(IN16)
  box40.bounceOff(IN17)
  INbox39.bounceOff(IN14)
  INbox39.bounceOff(IN15)
  INbox39.bounceOff(IN16)
  INbox39.bounceOff(IN17)
 INbox40.bounceOff(IN14)
  INbox40.bounceOff(IN15)
  INbox40.bounceOff(IN16)
  INbox40.bounceOff(IN17)
  box41.bounceOff(IN14)
  box41.bounceOff(IN15)
  box42.bounceOff(IN14)
  box42.bounceOff(IN15)
  box43.bounceOff(IN14)
  box43.bounceOff(IN15)
  box51.bounceOff(GROUND4R)
  
  drawSprites()
 
 //control of game
   if (keyDown("A")||keyDown(LEFT_ARROW)){
    redBall.velocityX=-5
  }
  if (keyDown("D")||keyDown(RIGHT_ARROW)){
    redBall.velocityX=5
  }
    if (keyWentUp("A")||keyWentUp(LEFT_ARROW)){
    redBall.velocityX=0
  }
  if (keyWentUp("D")||keyWentUp(RIGHT_ARROW)){
    redBall.velocityX=0
  }

  // win or loss in game
    if (redBall.isTouching(Win1)){
   redBall.y=370
   redBall.x=600
   camera.x=600
  }
  if (redBall.isTouching(Loss2)){
   redBall.y=370
   redBall.x=600
   camera.x=600
  }
  
  if (redBall.isTouching(Loss1)){
   redBall.x=200
   redBall.y=370
   camera.x=200
}
   if (redBall.isTouching(Win2)){
   redBall.y=370
   redBall.x=1000
   camera.x=1000
  }
  if (redBall.isTouching(Win3)){
   redBall.y=370
   redBall.x=1400
   camera.x=1400
  }

  if (redBall.isTouching(Win4)){
   redBall.y=370
   redBall.x=1620
   camera.x=1800
  }
  
  
  
  // skate boat
   if (redBall.isTouching(INbox8)&&redBall.y===42.5){
    redBall.x=box8.x
  }
  
  
  // check points
   if (redBall.y>1000&&redBall.x<400){
    redBall.x=200     
    redBall.y=280 
    camera.x=200  
    }
    if (redBall.y>1000&&redBall.x<800){ 
    redBall.x=200     
    redBall.y=280 
    camera.x=200 
    }
    if (redBall.y>1000&&redBall.x<1200){
    redBall.x=600     
    redBall.y=280 
    camera.x=600 
    }
      if (redBall.y>1000&&redBall.x<1600){
   redBall.y=340
   redBall.x=1000
   camera.x=1000}
  
  
  //out
      if (redBall.isTouching(box42)){
redBall.x=1400
      redBall.y=360
    }
    
     // out
    if (redBall.isTouching(box43)){
redBall.x=1400
      redBall.y=360
    }
    
    
     // out
    if (redBall.isTouching(box41)){
redBall.x=1400
      redBall.y=360
    }
  // jump 
  {//??????????????????????????????????????????????
    
    
     if (keyDown(UP_ARROW)&&redBall.isTouching(INGROUND3)&&redBall.y===375){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INGROUND2)&&redBall.y===373){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INGROUND)&&redBall.y===375){
    redBall.velocityY=-9
  }
    
      if (keyDown(UP_ARROW)&&redBall.isTouching(INbox46)&&redBall.y===372.5){
    redBall.velocityY=-9
  }    
    
    
    
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox44)&&redBall.y===372.5){
    redBall.velocityY=-9
  }
    
         
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox45)&&redBall.y===372.5){
    redBall.velocityY=-9
  }
  
       if (keyDown(UP_ARROW)&&redBall.y===box39.y-17.5&&camera.x===1400){
    redBall.velocityY=-9
  }
    
       if (keyDown(UP_ARROW)&&redBall.y===box40.y-17.5&&camera.x===1400){
    redBall.velocityY=-9
  }
    
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox38)&&redBall.y===372.5){
    redBall.velocityY=-9
  }
    
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox26)&&redBall.y===315){
    redBall.velocityY=-9
  }
    
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox27)&&redBall.y===265){
    redBall.velocityY=-9
  }
    
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox28)&&redBall.y===215){
    redBall.velocityY=-9
  }
    
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox29)&&redBall.y===165){
    redBall.velocityY=-9
  }
    
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox30)&&redBall.y===115){
    redBall.velocityY=-9
  }
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox31)&&redBall.y===65){
    redBall.velocityY=-9
  }
    
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox32)&&redBall.y===62.5){
    redBall.velocityY=-9
  }
    
      
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox33)&&redBall.y===62.5){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox16)&&redBall.y===219){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox17)&&redBall.y===154){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox18)&&redBall.y===154){
    redBall.velocityY=-9
  }
     
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox19)&&redBall.x>399&&redBall.x<537){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox13)&&redBall.y===284){
    redBall.velocityY=-9
  }
    
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox14)&&redBall.y===264){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox15)&&redBall.y===265){
    redBall.velocityY=-9
  }
   
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox8)&&redBall.y===42.5){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox7)&&redBall.y===279){
    redBall.velocityY=-9
  }
    
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox5)&&redBall.y===145){
    redBall.velocityY=-9
  }
    
     if (keyDown(UP_ARROW)&&redBall.isTouching(INbox6)&&redBall.y===85){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox4)&&redBall.y===162.5){
    redBall.velocityY=-9
  }

    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox3)&&redBall.y===207){
    redBall.velocityY=-9
  }
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox2)&&redBall.y===222){
    redBall.velocityY=-9
  }
    
    if (keyDown(UP_ARROW)&&redBall.isTouching(INbox1)&&redBall.y===304){
    redBall.velocityY=-9
  }
    
  
  }//??????????????????//////////
  
 if (intro==="start"){
   camera.x=-600
  
if (mousePressedOver(start)){
  intro="end"
  
}
   
 }
  
  
  
 
  if (intro==="end"){
    
    camera.x=200
    intro="patanahe"
    
    
  }
  if (mousePressedOver(setting)){
  camera.y=1000
  
  }
  textSize(40)
  text("Setting",-650,850)
  textSize(25)
  text("Music",-780,900)
  text('Sound',-780,930)
  textSize(25)
  text('Guard',-650,950)
  textSize(20)
  text ("1:Used arrow key to move",-780,970)
  text ("2:There are five type of level ",-780,990)
  text("3:jump --> in this level you have to jump to",-780,1010)
  text("box to other box and finesh the leval ",-780,1030)
  text("4:visible square-->in this leval you was ",-780,1050)
  text("collide with ball you have to finesh the ",-780,1070) 
  text("leval the ball was disturb you",-780,1090)
  text("5: Invisible square--> it was simmilar to ",-780,1110)
  text("visible square but you can,t see balls",-780,1130)
  text("6:ball fight --> in this you have to don't",-780,1150)
  text("touch any red square",-780,1170)
  text("Bossfight --> you have to kill the boss",-780,1190)
  
if (mplug==0&&t<10){
 if(mousePressedOver(Moff)){
  Moff.addImage(offimg)
 mplug=1
   t=20
  }
}
  if (mplug===1){
t=t+1
  }
  
  if (t>30){
  if (mplug===1){
   if(mousePressedOver(Moff)){
  Moff.addImage(onimg)
 mplug=0
  t=20
    
  }
  }

  }

if (mplug===0){
t=t-1
}

  
  if (t===100||t===-100){
    t=20
    
    
  }
   
 if (tt===100||tt===-100) {

tt=20
}
  
  if (splug==0&&tt<10){
 if(mousePressedOver(Soff)){
  Soff.addImage(offimg)
 splug=1
   tt=20
  }
}
  if (splug===1){
tt=tt+1
  }
  
  if (tt>30){
  if (splug===1){
   if(mousePressedOver(Soff)){
  Soff.addImage(onimg)
 splug=0
  
   tt=20 
  }
  }

  }

if (splug===0){
tt=tt-1
}
  
  
  
  
  
  
  
  if (camera.x===1800){
boss1time=boss1time+0.10
  
  }
  
  
  
  
  
  
  
  
  
  ////
if (boss1time>15&&boss1time<25){
box47.y=box47.y+1
box48.y=2000


}

  
 
  
if (boss1time>11&&boss1time<12){
boss1.velocityY=-9
boss1.velocityX=-5}
  
  if (boss1time>13&&boss1time<14){

boss1.velocityX=0}
  
  

  
  
  if (boss1time>19&&boss1time<20){
boss1.velocityY=-9
boss1.velocityX=9}
  
  if (boss1time>21&&boss1time<22){

boss1.velocityX=0}
  
  
  
  
  
  
  
  
  if (boss1time>30&&boss1time<31){
box50.x=1920
box50.y=370
box50.velocityX=-5

}
  
  if (boss1time>40&&boss1time<41){
box50.x=1920
box50.y=370
box50.velocityX=-5

}
  
  if (boss1time>50&&boss1time<51){
box50.x=1920
box50.y=370
box50.velocityX=-6

}
  
    if (boss1time>60&&boss1time<61){
box50.x=1920
box50.y=370
box50.velocityX=-6

}
  
if (boss1time>70&&boss1time<71){
box51.x=1920
box51.y=370
box51.velocityX=-7

}
  
  
  
  
  
  if (boss1time>80&&boss1time<81){
box50.x=1920
box50.y=370
box50.velocityX=-7

}
  
  if (boss1time>90&&boss1time<91){
box50.x=1920
box50.y=370
box50.velocityX=-7

}
  
  if (boss1time>100&&boss1time<101){
box50.x=1920
box50.y=370
box50.velocityX=-8

}
  
    if (boss1time>110&&boss1time<111){
box50.x=1920
box50.y=370
box50.velocityX=-8

}
  
if (boss1time>120&&boss1time<121){
box51.x=1920
box51.y=370
box51.velocityX=-7

}
  
  
  
  
  
  
  
  
  
    if (boss1time>128&&boss1time<129){
box50.x=1920
box50.y=370
box50.velocityX=-9

}
  
  if (boss1time>136&&boss1time<137){
box50.x=1920
box50.y=370
box50.velocityX=-9

}
  
  if (boss1time>145&&boss1time<146){
box50.x=1920
box50.y=370
box50.velocityX=-10

}
  
    if (boss1time>154&&boss1time<153){
box50.x=1920
box50.y=370
box50.velocityX=-10

}
  
if (boss1time>162&&boss1time<163){
  box50.x=1920
box50.y=370
box50.velocityX=-10
}
  
  
  if (boss1time>160&&boss1time<161){
 box52.x=1920
box52.y=370
box52.velocityX=-10

}
  
  
  
    
if (boss1time>170&&boss1time<171){
  box50.x=1920
box50.y=370
box50.velocityX=-12
}
if (boss1time>172&&boss1time<173){
 box52.x=1900
box52.y=370
box52.velocityX=-12

}
  
  
  if (boss1time>174&&boss1time<175){
 box50.x=1900
box50.y=370
box50.velocityX=-12

}
  
   if (boss1time>176&&boss1time<177){
 box52.x=1900
box52.y=370
box52.velocityX=-12

} 
  
  
  
    if (boss1time>178&&boss1time<179){
 box50.x=1900
box50.y=370
box50.velocityX=-12

}
  
  
  
    if (boss1time>180&&boss1time<181){
 box52.x=1900
box52.y=370
box52.velocityX=-12

}
  
  
  
  
  
  
  
  
      if (boss1time>182&&boss1time<183){
 box50.x=1900
box50.y=370
box50.velocityX=-12

}
  
  
     if (boss1time>184&&boss1time<185){
 box52.x=1900
box52.y=370
box52.velocityX=-12

} 
  
       if (boss1time>186&&boss1time<187){
 box50.x=1900
box50.y=370
box50.velocityX=-12

} 
  
       if (boss1time>188&&boss1time<189){
 box52.x=1900
box52.y=370
box52.velocityX=-12

} 
  
       if (boss1time>191&&boss1time<192){
 box50.x=1900
box50.y=370
box50.velocityX=-12

} 
  if (boss1time>192&&boss1time<194){

 box51.x=1900
box51.y=370
box51.velocityX=-7


}
  
if (boss1.isTouching(box51)){

Boss1helth=Boss1helth-1
box51.y=2000
}
  

 if (Boss1helth===0) {
boss1.y=2000
camera.x=2200
  


 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (redBall.isTouching(box50)||redBall.isTouching(box51)||redBall.isTouching(box52)|| redBall.isTouching(boss1)){
    redBall.x=1620 
  box47.x=1650
   box47.y=370
  box48.x=1627
  box48.y=340
  box47.velocityY=0
  boss1time=0
  boss1.x=1900
  boss1.y=360
  
 box50.x=  16270          
 box52.y=  3400
 box51.x=  16270      
 box51.y=  3400
 box52.x=  16270  
 box52.y= 3400  
  Boss1helth=3  
 
    
  }
 
  
  
  
  

  
}


