class Rope{
    constructor(bodyA,pointB){
        
        
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:450,
            stiffness:0.5
            
        }
        this.pointB=pointB;
        //this.length = 200
        this.chain= Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var Apos=this.chain.bodyA.position;
        var Bpos=this.pointB;

        strokeWeight(6);
        line(Apos.x,Apos.y-30,Bpos.x,Bpos.y);
    }
}
