
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new Roof(400,100,500,30);
	bob1=new Bob(400,400,30);



	rope1=new Rope(bob1.body,{x:400,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
 // text(mouseX+" "+mouseY,mouseX,mouseY)
  roof1.display();
  bob1.display();
  rope1.display();
  drawSprites();
 
}



