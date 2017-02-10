//LOL

square = 0;
var keyx = 450;
var keyy = 100;

function preload()
{
  lock = loadImage('https://dl.dropboxusercontent.com/s/3oce5gm8mmfj15x/lock.png');
  
  lockkey = loadImage('https://dl.dropboxusercontent.com/s/32o502v88s6e4mh/key.png');
  
  creepyintro = loadImage('https://dl.dropboxusercontent.com/s/a1qxp3e0b4uv8qh/Creepy%20Intro.jpg');
}

function setup()
{
  createCanvas(800,600);
}

function draw()
{
  if (square == 1)
  {
    p1();
  }
  else if (square == 2)
  {
    p2();
  }
  else if (square == 3)
  {
    p3();
  }
  else
  {
    intro();
  }
}

function p1()
{
  background(100,100,100);
  inv();
  cursor(ARROW);
  
  image(lock,300,400,25,25);
  image(lockkey,keyx,keyy,25,25);
  
  
  if (mouseX >= 450 && mouseX <= 475 && mouseY >= 100 && mouseY <= 125)
   {
		cursor(HAND);
		if (mouseIsPressed)
		{
			keyx = 40;
			keyy = 540;
		}
   }
  else
  {
    cursor(ARROW);
  }
}

function p2()
{
  background(175,175,175);
  
}

function p3()
{
  background(150,150,150);
  
}

function intro()
{
  background(50,50,50);
  image(creepyintro,0,0,800,600);


  
  fill(150,0,0);
  stroke(250,0,0);
  if (mouseX >= 300 && mouseX <= 500 && mouseY >= 400 && mouseY <= 450)
  {
	cursor(HAND);
	fill(130,0,0);
	stroke(200,0,0);
	strokeWeight(5);
	
	if (mouseIsPressed)
	{
		square = 1;
	}
  }
  else
  {
	cursor(ARROW);
  }
  rect(300,400,200,50);
  
  fill(255,255,255);
  stroke(255,255,255);
  strokeWeight(1);
  textSize(15);
  text("START",375,430);
  
  fill(255,255,255);
  stroke(255,255,255);
  strokeWeight(3);
  textSize(50);
  text("ESCAPE ROOM",425,595);
}

function inv()
{
  fill(50,50,50);
  rect(0,500,800,100);
  
  //slot 1
  fill(100,100,100);
  rect(5,505,90,90);

  //slot 2
  fill(100,100,100);
  rect(105,505,90,90);

  //slot 3
  fill(100,100,100);
  rect(205,505,90,90);

  //slot 3
  fill(100,100,100);
  rect(305,505,90,90);
  
  //slot 4
  fill(100,100,100);
  rect(405,505,90,90);
  
  //slot 5
  fill(100,100,100);
  rect(505,505,90,90);
  
  //slot 6
  fill(100,100,100);
  rect(605,505,90,90);
  
  //slot 7
  fill(100,100,100);
  rect(705,505,90,90);
}