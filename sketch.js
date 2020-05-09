const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    box=Bodies.rectangle(200,600,50,50);
    
}

function draw(){
    background(0);
    
    rectMode(CENTER);
    rect (200,200,300,300,);
    rect (200,200,220,220);
    rect (200,200,120,120);
    
   
}






















