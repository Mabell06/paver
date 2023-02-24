const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var cannonball;

var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
 
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  tower = new Tower(150, 350, 160, 310);
 // ground = new Ground(0, height - 1, width * 2, 1);
  
  angle = -PI / 4;
  cannon = new Cannon (188, 145, 100, 50, angle);
  cannonball = new CannonBall (cannon.x, cannon.y);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  //ground.display();
  

  tower.display();
  cannon.display();
  cannonball.display();
 
}