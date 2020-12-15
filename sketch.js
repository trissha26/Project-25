
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbinSide1,dustbinSide2,dustbinSide3;


function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,40)
	ground = new Ground(500,380,1000,20)

	dustbinSide1= new Dustbin(600,380,150,20);
	dustbinSide2= new Dustbin(560,340,20,100);
	dustbinSide3= new Dustbin(640,340,20,100);
	
	 

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  
  ground.display();

  fill("lightblue");

  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();

  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-25});
	}

	
}




