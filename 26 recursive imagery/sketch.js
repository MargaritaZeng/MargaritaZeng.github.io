// recursive imagery
// margarita
// nov 25
//


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function centerCircle(x, y, d){
  // recursively draw concentric circles
  // Base Case...implicit
  if(d > 10){
    //recursive case
    circle(x,y,d);
    centerCircle(x,y,d * 0.95);
  }

  //if we skip the recursive case, we 
  //unravel one level...base case
}

function circleFractal(x, y, d){
  // this better be good
  if(d > 10){
    circle(x,y,d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y+d/2, d/2);
    circleFractal(x, y-d/2, d/2);
  }
  //base case is implicit...
}

function setFill(x,y,s){
  //set an interactive fill value
  //based on proximity and scale
  if(dist(mouseX, mouseY, x,y) < s/2){
    // fill(255,0,0);
    strokeWeight(5);
  }
  else strokeWeight(1);//noFill();
}

function luckySquare(x,y,s){
  if(s >10){
    push();
    let r = map(x, 0, width, 0, 255);
    let g = map(y, 0, height, 0, 255);
    let b = map(y, 0, width, 255, 0);
    stroke(r,g,b);
    translate(x,y);
    rotate(radians(frameCount));
    setFill(x,y,s);
    square(0,0,s);
    pop();
    luckySquare(x-s/2, y-s/2, s*0.5);   
    luckySquare(x-s/2, y+s/2, s*0.5);  
    luckySquare(x+s/2, y-s/2, s*0.5);  
    luckySquare(x+s/2, y+s/2, s*0.5);   
    
  }
}

function draw() {
  rectMode(CENTER);
  noFill();
  background(0);
  stroke(255);
  luckySquare(width/2, height/2, width/2);
  //circleFractal(width/2, height/2, width/2);
  // centerCircle(width/2, height/2, width);

}