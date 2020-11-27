var wall1, wall2, wall3, wall4;
var bullet1, bullet2, bullet3, bullet4;
var speed;
var weight;
var thick1, thick2, thick3, thick4;
function setup() {
  createCanvas(850,400);

  speed=random(223,331);
  weight=random(30,52); 
  
  thick1=random(22,83);
  thick2=random(22,83);
  thick3=random(22,83);
  thick4=random(22,83);

  wall1=createSprite(750, 50, thick1, 70);
  wall2=createSprite(750, 150, thick2, 70);
  wall3=createSprite(750, 250, thick3, 70);
  wall4=createSprite(750, 350, thick4, 70);

  bullet1 = createSprite(50,50 ,40,1);
  bullet2 = createSprite(50,150,40,1);
  bullet3 = createSprite(50,250,40,1);
  bullet4 = createSprite(50,350,40,1);
  
}

function draw() {
  background(255,255,255);
  if(bullet1.x<55){
    textSize(24);
    fill("black");
    text("press space to test Wall",330,200);
  }
  if(keyDown("space")){
    bullet1.velocityX=speed;
    bullet2.velocityX=speed;
    bullet3.velocityX=speed;
    bullet4.velocityX=speed;
  }
  
  if(hasCollided(bullet1, wall1)){
    bullet1.velocityX=0;
    var damage= (0.5*weight*speed*speed)/(thick1*thick1*thick1);
    if(damage>10){
      wall1.shapeColor="red";
    }
    if(damage<10){
      wall1.shapeColor="green";
    }
  }

  if(hasCollided(bullet2, wall2)){
    bullet2.velocityX=0;
    var damage= (0.5*weight*speed*speed)/(thick2*thick2*thick2);
    if(damage>10){
      wall2.shapeColor="red";
    }
    if(damage<10){
      wall2.shapeColor="green";
    }
  }

  if(hasCollided(bullet3, wall3)){
    bullet3.velocityX=0;
    var damage= (0.5*weight*speed*speed)/(thick3*thick3*thick3);
    if(damage>10){
      wall3.shapeColor="red";
    }
    if(damage<10){
      wall3.shapeColor="green";
    }
  }

  if(hasCollided(bullet4, wall4)){
    bullet4.velocityX=0;
    var damage= (0.5*weight*speed*speed)/(thick4*thick4*thick4);
    if(damage>10){
      wall4.shapeColor="red";
    }
    if(damage<10){
      wall4.shapeColor="green";
    }
  }

  drawSprites();
}

function hasCollided(lbullet1,lwall1){
  bullet1RightEdge=lbullet1.x+lbullet1.width;
  wall1LeftEdge=lwall1.x;
    if(bullet1RightEdge>=wall1LeftEdge){
      return true;
    }
    return false;
}