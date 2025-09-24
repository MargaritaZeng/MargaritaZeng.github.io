// drawing with single loops
// margarita
// sep 23
//

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circleline(height*0.35, 30 );
  circleline(height/2, 50 );
  circleline(height*0.65, 80 );

}

function grandientBackground(){

   let h = 3;
   let
}

function cDistance(x1 , y1 , x2, ys=2){
let a = abs(x1-x2b)


}


function circleline(y, size){
// using this function to draw a line of circle 
//y to number   the height at which to draw the line 
//size to number diameter of the circles
  let xStart = width * 0.1;  //10% position from the left 
  let xEnd = width * 0.9;    //90% horiaontal pos from left

  for (let x = xStart ; x<= xEnd ;x += size){
      circle(x, y, size);
      text (draw, x, t)

  }
}

