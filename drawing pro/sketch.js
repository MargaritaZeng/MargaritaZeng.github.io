// margarita 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();
  spring();
 
  
  
}
let cyrrentBack = 0;
function changeColor(){
  if(key === 'a' && keyIsPressed ){
    cyrrentBack++;
    if (cyrrentBack > 3){
      cyrrentBack = 0;
    }
  }
}

function keyPressed(){
  changeColor();
}






function spring(){
  //backround color
  fill(124, 226, 242);
  rect(0, 0, 1000, 800);
  fill(88, 219, 132);
  rect(0, 600, 1000, 200);

  //cloud
  fill(255, 255, 255);
  circle(600, 200, 70);
  circle(565, 230, 70);
  circle(625, 230, 70);

  circle(mouseX, 300, 70);
  circle(mouseX-35, 330, 70);
  circle(mouseX+25, 330, 70);


  //object
  //body
  fill(232, 198, 49);
  circle(500, 500, 200);
  ellipse(500, 450, 170, 200);

  fill(120, 86, 14);
  rect(500, 330, 10, 20);

  //face
  fill(242, 216, 182);
  circle(500, 450, 100);


  fill(255,181, 176);
  triangle(500, 500, 510, 480, 490, 480);

  fill(0);
  circle(525, 455, 10);
  circle(475, 455, 10);


//hair
 if (cyrrentBack === 0){
  fill(168, 5, 5);
 }
 else if (cyrrentBack === 1){
  fill(132, 240, 24);
 }
 else if (cyrrentBack === 2){
  fill(230, 156, 18);
 }
 else if (cyrrentBack === 3){
  fill(252, 249, 25);
 }
arc(500, 450, 100, 100, PI, 0 );
triangle(543, 425, 573, 425, 555, 475);
triangle(425, 425, 457, 425, 444, 475);
triangle(470, 415, 530, 415, 500, 475);
triangle(500, 400, 500, 380, 490, 390);
}




  