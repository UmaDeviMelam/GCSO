var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = (80,80,80);

  speed = random (55,90);
  weight = random (400,1500);

}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x<car.width/2+wall.width/2){

    car.velocityX = 0;

  var deformation = 0.5*wieght*speed*speed/22500;

  if(deforamtion<100){
    car.shapeColor ="green";
  }
  else if(deforamtion>100 && deformation<180){
    car.shapeColor = "orange";
  }
  else {
    car.shapeColor = "red";
  }
}
    
  drawSprites();
}