
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var ground1;
var rope, rope1, rope2, rope3, rope4;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bob1 = new Bob(width / 2, height / 2, 50);
	bob2 = new Bob(width / 2, height / 2, 50);
	bob3 = new Bob(width / 2, height / 2, 50);
	bob4 = new Bob(width / 2, height / 2, 50);
	bob5 = new Bob(width / 2, height / 2, 50);


	roof = new Roof(400, 100, 500, 20);
	ground1 = new Roof(400, 700, width, 35);


	//middle right ball
	rope = new Rope(bob1.body, roof.body, 90, 0);
	//right ball
	rope1 = new Rope(bob2.body, roof.body, 175, 0);
	//middle ball
	rope2 = new Rope(bob3.body, roof.body, 0, 0);
	//middle left ball
	rope3 = new Rope(bob4.body, roof.body, -90, 0);
	//left wall
	rope4 = new Rope(bob5.body, roof.body, -175, 0);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);


	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	ground1.display();
	rope.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();

	//  bob1.body.position.x = mouseX;
	//  bob1.body.position.y = mouseY;

	fill("red");
	textSize(35);
	text("Created By Swayam sai kar",350,600);

	drawSprites();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(bob2.body, bob2.body.position, { x: 250, y: -300 })
	}
}
