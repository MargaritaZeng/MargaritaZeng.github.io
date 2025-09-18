// State Variables and real time 
// margarita
// Dsep 18, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let shapeState = 0 ; // 0-circle 
let startTime , elapsedTIme ;
function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis ;
}

function draw() {
  // using this for time is sketchy , b/c no guarantee we can
  //achieve the target frameRate
  background(220);
  drawShape
  print("frame:" + frameCount/60);
  manageTimer();
  
}

function manageTimer(){
  //update elapsedTime 
  //print(millis());
  elapsedTIme = millis() - startTime;
  text((elapsedTIme/1000).toFixed/2, width*0.3, height*0.75);
}


function keyPressed(){
  //automatically called omn any keyboard button press 
  //state var:  0 to 01 1 to 2 
  if (shapeState < 3 ){
    shapeState ++;
    if (shapeState=== 3){
      startTime = millis();
    }

  }
}

function drawShape(){
  // inspect our variable, and , 1 of 4 possible
  // options, depending on the current value
  switch(shapeState) {
    case 0:
      circle (width/2, height/2, 150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2; let y = height/2;
      triangle(x-50, y+50, x+50, y+50, x, y-25);
      break;
    case 3:
      for(let i = 0 ; i < 20; i++){
        let x = random 

      }
  }
}