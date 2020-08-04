var engine,world;
const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

function setup() {
  createCanvas(displayWidth,displayHeight-150);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(displayWidth/2,displayHeight-170,displayWidth,20);
  ball1 = new Ball(400,250,70);
  //basket1 = new Basket(100,300,100,10);
  basket2 = new Basket(80,250,10,100);
  basket3 = new Basket(160,250,10,100);


  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(180); 
  
  ball1.display();
  ground.display();
  //basket1.display();
  basket2.display();
  basket3.display();

  
 //drawSprites();
}