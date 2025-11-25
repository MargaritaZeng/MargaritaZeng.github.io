// recursive imagery
// margarita
// nov 25
//


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function centerCircle(x, y, d){
 // recursively draw concentric circles
 // base case ... implicit 
  if(d > 10){
    //recursive case
    circle(x, y, d);
    centerCircle(x, y, d*0.98);
  }
  // if we skip the recursive case, we
  //unravel one level ...base case
}

function circleFractal(x, y, d){
  if(d > 140){
    //recursive case
    circle(x, y, d);
    circleFractal(x-d/2, y, d/2)
  }
}

function draw() {
  noFill();
  background(0);
  stroke(255);
  //centerCircle(width/2, height/2, width);
  circleFractal(width/2, height/2, width/2);
}
