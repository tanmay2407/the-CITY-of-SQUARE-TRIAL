function preload() {
  playimage = loadImage("./images/play.png");
  settingimage = loadImage("./images/help.png");
  gobackimage = loadImage("./images/goback.png");
};

function create2() {
  GROUND1 = createSprite(200, -200, 400, 5);
  GROUNDL1 = createSprite(398, -2200, 3, 4000);
  GROUNDR1 = createSprite(2, -2200, 3, 4000);
  INVGROUND1 = createSprite(200, -203, 400, 5);
  box1 = createSprite(350, -270, 100, 5);
  ivbox1 = createSprite(350, -273, 100, 5);
  box2 = createSprite(170, -313, 40, 5);
  ivbox2 = createSprite(170, -316, 40, 5);
  box3 = createSprite(40, -333, 70, 5);
  ivbox3 = createSprite(40, -336, 70, 5);
  box4 = createSprite(125, -456, 150, 5);
  ivbox4 = createSprite(125, -455, 130, 5);
  box5 = createSprite(240, -410, 100, 5);
  ivbox5 = createSprite(240, -411, 100, 5);
  box6 = createSprite(26, -360, 40, 5);
  ivbox6 = createSprite(26, -363, 40, 5);
  box7 = createSprite(46, -347.5, 5, 30);
  box8 = createSprite(325, -486, 50, 5);
  ivbox8 = createSprite(325, -487, 50, 5);
  box9 = createSprite(370, -536, 50, 5);
  ivbox9 = createSprite(370, -537, 50, 5);
  box10 = createSprite(320, -606, 50, 5);
  ivbox10 = createSprite(320, -607, 50, 5);
  box11 = createSprite(370, -676, 50, 5);
  ivbox11 = createSprite(370, -677, 50, 5);
  box12 = createSprite(370, -746, 50, 5);
  ivbox12 = createSprite(370, -747, 50, 5);
  box13 = createSprite(370, -816, 50, 5);
  ivbox13 = createSprite(370, -817, 50, 5);
  box14 = createSprite(270, -856, 50, 5);
  ivbox14 = createSprite(270, -857, 50, 5);



}
function properties() {
  INVGROUND1.visible = false;
  //GROUNDL1.visible = false;
  //GROUNDR1.visible = false;
  ivbox1.visible = false;
  ivbox2.visible = false;
  ivbox3.visible = false;
  ivbox4.visible = false;
  ivbox5.visible = false;
  ivbox6.visible = false;
  ivbox8.visible=false;
  ivbox9.visible=false;
  ivbox10.visible=false;
  ivbox11.visible=false;
  ivbox12.visible=false;
  ivbox13.visible=false;
  ivbox14.visible=false;


  //color
  GROUND1.shapeColor = 'black';
  GROUNDR1.shapeColor = 'black';
  GROUNDL1.shapeColor = 'black';
  red.shapeColor = 'red';
  box1.shapeColor = 'green';
  box2.shapeColor = 'green';
  box3.shapeColor = 'green';
  box4.shapeColor = 'blue';
  box5.shapeColor = 'green';
  box6.shapeColor = 'green';
  box7.shapeColor = 'green';
  box8.shapeColor = 'green';
  box9.shapeColor = 'green';
  box10.shapeColor = 'green';
  box12.shapeColor = 'green';
  box11.shapeColor = 'green';
  box13.shapeColor = 'green';
  box14.shapeColor = 'green';








  //collide
  red.collide(GROUND1);
  red.collide(GROUNDL1);
  red.collide(GROUNDR1);
  red.collide(box1);
  red.collide(box2);
  red.collide(box3);
  red.collide(box4);
  red.collide(box5);
  red.collide(box6);
  red.collide(box7);
  red.collide(box8);
  red.collide(box9);
  red.collide(box10);
  red.collide(box11);
  red.collide(box12);
  red.collide(box13);
  red.collide(box14);











}

function jump() {
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(INVGROUND1)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox1)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox2)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox3)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox4)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox6)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox5)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox8)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox9)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox10)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox11)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox12)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox13)) { red.velocityY = -9 } };
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox14)) { red.velocityY = -9 } };








}



function times() { temptime = temptime + 1; if (temptime > 10) { temptime = 0; time = time + 1; text(time, 200, 10000); } }; function create1() { createCanvas(400, 400); play = createSprite(200, 180, 70, 10); play.addImage(playimage); play.scale = 0.5; setting = createSprite(380, 20, 10, 10); setting.addImage(settingimage); setting.scale = 0.2; camera.x = 0; camera.y = 0; goback = createSprite(1000, 280); goback.addImage(gobackimage); goback.scale = 0.1; red = createSprite(200, -220, 20, 20) }; function stateChange() { if (state === "intro") { camera.x = 200; camera.y = 200; background("skyblue"); fill("red"); textSize(34); textFont("inconsolata"); text("The CITY of SQUARE", 40, 70); if (mousePressedOver(play)) { state = "l-1" }; if (mousePressedOver(setting)) { state = "help" } }; if (state === "help") { background("gray"); camera.x = 1000; camera.y = 200; fill("red"); textSize(34); textFont("inconsolata"); text("Help", 970, 50); fill("black"); textSize(24); text("use arrows and wsad keys to move", 830, 80); text("space button to jump", 830, 110); text("find check point to save game(kidding)", 830, 140); text("there is an secrate in game find i*can", 830, 170); text("go back", 965, 350); if (mousePressedOver(goback)) { state = "intro" } }; if (state === "l-1") { background("skyblue"); camera.y = red.y; camera.x = red.x; control(); times() } }; function control() { red.velocityY = red.velocityY + 0.5; if (keyDown("A") || keyDown(LEFT_ARROW)) { red.velocityX = -5 }; if (keyDown("D") || keyDown(RIGHT_ARROW)) { red.velocityX = 5 };; if (keyWentUp("A") || keyWentUp(LEFT_ARROW)) { red.velocityX = 0 }; if (keyWentUp("D") || keyWentUp(RIGHT_ARROW)) { red.velocityX = 0 } }; var state = "intro"; var time = 00; var temptime = 00; function setup() { create1(); create2() }; function draw() { background("skyblue"); stateChange(); properties(); drawSprites(); jump() };