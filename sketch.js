const Engine=Matter.Engine;
const World=Matter.World;
const Events= Matter.Events;
const Bodies=Matter.Bodies;

var particles =[];
var plinkos =[];
var divisions=[];
var divisionHeight=[];
var score=0;
function setup() {
  createCanvas(800,400);
engine = Engine.create();
world=engine.world;
ground=new Ground(width/2,height,width,20);


for (var i=0;i<=width;i=i+80){
  divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
}


for(var j =75; j<=width;j=j+50)
{

  plinkos.push(new Plinko(j,75));
}

for(var j =50; j<=width -10;j=j+50)
{

  plinkos.push(new Plinko(j,175));
}

for(var j =75; j<=width;j=j+50)
{

  plinkos.push(new Plinko(j,275));
}

for(var j =50; j<=width-10;j=j+50)
{

  plinkos.push(new Plinko(j,375));
}




}



function draw() {
  background("black");
  textSize  (20);
  //text("Score :"+score,20,30);
  Engine.update(engine);
  ground.display();

  for( var k =0; k <plinkos.lenghth; k++){

    plinkos[k].display();

  }
 if(frameCount%60===0){
   particles.push(new Particle(random(100,700),10,10));
   score++;
 }

 for (var j =0; j<particles.length; j++){

  particles[j].display();
 }
 for (var k = 0;k< divisions.length; k++){

  divisions[k].display();
 }
}