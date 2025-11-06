// 2D array basics
// margarita
// Nov 3 
//

//0 (black) 255(white)

let grid = [
   [0, 0, 0, 0, 0],
   [255, 0,   255, 0,   255],
   [255, 255, 0,   255, 255],
   [0,   255, 0,   0,   0  ]
];
//row = y cols = x
let rows = grid.length;
let cols = grid[0].length;
let squareSize = 60;

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  starting();

}

function draw() {
  background(220);
  renderGrid();
  print(getCurrentX(),getCurrentY());
  overday();
  if (allBlack() || allWhite()){
    fill(168, 23, 235);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("you win !", width /2 , height /2);
  }
}

function mousePressed(){
  //flip current tile 
  //upgrade: only do this if the mouse is on canva
  let x = getCurrentX();
  let y = getCurrentY();

  //always: flip the "focused" tile
  //5 clorchange 

  //flip(x, y);

  if (keyIsDown(SHIFT) ){
    flip(x, y);
  
  }
  else{
    //cheater
    flip(x, y);
    if (x+1 < cols && x < cols)flip(x+1, y);
    if (y+1 < rows && y < rows)flip(x, y+1);
    if (x-1 < cols && x < cols)flip(x-1, y);
    if (y-1 < rows && y < rows)flip(x, y-1);
  }
  
  
}

function overlay(x, y){
  // cross or square
  //cross or suare number
  // let mousex = getCurrentX();
  // let mousey = getCurrentY();
  let csnumber = 1;
  if (csnumber%2 === 1){
    fill(216, 133, 255);
    square(x, y, squareSize);
    
  }
}

//win the game 
function allWhite(){

  for (let y = 0; y< rows; y++){
    for (let x = 0 ; x < cols; x++){
      if (grid[y][x] !== 255){
        return false ;
      }
    }
  }
  return true;
}

function allBlack(){

  for (let y = 0; y< rows; y++){
    for (let x = 0 ; x < cols; x++){
      if (grid[y][x] !== 0){
        return false ;
      }
    }
  }
  return true;
}

function getCurrentX(){
  //determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, width-1 );
  return floor (constrainedX/squareSize);
}

function getCurrentY(){
  //determine current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1 );
  return floor (constrainedY/squareSize);
}

function flip(x,y){
  //take a tile @ x, y and inverts its value 
  //change color 
  if(grid[y][x]=== 0) grid[y][x] = 255;
  else grid [y][x] = 0 ;
}

 function renderGrid(){
  //interpret the information in the 2D array, and draw
  // a gaid of square on the screen to reflect it
  //draw the box 
  for (let y = 0; y< rows; y++){
    for (let x = 0 ; x < cols; x++){
      let fillcolor = grid[y][x];
      fill(fillcolor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
 }


  function starting(){
  // black or white
  // let bow = int(random(0,2));
  for (let y = 0; y< rows; y++){
    for (let x = 0 ; x < cols; x++){
      let bow = int(random(0,2));
      if (bow === 1 ){
        flip(x, y);
      }
     } 
    }
  }
 
  