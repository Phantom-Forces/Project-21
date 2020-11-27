var thickness, wall;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(50,200,100,20)
  wall = createSprite(1200,200,thickness,height/2)
  thickenss = random(22,83)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if (wall.x-bullet.x < (bullet.width+wall.width/2))
  {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180) { //bullet.shapeColor=color(255,0,0);
       bullet.shapeColor = "red";
       } if(deformation<180 && deformation>100) { bullet.shapeColor=color(230,230,0);
       } if(deformation<100) { bullet.shapeColor=color(0,255,0);
       }
  }  
  drawSprites();
}