// locates mallest circle 
// margarita
// oct 1 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_CIRCLES = 40;
function setup() {
  createCanvas(windowWidth, windowHeight);
} 

function draw() {
  randomSeed(4);
  background(220);
  drawCircles();
}



function drawCircles(){
  // draw some random circles
  noFill();
  let smallestDiamter = Infinity;
  let smallestX = -1;
  let smallestY = -1;

  for (let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 100);

    if(d < smallestDiamter){
      smallestDiamter = d;
      smallestX = x;
      smallestY = y;

      
    }

    circle(x, y, d);
  }

fill(255);
circle(smallestX, smallestY, smallestDiamter);

}