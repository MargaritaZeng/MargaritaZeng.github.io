// car, car, car
// Margarita
// oct 20 
//
let eastbound = [];
let westbound = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for ( s = 0; s<=20; s++){
    //w is left e is right
    let choiseVehicleW = new Vehicle (int(random(2)) ,random(width), random(0, 200), 0 , random(-15, 15) )
    westbound.push(choiseVehicleW);
    let choiseVehicleE = new Vehicle (int(random(2)),random(width), random(205, 400), 1 , random(-15, 15) )
    eastbound.push(choiseVehicleE);
  }
  
}

function draw() {
  //background(0);
  drawroad();
  for (let W of westbound){
    W.action();
  }
  for (let E of eastbound){
    //E.action();
  }
}


function drawroad(){
  fill(0);
  rect(0, 0, width, 400);
  for(i = 0 ; i <= width ; i+=25 ){
    fill(245, 227, 66);
    rect(i, 200, 20, 5);
  }
  
}

class Vehicle{
  // x, y, d, left or right s, speed
  constructor(t, x, y, d, xSpeed ){
    this.x = x; this.y = y; this.d = d ; this.s  = xSpeed; 
    this.c = color(random(255),random(255),random(255));
    this.t = t ;

  }
  ///draw the car 
  display(){
    if(this.t === 0){
      fill(this.c);
      rect(this.x , this.y, 35, 10);
      fill(255);
      rect(this.x+5 ,this.y+3, 9, 3 );
      rect(this.x+5 , this.y-13, 9, 3);
      rect(this.x+21 ,this.y+3, 9, 3 );
      rect(this.x+21 , this.y-13, 9, 3);
    }
    else{
      fill(this.c);
      rect(this.x, this.y, 40, 13);
      fill(255, 221, 0);
      rect(this.x+33, this.y, 1, 13);
    }
  }

  move(){
    this.x += this.s ;


    if (this.x < 0 && this.d === 0 ){
      this.x = width;
    }
    if (this.x > width && this.d === 1 ){
      this.x = 0;
    }



  }

  action(){
    this.move();

    // if(int(random(100)) === 66){
    //   speedUP();
    // }
    // else if(int(random(100)) === 78){
    //   speedDown();

    // }
    // else if(int(random(100)) === 5){
    //   changeColor();

    // }
    this.display();
  }


 
}
//draw a car 
