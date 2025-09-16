// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawAlien();
}

let headSize = 0 ;



function drawAlien(){
  noStroke();
  let g = color("lightgreen");
  let b = color("black");
  //circle top   
  fill(g);
  circle(100, 100, 50+headSize);
  
  //the body part
  fill(g);
  rect(75, 100, 50 , 25);

  //the leg
  fill(g);
  rect(75, 125, 2, 10);
  rect(123, 125, 2, 10);

  //face
  fill(b);
  ellipse(89, 90, 2, 5);
  ellipse(112, 90, 2, 5);
  rect(88, 100, 24, 1);
}












