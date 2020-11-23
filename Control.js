class Control
{
    constructor(x,y,w,h,)
    {
        this.width = w
        this.height = h
        var object_options=
        {
            isStatic:false,
            restitution: 1,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,object_options);
        World.add(world,this.body); 

    }
    display (c)
    {
            push();
            fill(c)
            translate (this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();

    }

}