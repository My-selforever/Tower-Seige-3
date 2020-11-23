const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var base,ground;
var block1,block2,block3,block4,block5,block6,block7
var block8,block9,block10,block11,block12,block13
var block14,block15,block16,block17,block18;
var block19,block20,block21,block22;
var connection,weapon;
var bg;

function preload()
{
  BG();
}
function setup() 
{
  createCanvas(800,400);
  engine=Engine.create() 
  world = engine.world
  //layer 1
  block1 = new Base (450,221,30,40,false)
  block2 = new Base(415,221,30,40,false)
  block3 = new Base (380,221,30,40,false)
  block4 = new Base (345,221,30,40,false)
  block5 = new Base (485,221,30,40,false)
  block6 = new Base (520,221,30,40,false)
  block7 = new Base (555,221,30,40,false)

//layer 2
 block8 = new Base (467.5,181,30,40,false)
 block9 = new Base (502.5,181,30,40,false)
 block10 = new Base (537.5,181,30,40,false)
 block11 = new Base (432.5,181,30,40,false)
 block12 = new Base (397.5,181,30,40,false)
 block13 = new Base (362.5,181,30,40,false)

//layer 3
block14 = new Base(450,141,30,40,false)
block15 = new Base(415,141,30,40,false)
block16 = new Base(380,141,30,40,false)
block17 = new Base(485,141,30,40,false)
block18 = new Base(520,141,30,40,false)

//layer 4
block19 = new Base(467.5,101,30,40,false);
block20 = new Base(502.5,101,30,40,false);
block21 = new Base(432.5,101,30,40,false);
block22 = new Base(397.5,101,30,40,false);

 weapon = new Control(270,161,20,20,false);
 connection = new Attach(weapon.body,{x:270,y:161});
  base = new Base(450,250,250,20,true);
  ground = new Base(400,390,800,20,true)

}

function draw() 
   {
    Engine.update(engine);
    if(bg)
    {
    background(bg);
    }

    else
    {
      background("white")
    }
    //layer1
    base.display(rgb(255,0,255));
    block1.display(rgb (25,255,255));
    block2.display(rgb (25,255,255));
    block3.display(rgb (25,255,255));
    block4.display(rgb (25,255,255));
    block5.display(rgb (25,255,255));
    block6.display(rgb (25,255,255));
    block7.display(rgb (25,255,255));

    //layer 2
    block8.display(rgb (205,15,255));
    block9.display(rgb (205,15,255));
    block10.display(rgb (205,15,255));
    block11.display(rgb (205,15,255));
    block12.display(rgb (205,15,255));
    block13.display(rgb (205,15,255));

    //layer 3
   block14.display(rgb(22,198,12));
   block15.display(rgb(22,198,12));
   block16.display(rgb(22,198,12));
   block17.display(rgb(22,198,12));
   block18.display(rgb(22,198,12));

   //layer 4
   block19.display(rgb(247,64,0))
   block20.display(rgb(247,64,0))
   block21.display(rgb(247,64,0))
   block22.display(rgb(247,64,0))

   ground.display("brown")
   weapon.display(rgb(255,255,0))
   connection.display(255);

   }

   function mouseDragged()
   {
       Matter.Body.setPosition(weapon.body,{x:mouseX,y:mouseY});
   }

   function mouseReleased()
{
    connection.fly(); 

}

async function BG()
{
  console.log("call")
     var data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var extractData = await data.json();
     var dateTime = extractData.datetime;
     var hour = dateTime.slice(11,13)

      if (hour >=6  &&  hour<=18)
     {
        bg = (rgb(240,140,80))
        console.log("K")
     }

     else
     {
       console.log("hi")
        bg = (rgb(10,10,60))
     }
     
}