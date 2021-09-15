
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var angle=60;

var wall1,wall2,wall3,wall4
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall1= new Wall(50,200,70,30)
  wall2= new Wall(150,200,70,30)
  wall3= new Wall(250,200,70,30)
  wall4= new Wall(350,200,70,30)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  
 
  
 

  ellipse(ball.position.x,ball.position.y,20);
  //rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

