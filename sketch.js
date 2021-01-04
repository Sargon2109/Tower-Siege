const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var polygonImage;
var sling;

function preload() {
    polygonImage = loadImage ("polygon.png")
}


function setup () {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground (600,height,1200,20);
    stand1 = new Ground (852,200,150,10);
    stand2 = new Ground (620, 370, 200, 10);


    box1 = new Box (810, 180, 20, 30);
    box2 = new Box (832, 180, 20, 30);
    box3 = new Box (853, 180, 20, 30);
    box4 = new Box (874, 180, 20, 30);
    box5 = new Box (895, 180, 20, 30);
    box6 = new Box (832, 149, 20, 30);
    box7 = new Box (853, 149, 20, 30);
    box8 = new Box (874, 149, 20, 30);
    box9 = new Box (853, 118, 20, 30);


    box10 = new Box (557, 350, 20, 30);
    box11 = new Box (578, 350, 20, 30);
    box12 = new Box (599, 350, 20, 30);
    box13 = new Box (620, 350, 20, 30);
    box14 = new Box (641, 350, 20, 30);
    box15 = new Box (662, 350, 20, 30);
    box16 = new Box (683, 350, 20, 30);

    box17 = new Box (578, 319, 20, 30);
    box18 = new Box (599, 319, 20, 30);
    box19 = new Box (620, 319, 20, 30);
    box20 = new Box (641, 319, 20, 30);
    box21 = new Box (662, 319, 20, 30);


    box22 = new Box (599, 288, 20, 30);
    box23 = new Box (620, 288, 20, 30);
    box24 = new Box (641, 288, 20, 30);

    box25 = new Box (620, 256, 20, 30);

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling = new SlingShot(this.polygon, {x:100, y:200});
}

function draw () {
    background ("red")
Engine.update(engine);
stand1.display();
stand2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

imageMode (CENTER);
image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

sling.display();
}