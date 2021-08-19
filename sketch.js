var trex, trexRunning;
var ground, groundImage;
function preload() {
trexRunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
groundImage = loadImage("ground2.png")
}
function setup() {
createCanvas(600, 200);
//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trexRunning);
trex.scale = 0.5;
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
}
function draw() {
background(220);
//jump when the space button is pressed
if (keyDown("space")) {
trex.velocityY = -12;
}
trex.velocityY = trex.velocityY + 0.8
if (ground.x < 0) {
ground.x = ground.width / 2;
}
trex.collide(ground);
drawSprites();
}
