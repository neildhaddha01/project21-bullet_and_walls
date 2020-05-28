var bullet,wall;
var speeed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 25, 25);
  bullet.shapeColor="white"
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.debug= true
  wall.shapeColor=color(80,80,80);
  bullet.debug= true
  bullet.depth=wall.depth
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed
  if (hascollided(bullet,wall)) {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if (damage<10) {
      wall.shapeColor="green"
    }
    if (damage>10) {
      wall.shapeColor="red"
    }
  }
  drawSprites();
}

function hascollided(vbullet,vwall) {
  bulletRightEdge=vbullet.x + vbullet.width;
  wallLeftEdge=vwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true

  } else {
    return false

  }
}