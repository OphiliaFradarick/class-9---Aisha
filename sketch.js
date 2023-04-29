var ball , treeImage;

function preload(){
  treeImage = loadImage("tree.gif")
}

function setup(){
    createCanvas(600,400);

    //creating a sprite
    ball = createSprite(300, 200, 30, 30);
    ball.addImage("treeeeees", treeImage);
    ball.scale = 0.2;
}

function draw(){
    background('black');

    drawSprites();
}