// object mini demo 
// margarita
// oct 10
//


//globals -----"simple data omly "
let myball;
let ballCollection =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myball = new Ball(100, 100);
}

function draw() {
  background(220);
  //process single ball object 
  myball.move();
  myball.display();

  // add new object tp array
  if(mouseIsPressed){
    ballCollection.push(new Ball(mouseX, mouseY));
  }

  for(let b of ballCollection){
    b.move();
    b.display();
    
  }
}

class Ball{
  //1. constructor 
  constructor(x,y){

    this.x = x;   this.y = y;
    this.c = color(random(255),random(255),random(255));
    this.size = 15;
    this.speed = random(2,10);


  }


  //2. class methods/functions 
  display(){
    fill(this.c)
    circle(this.x, this.y, this.size);

  }

  move(){
    //horizontal movement only
    this.x += this.speed;
    if(this.x > width) this.x = 0;
  }
}
