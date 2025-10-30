// Inheritance and code in multiple files 
// margarita 
// oct 30 
// 
let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0 ; i<20 ; i++){
    objects.push(new AnimatedObject(random(width),random(height)));
    objects.push(new CircleObject(random(width),random(height)));
    objects.push(new LineObject());

  }
}

function draw() {
  background(220);
  for (let o of objects){
    o.move();
    o.display();
  }
}

// Parent Class ("super class ")
// -----if all iin onr file , should  occur first ...



//child Class #1 - circle
class CircleObject extends AnimatedObject{
  constructor(x,y){
    super(x, y);
    // we can also add-on to what was in the parent class
    this.size = random(20, 40);

  }
  // no menyion of move() ...it will be same as parent's move()
  display(){//function override ; copies overtop of parent version
    if (dist(this.x , this.y , mouseX, mouseY)< this.size/2){
      fill(0, 255, 0);

    }
    else fill(255);
    circle(this.x, this.y, this.size);

  }
}

class LineObject extends AnimatedObject{
  move(){
    super.move();
    this.x -=5 ;
    if (this.x < 0) this.x = width ;
  }
  display(){

  
  if (mouseIsPressed){
    strokeWeight(12);
  }
  else strokeWeight(2);

  line(this.x, this.y, this.x+15, this.y);
}
}