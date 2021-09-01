const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  var bob_options={
	  isStatic:false,
	  restitution:1,
	  density:1

  }
  bob1= Bodies.circle(320,380,20,bob_options)
  World.add (world,bob1)
  bob2= Bodies.circle(360,380,20,bob_options)
  World.add (world,bob2)
  bob3= Bodies.circle(400,380,20,bob_options)
  World.add (world,bob3)
  rope1=new Rope (bob1,roof,-80,0)
  rope2=new Rope (bob2,roof,-40,0)
  rope3=new Rope (bob3,roof,0,0)
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display()
rope2.display()
rope3.display()
  
  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,40,40)
ellipse(bob2.position.x,bob2.position.y,40,40)
ellipse(bob3.position.x,bob3.position.y,40,40)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
if(keyCode===RIGHT_ARROW){
	Matter.Body.applyForce(bob1,bob1.position,{x:-40,y:-35})
}


}
