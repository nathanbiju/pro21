
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var engine, world;
var ls,rs;
 


	


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution:1,
		isStatic:false,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,60,ball_options)
	World.add(world,ball)

	ground = new Ground(width/2,670,width,20)
	ls = new Ground(1100,600,20,120)
	rs = new Ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,60,60)
  ground.display()
  ls.display()
  rs.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



