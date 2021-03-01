
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine,world;
var bob1, bob2, bob3, bob4, bob5;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject1=new ground(width/2,670,width,20);
	groundObject2=new ground(700,150,600,50);
	
  bob1Diameter=-97;
  bob2Diameter=-47;
  bob3Diameter=5;
  bob4Diameter=50;
  bob5Diameter=100;
	
bob1 = new bob(900,500);
bob2 = new bob(800,500);
bob3 = new bob(700,500);
bob4 = new bob(600,500);
bob5 = new bob(500,500);
	Engine.run(engine);
  
    chain1 = new chain(bob1.body,groundObject2.body,-bob1Diameter*2, 0);
    chain2 = new chain(bob2.body,groundObject2.body,-bob2Diameter*2, 0);
    chain3 = new chain(bob3.body,groundObject2.body,-bob3Diameter*2, 0);
    chain4 = new chain(bob4.body,groundObject2.body,-bob4Diameter*2, 0);
    chain5 = new chain(bob5.body,groundObject2.body,-bob5Diameter*2, 0);

}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject1.display();
  groundObject2.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}

