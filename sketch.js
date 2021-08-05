
function preload(){
  //pre-load images
trackImg = loadImage("path.png")
runnerAni = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  track = createSprite(200,190,400,250)
  track.addImage(trackImg)

  player = createSprite(200,340,20,20)
  player.addAnimation("player", runnerAni)
  player.scale = 0.1

  leftwall = createSprite(60,200,20,400)
  rightwall = createSprite(340,200,20,400)
leftwall.visible = false 
rightwall.visible = false
}

function draw() {
  background("black");
player.x = mouseX
player.collide(leftwall)
player.collide(rightwall)

track.velocityY = -3
if(track.y < 0){
  track.y = 190
}

  drawSprites()
}
