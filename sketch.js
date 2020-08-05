const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "yellow";

	boxDown = createSprite(1000,650,200,20);
	boxLeft = createSprite(900,610,20,100);
	boxRight = createSprite(1100,610,20,100);

	boxDown.shapeColor = "white";
	boxLeft.shapeColor = "white";
	boxRight.shapeColor = "white";


	

	//Create the Bodies Here.	
	paper1 = new Paper(200,450);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	boxDbody = Bodies.rectangle(1000,600,200,20,{isStatic : true});
	boxLbody = Bodies.rectangle(900,510,20,100,{isStatic : true});
	boxRbody = Bodies.rectangle(1100,510,20,100,{isStatic : true});

	World.add(world,boxDbody);
	World.add(world,boxLbody);
	World.add(world,boxRbody);
  
	//paper1 = new Paper(200,450);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
	
  paper1.display();

  drawSprites();
}

  function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:25,y:-16});		
	}
}






