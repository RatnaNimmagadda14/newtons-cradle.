class Rope{
	constructor(body1,body2,pointA,pointB)
	{
 this.pointA=pointA
 this.pointB=pointB
	//create rope constraint here
var options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB}
}
this.rope=Constraint.create(options)
World.add(world,this.rope)
	}

display(){
	var pointA=this.rope.bodyA.position
	var pointB=this.rope.bodyB.position
 strokeWeight(2)
 line(pointA.x,pointA.y,this.pointA+pointB.x,this.pointB+pointB.y)	
}

    //create display() here 

}
