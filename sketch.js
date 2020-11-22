var a, b;
var A;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "green";
  a.velocityX=-4
  B = createSprite(60, 400, 50, 80);
  B.shapeColor = "green";
  B.velocityX= 4
  b = createSprite(400,200,80,30);
  b.shapeColor = "green";
  b.debug = true;
  A = createSprite(200, 300, 50, 80);
  A.shapeColor = "green";
  A.debug = true;
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;

  if (collision(A, b)){
    b.shapeColor = "red";
    A.shapeColor = "red";
  }
else{
  b.shapeColor = "green";
  A.shapeColor = "green";
}

Bounce(a,B)

  drawSprites();
}