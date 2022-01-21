function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 50, 100);
}

function draw() {
  background(30);
  drawSprites();

  if (keyDown("left")) {
    box.x = box.x - 0.5;
  }

  if (keyDown("right")) {
    box.x = box.x + 0.5;
  }
}
