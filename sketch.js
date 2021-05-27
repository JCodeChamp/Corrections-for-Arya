
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here
	bobObject1=new Bob(320,575,60);
	bobObject2=new Bob(320+62,575,60);
    bobObject3=new Bob(320+62+62,575,60);
	bobObject4=new Bob(320+62+62+62,575,60);
	bobObject5=new Bob(320+62+62+62+62,575,60);

	roofObject=new Roof(450,200,400,50);

	rope1=new Rope(bobObject1.body,{x:320, y:200});
	rope2=new Rope(bobObject2.body,{x:320+62, y:200})
	rope3=new Rope(bobObject3.body,{x:320+62+62, y:200})
	rope4=new Rope(bobObject4.body,{x:320+62+62+62, y:200});
	rope5=new Rope(bobObject5.body,{x:320+62+62+62+62, y:200})
  
}


function draw() {
  
  background("skyblue");
  Engine.run(engine);

 // rectMode(CENTER);

  /*
if(keyDown("left")){
 bobObject1.isStatic=false;
}
if(keyDown("right")){
	bobObject5.isStatic=false;
}
*/
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

roofObject.display();
  
  //drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
								{x:-150,y:145});
	
		  }
	}


