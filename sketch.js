var canvas;
var music;
var surface1, surface2, surface3, surface4,surface5;
var box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(random(20,750),100,50,50);
    box.shapeColor = ("white");

    box.velocityX = -3;
    box.velocityY = 5;

    surface1 = createSprite(97,590,200,20);
    surface1.shapeColor = "#FF3333";

    surface2 = createSprite(310,590,200,20);
    surface2.shapeColor = "#FF335B";

    surface3 = createSprite(520,590,200,20);
    surface3.shapeColor = "blue";

    surface4 = createSprite(730,590,200,20);
    surface4.shapeColor = "#380D81";

    edge = createEdgeSprites();
}

function draw() {
    background(0);

    box.bounceOff(edge[0]);
    box.bounceOff(edge[1]);
    box.bounceOff(edge[2]);

    if(box.bounceOff(surface1)){
        box.shapeColor = "#FF3333" ;
        music.play();
    }
    if(box.bounceOff(surface2)){
        box.shapeColor = "#FF335B" ;
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(box.bounceOff(surface3)){
        box.shapeColor = "blue" ;
    }
    if(box.bounceOff(surface4)){
        box.shapeColor = "#380D81" ;
    }
   
    drawSprites();
}
