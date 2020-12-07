  
class Bob{
    constructor(x, y, r){
    var options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:1.2
    }

    this.body=Bodies.circle(x, y, r, options);
    this.radius=r;
    
    World.add(world, this.body);
}
display()
{
    var pos=this.body.position;

    push();
    translate(pos.x, pos.y);

    stroke("#C0C0C0");
    fill("#C0C0C0");
    ellipseMode(RADIUS)

    ellipse(0, 0, this.radius);
    pop();
}
}