var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "lightskyblue";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "lightgreen";

    block3 = createSprite(500, 580, 180, 30);
    block3.shapeColor = "violet"

    block4 = createSprite(700, 580, 180, 30);
    block4.shapeColor = "hotpink"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 6;
    ball.velocityY = 6;

}

function draw() {
    background("gray");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "lightskyblue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "lightgreen";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "violet";
        music.play();
    }


    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "hotpink";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }


    drawSprites();
}
