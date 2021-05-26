
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stone, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world, boy;

function preload() {
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1115, 100, 30);
	mango3 = new Mango(1000, 100, 30);
	mango4 = new Mango(1155, 100, 30);
	mango5 = new Mango(1130, 100, 30);

	stone = new Stone(235, 420, 50);

	treeObj = new tree(1050, 580);
	groundObject = new ground(width / 2, 600, width, 20);

	slingShot = new SlingShot(stone.body, { x: 235, y: 420 });

	Engine.run(engine);

}

function draw() {

	background(230);
	//Add code for displaying text here!
	image(boy, 200, 340, 200, 300);


	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	detectcollision(stone, mango1);
	detectcollision(stone, mango2);
	detectcollision(stone, mango3);
	detectcollision(stone, mango4);
	detectcollision(stone, mango5);

	groundObject.display();
	treeObject.display();
	stone.display();
	slingShot.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	slingShot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 235, y: 420 });
		launcherObject.attach(stone.body);
	}
}

function detectcollision(stone, mango) {
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y,)
	if (distance <= mango.r + stone.r) {
		Matter.Body.setStatic(mango.body, false);
	}
}
