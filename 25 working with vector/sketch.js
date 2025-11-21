//working with vector
//Margarita
//Nov 21
//

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    Object.push(new Ball(mouseX, mouseY));
  }
}

class Ball{
  constructor(){
    this.pos = createVector(x, y);
    this.vel = createVector(5, -5);
    this.gray = createVector(0, 0.2);
  }
  calcMouse(){
    this.grav = createVector(mouseX, mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize();
    this.grav.mult(4);
  }
  move(){
    this.vel.add(this.grav);
    this.vel.limit(20);
    this.pos.add(this.vel);

  }
  display(){
    circle(this.pos.x, this.pos.y, 20);

    if(true){
      stroke(255, 0, 0);
      line(0, 0, this.pos.x, this.pos.y);

      let endX = this.pos.x + this.vel.x ;
      let endY = this.pos.y + this.vel.y ;
      stroke(0, 0, 255);
      line(0, 0, this.pos.x, this.pos.y);


    }
  }
}
