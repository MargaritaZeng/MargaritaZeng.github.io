// user events + day 1 challenge
// margarita
// sep 9


//global variables here
// can only work with "simple" data in this
// section of code. no system variables are 
//available until in setup(). after canvas is made

let circleColor = false;
let currentColor = "white";

let x ; let y = 300;
let tSize = 50 ;
// declaration initialization



function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  x = width/2;
}

function draw() {

  background(220);
  challenge(); // coordinate system challenge
  movement();
  rect(x, y, 60 , 30);
  mouseReport()
}

function mouseReport(){
  let src = mouseX + "," + mouseY + "," + mouseIsPressed+ "," + mouseButton ;
  textSize(tSize);
  text(src, mouseX, mouseY);

  if(mouseIsPressed){
    
  }

}

function mousePressed(){
  tSize = random(10,80);
}




function movement(){

//check for keyboard  presses each frame
//and move the rectangle accordingly



  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;
  if (keyIsDown(LEFT_ARROW)) x -= 5;
}







function keyPressed(){
    // this is special Event function, ets 
    // automatically called anytime a keyboard 
    // button is pressed 

  

    print ('key was pressed');
    if(key === 'g') currentColor = "green"; 
    else if (keyCode === CONTROL) currentColor = "aqua";
    circleColor = !circleColor;
}

function challenge(){
  // draw 5 hollow circles , in 4 corners and 
  // center position , 50px in diamter each
  noFill();


  if(circleColor){
    fill(currentColor);
  }
  // 5 circles 
  circle(0, 0, 50);
  circle(width, 0, 50);
  circle(0, height, 50);
  circle(width, height, 50);
  circle(width*0.5, height*0.5, 50);
}