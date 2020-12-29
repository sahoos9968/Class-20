
var moving, fixed;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "orange";
  fixed.debug = true;

  moving = createSprite(0,0, 50, 50);
  moving.shapeColor = "blue";
  moving.debug = true;

}

function draw() {
  background(10);  

  moving.x = mouseX;
  moving.y = mouseY;

  if (moving.x - fixed.x < moving.width/2 + fixed.width/2 
    && fixed.x - moving.x < moving.width/2 + fixed.width/2 
    && moving.y - fixed.y < moving.height/2 + fixed.height/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2) {

      moving.shapeColor = "yellow";
      fixed.shapeColor = "red";
    }

    else{
      moving.shapeColor = "blue";
      fixed.shapeColor = "orange";
    }

  drawSprites();
}