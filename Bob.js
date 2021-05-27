class Bob{
	constructor(x)
	{
	
		this.x=x;
		
	var options={
		'restitution':0.3,
		'friction': 5,
		'density':1,
		isStatic:true,

	}
	    
		this.body=Bodies.circle(this.x, 100, 100, options)
		World.add(world, this.body);
		

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			//draw the ellipse here to display the rubber ball
            //make a ellipse,radius,delete ground class on line 30
            ellipse(paperpos.x,paperpos.y,50);  
			pop(); 
	}
}
