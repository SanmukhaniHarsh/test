
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var gameState = "start" 

function preload()
{
rocketdown = loadImage('rocketdown.png')
rocketleft = loadImage('rocketleft.png')
rocketright = loadImage('rocketright.png')
rocketup = loadImage('rocketupimage.png')
bgimg = loadImage('bgimg.jpeg')
openingpicture = loadImage('opening picture.png') 
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//creating the sprites
	
	bg = createSprite(700,300)
	bg.addImage(openingpicture)
	bg.scale = 0.2
	bg.visible = false

  player = createSprite(90,520)
  player.addImage(rocketup);
  player.scale = 0.7;
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);

  drawSprites();

  ///////---------------------------------------> GAMESTATE  __ START <---------------------------------------------

  if(gameState==="start"){
	
    bg.visible = true;

    fill ("white");
    stroke ("black");
    strokeWeight(5);
    textSize(20);
    text("PRESS SPACE TO PLAY ",590,440);

    if(keyCode === 32){
      gameState = "play";
    }
  }

  ///////---------------------------------------> GAMESTATE  __ PLAY <---------------------------------------------

  if(gameState==="play"){

   bg.visible = false

   //THE MOUSE CURSOR
   fill("white");
   text(mouseX+','+ mouseY,mouseX,mouseY);

   //PLAYER IMAGE CHANGE
   if(keyIsDown(DOWN_ARROW)){
    player.addImage(rocketdown);
    playerMovment(0, 2)
   }

   if(keyIsDown(RIGHT_ARROW)){
    player.addImage(rocketright);
    playerMovment(2, 0)
   }

   if(keyIsDown(LEFT_ARROW)){
    player.addImage(rocketleft);
    playerMovment(-2, 0)
   }

   if(keyIsDown(UP_ARROW)){
    player.addImage(rocketup);
    playerMovment(0, -2)
   }

   //THE MAZE 
   maze();
  
  }
  
  
 
}

function playerMovment(x, y){
  player.x = player.x + x;
  player.y = player.y + y;
}

function maze(){
  wall1 = createSprite(50, 500, 10, 300);
  wall2 = createSprite(150, 550, 10, 200);
  wall3 = createSprite(350, 450, 400, 10);
  wall4 = createSprite(250, 350, 400, 10);
  wall5 = createSprite(455,255, 10, 200);
  wall6 = createSprite(555,305, 10, 295);
  wall7 = createSprite();
  wall8 = createSprite();
  wall9 = createSprite();
  wall10 = createSprite();
  wall11 = createSprite();
  wall12 = createSprite();
  wall13 = createSprite();
  wall14 = createSprite();
}



