var canvas;
var music;
var block, brick1, brick2, brick3, brick4;
var edge1, edge2, edge3, edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
brick1=createSprite(100,590,200,20);
brick1.shapeColor = "blue";

brick2=createSprite(300,590,200,20);
brick2.shapeColor = "yellow";

brick3=createSprite(500,590,200,20);
brick3.shapeColor = "red";

brick4=createSprite(700,590,200,20);
brick4.shapeColor = "pink";

    //create box sprite and give velocity
block=createSprite(350,50,20,20);
block.shapeColor = "white";
block.velocityX=-5;
block.velocityY=5;





edge1=createSprite(400,0,800,1);
edge1.shapeColor = (rgb(169,169,169));

edge2=createSprite(800,400,1,800);
edge2.shapeColor = (rgb(169,169,169));

edge3=createSprite(400,600,800,1);
edge3.shapeColor = (rgb(169,169,169));

edge4=createSprite(1,400,1,800);
edge4.shapeColor = (rgb(169,169,169));
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
block.bounceOff(edge1);
block.bounceOff(edge2);
block.bounceOff(edge3);
block.bounceOff(edge4);



    //add condition to check if box touching surface and make it box

if(brick1.isTouching(block)&& block.bounceOff(brick1)){
    block.shapeColor = "blue";
}
if(brick2.isTouching(block)&& block.bounceOff(brick2)){
    block.shapeColor = "yellow";
}
if(brick3.isTouching(block)&& block.bounceOff(brick3)){
    block.shapeColor = "red";
}
if(brick4.isTouching(block)&& block.bounceOff(brick4)){
    block.shapeColor = "pink";
}
    drawSprites();
}
