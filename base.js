class Base
{
    constructor(x,y,w,h,s)
    {
        this.width = w
        this.height = h
        this.t = 255
        var object_options=
        {
            isStatic:s,
            restitution: 1,
            friction: 1
        }

        this.body = Bodies.rectangle(x,y,w,h,object_options);
        World.add(world,this.body); 
        console.log(this.body)
    }
    display (c)
    {

        if(this.body.speed<3)
        {
            push();
            fill(c)
            translate (this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();

        }       
        else
        {   
            push();
            World.remove(world,this.body)
           
            //this.t = this.t - 5;
            //tint(255,this.t)
            
            //this.body.fill("bown")
            //rect(this.body.position.x,this.body.position.y,this.width,this.height);
            
            pop();
        }
        
    }

} 

/*class Pig extends Base
{
    constructor(x,y)
    {
       super(x,y,50,50);
       this.t = 255
       this.image = loadImage("Sprites/pig.png");
       
    }

    display()
        {
            if(this.body.speed<3)
            {
             //  console.log(this.body.speed);
            super.display()
            }       
            else
            {   push();
                World.remove(world,this.body)
                tint(255,this.t)
                this.t = this.t-3
                image(this.image,this.body.position.x,this.body.position.y,50,50);
                pop();
            }
            }
        }*/

