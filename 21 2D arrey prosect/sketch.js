// 2D array basics
// margarita
// Nov 3 
//

//0 (black) 255(white)

let grid = [
  [0,   0,   255, 255, 0  ],
  [255, 0,   255, 0,   255],
  [255, 255, 0,   255, 255],
  [0,   255, 0,   0,   0  ]
];

let rows = grid.length;
let cols = grid[0].length;
let squareSize = 60;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  renderGrid();
  print(getCurrentX(),getCurrentY());
  
}

function mousePressed(){
  //flip current tile 
  //upgrade: only do this if the mouse is on canva
  let x = getCurrentX();
  let y = getCurrentY();

  //always: flip the "focused" tile
  flip(x, y);
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
  if(grid[y][x]=== 0) grid[y][x] = 255;
  else grid [y][x] = 0 ;
}

 function renderGrid(){
  //interpret the information in the 2D array, and draw
  // a gaid of square on the screen to reflect it
  for (let y = 0; y< rows; y++){
    for (let x = 0 ; x < cols; x++){
      let fillcolor = grid[y][x];
      fill(fillcolor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
 }