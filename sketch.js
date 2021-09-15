const Engine = Matter.Engine;
const World = Matter.world;
const Bodies =Matter.Bodies;
const constrain=matter.constrain;
var Drops;
var world,engine;
var maxDrops;

function preload(){
}

function setup(){
    engine=Engine.create();
    world=engine.world;

    if(frameCount%150===0){
        for(var i=0;i<maxDrops;i++){
            Drops.push(new createDrop(random(0,400),random(0,400)));
        }
    }
    }

    createCanvas(1600,700);
   
    


function draw(){
    Engine.update(engine);
    background(red);
 

  for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY()
    
}

    
  drawSprites();
}   


