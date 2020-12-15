var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	plA=loadImage("player1.png")
plB=loadImage("player2.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

	playerA=createSprite(width-700, 400, 10,10);
	playerA.addImage(plA);
	//packageSprite.scale=0.2

	playerB=createSprite(width-100, 400, 10,10);
	playerB.addImage(plB)
	//helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  //  Matter.Body.setStatic(packageBody,false);
    
  }
}



