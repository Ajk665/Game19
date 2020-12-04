const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var thunder = [];
var man;

function preload(){
    
}

function setup(){
    createCanvas(300,800)
    engine = Engine.create();
    world = engine.world;

    man = new Man();
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    man.display();
    if(frameCount%1===0){

        particles.push(new Ball(random(width/2-10,width/2+10),10,10));
    
      }
      for(var j = 0; j < particles.length; j++){
         particles[j].display(); 
        } 
         if(frameCount%100===0){

            thunder.push(new Thunder(random(width/2-10,width/2+10)));
        
          }
          for(var j = 0; j < thunder.length; j++){
             thunder[j].display(); 
            } 
    } 

