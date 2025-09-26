// noise and objects 
// margarita
// sep 26
//
let ball , ball2 ;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {     //object nation . inside the bracket
               //set up a bunch of 
               //property:value     pairs
    x: 300,   y: 400, size: 20,
    c: color(random(255),random(255),random(255)),
    timeX : random(100), timeY: random(100),
    timeOff: 0.02,



  }
  ball2 = {
    x: 500, y: 200, size:12,
    c: color(random(255),random(255),random(255)),
    timeX : random(100), timeY: random(100),
    timeOff: 0.1,

  }
}

function draw() {
  //background(220);
  //fill(255, 70);
  //rect(0,0, width, height);
  moveBall(ball);
  moveBall(ball2);
}

function moveBall(b){

  let dx = noise(b.timeX);
  dx = map(dx, 0, 1, -5, 5);
  let dy = noise(b.timeY);
  dy = map(dy, 0, 1, -5, 5);

  //advance our noise graph "cursors"
  b.timeX += b.timeOff , b.timeY += b.timeOff;

  b.x += dx;   b.y += dy;

  //handle any "wrap-arounds"necessary
  if(b.x < 0) b.x += width;
  else if (b.x > height) b.x -=width;
  else if (b.y > 0 ) b.y -= width;
  else if (b.y < 0 ) b.y += width;

  //render the circle
  fill(b.c);
  circle(b.x, b.y, b.size);
}