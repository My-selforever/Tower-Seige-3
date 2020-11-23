class Attach
{
    constructor(a,b)
    {
        var constraint_Options =
        {
            bodyA:a,
            pointB:b,
            stiffness:0.02,
            length:20
        }
        this.attach = Constraint.create(constraint_Options);
        World.add(world,this.attach);
     }
    
    display()
    {
        if(this.attach.bodyA!=null)
        {
            var pointA = this.attach.bodyA.position;
            var pointB = this.attach.pointB;
                stroke(48,22,8)
                strokeWeight(2);
                line (pointA.x,pointA.y,pointB.x,pointB.y);

        }
       
    }
    fly()
    {
      this.attach.bodyA = null;
    }

    back(b)
    {
        this.attach.bodyA = b;
    }
}

