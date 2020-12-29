
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);
  

  
}


function draw() {
  background(225)
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>150){
    monkey.velocityY=-12
  }
  
monkey.velocityY = monkey.velocityY + 1.0;
  
  monkey.collide(ground);
  
obstacleGroup();
FoodGroups();
  
  drawSprites();
}

  function FoodGroups(){
    if (frameCount % 60 ===0){
      var banana = createSprite(600,120,40,10);
      banana.y = Math.round(random(100,230));
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -4
      
    }
  }   
  
function obstacleGroup(){
  if (frameCount % 90===0){
    var obstacle = createSprite(200,330,10,40);
   // obstacle.x= Math.round(random(1,8));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4
  
  }
  
}



