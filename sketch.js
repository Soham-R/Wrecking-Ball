const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,970);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(1000,800,70,70);
    box2 = new Box(1000,730,70,70);
    box3 = new Box(1000,660,70,70);
    ball1 = new Ball(800,600,40,40)
    rope = new Rope(ball1.body,{x:800, y:400})
    ground = new Ground(600,950,1200,25);
}

function draw(){
    background("gray");
    Engine.update(engine);
    //strokeWeight(4);

ground.display();
box1.display();
box2.display();
box3.display();
ball1.display();
rope.display();
}
