var monkey , monkey_running

var banana ,bananaImage, obstacle, obstacleImage

var bananaGroup, obstacleGroup

var ground;

var SurvivalTime = 0;

function preload(){
  
 monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")            
  
 bananaImage = loadImage("banana.png");
 obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
 createCanvas(400,400);
 
 monkey = createSprite(40,315,20,20);
 monkey.addAnimation("moving",monkey_running); 
 monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10); 
 ground.velocityX = -4; 
 ground.X = ground.width/2;
 console.log(ground.x);
  
 
} 

function draw() {
 background("white");
 

 monkey.collide(ground);
  
if(keyDown("space")){
 monkey.velocityY = -8;
} 
 monkey.velocityY = monkey.velocityY + 0.8;
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
 spawnbanana();  
 
 spawnobstacle();
  
 SurvivalTime = Math.ceil(frameCount/frameRate()) 
 text("Survival Time: "+ SurvivalTime,150,10); 

drawSprites(); 
}

function spawnbanana(){
if (frameCount % 80 === 0){
 var banana = createSprite(390,170,20,20);
 var rand = Math.round(random(120,200));
 banana.addImage(bananaImage);
 banana.velocityX = -4 
 banana.scale = 0.1;
 banana.lifetime = 100; 
}
}  

function spawnobstacle(){
if (frameCount % 120 === 0){
 var obstacle = createSprite(390,330,20,20);
 var rand = Math.round(random(1,4));
 obstacle.addImage(obstaceImage);
 obstacle.velocityX = -4 
 obstacle.scale = 0.1;
 obstacle.lifetime = 100; 
}
}  