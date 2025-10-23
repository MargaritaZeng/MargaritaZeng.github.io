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
    let choiseVehicleW = new Vehicle (int(random(2)) ,random(width), random(0, 180), 0 , random(-15, 15) )
    westbound.push(choiseVehicleW);
    let choiseVehicleE = new Vehicle (int(random(2)),random(width), random(205, 380), 1 , random(-15, 15) )
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
    E.action();
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
      rect(this.x ,this.y-6, 9, 5);
      rect(this.x , this.y+10, 9, 5);
      rect(this.x+24 ,this.y-6, 9, 5 );
      rect(this.x+24 , this.y+10, 9, 5);
    }
    //truck
    else{
      fill(this.c);
      rect(this.x, this.y, 40, 20);
      fill(255, 221, 0);
      rect(this.x+25, this.y, 1, 20);
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

  speedUp(){
    if( this.xSpeed < 0 ) {
      this.xSpeed += random(-5, 0);
    }
    else if (this.xSpeed > 0){
      this.xSpeed += random(5);
      
    }
    else if ( this.xSpeed < 0 && this.d === 0){
      this.xSpeed === 0;
    }
    else if ( this.xSpeed > 0 && this.d === 1){
      this.xSpeed === 0;
    }
  }

  speedDown(){
    if( this.xSpeed < 0 ) {
      this.xSpeed -= random(-5, 0);
     
    }
    else if (this.xSpeed > 0){
      this.xSpeed -= random(5);
      
    }
    else if ( this.xSpeed < 0 && this.d === 0){
      this.xSpeed === 0;
    }
    else if ( this.xSpeed > 0 && this.d === 1){
      this.xSpeed === 0;
  }
}

  changeColor(){
    color(random(255),random(255),random(255));
  }

  action(){
    this.move();

    this.display();
    if (int(random(100)) === 22){
      this.speedDown()
    }
    else if (int(random(100)) === 36){
      this.speedUp()
    }
    else if (int(random(100)) === 78){
      this.changeColor()
    }
    
    this.move();
  }


 
}
//draw a car 
