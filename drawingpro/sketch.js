// shape exersise
// margarita
// Sep 15
//
// useing the headSize to change size


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawAlien();
}

let headSize = 100 ;



function drawAlien(){
  noStroke();
  let g = color("lightgreen");
  let b = color("black");
  //circle top   
  fill(g);
  circle(100, 100, headSize);
  
  //the body part
  fill(g);
  rect(100-headSize/2, 100, headSize , headSize/2);

  //the leg
  fill(g);
  rect(100-headSize/2,100+headSize/2, 2, 10);
  rect(123, 125, 2, 10);

  //face
  fill(b);
  ellipse(87, 90, 2, 5);
  ellipse(112, 90, 2, 5);
  rect(88, 100, 24, 1);
}












