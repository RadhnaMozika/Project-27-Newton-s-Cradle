    class Rope {
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.05,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        //variables to store x and y position of the bodies connected by rope
        var Point_A=this.rope.bodyA.position;
        var Point_B=this.rope.bodyB.position;
        
        var pointAX=Point_A.x
        var pointAY=Point_A.y

        //including offset on one end
        var pointBX=Point_B.x+this.offsetX
        var pointBY=Point_B.y+this.offsetY 

        strokeWeight(4);
        line(pointAX, pointAY, pointBX, pointBY);
    }

    }