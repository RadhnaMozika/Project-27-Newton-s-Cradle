
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function preload()
{
	//no images
}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=100
	
	//creating roof 
	roof1= new Roof(400, 150, 500, 40);

	//creating bobs
	bob1 = new Bob(200, 500, bobDiameter/2);
	bob2 = new Bob(300, 500, bobDiameter/2);
	bob3 = new Bob(400, 500, bobDiameter/2);
	bob4 = new Bob(500, 500, bobDiameter/2);
	bob5 = new Bob(600, 500, bobDiameter/2);


	//creating ropes
	//offset Y is 0
	rope1 = new Rope(bob1.body, roof1.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof1.body, -bobDiameter, 0);
	rope3 = new Rope(bob3.body, roof1.body, 0, 0);
	rope4 = new Rope(bob4.body, roof1.body, bobDiameter, 0);
	rope5 = new Rope(bob5.body, roof1.body, bobDiameter*2, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("#E9E9E9");
  
	roof1.display();

	ellipseMode(RADIUS);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}


//creating function for moving the bobs
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.body, bob1.body.position, {x:-800, y:-800});

	}
}

