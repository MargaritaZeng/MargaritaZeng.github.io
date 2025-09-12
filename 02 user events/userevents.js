// user events + day 1 challenge
// margarita
// sep 9


//global variables here
let circleColor = false;
// declaration initialization



function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(220);
  challenge(); // coordinate system challenge
}

function keyPressed(){
    // this is special Event function, ets 
    // automatically called anytime a keyboard 
    // button is pressed 
    print ('key was pressed');
    circleColor = !circleColor;
}

function challenge(){
  // draw 5 hollow circles , in 4 corners and 
  // center position , 50px in diamter each
  noFill();


  
  // 5 circles 
  circle(0, 0, 50);
  circle(width, 0, 50);
  circle(0, height, 50);
  circle(width, height, 50);
  circle(width*0.5, height*0.5, 50);
}