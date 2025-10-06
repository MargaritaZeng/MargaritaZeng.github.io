// state variable 
// margarita 
// oct 6
//
let x1 = 0;
let y1 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}




function draw() {
  background(220);
  movingRect();
}

function movingRect(){
 
 
  for ( let x=0 ; x <= width -20 ;  x += 10 ){
    rect(x, y1, 20 );
  }
  


}