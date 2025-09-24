// working eith images
// and random() and noise()
// margarita
// sep 24
//
let x1, y1, x2, y2;
let d1, d2, d3;
let noiseTime = 5 , noiseSpeed = 1.5;
// noisespeed controls how connected
// our random noise() values are.
let minSize = 5 ; let maxSize = 200;

let mX, mY; // move x and y

async function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3; y1 = height*0.5;
  x2 = width*0.7; y2 = height*0.5;
  mY = height*0.3;
  frameRate(10);
  
}

function noiseMove(){
  mX = mouseX
  fill(50, 150, 250);
  minSize = mouseX - 50; 
  d3 = random (minSize, maxSize);
  circle(mX, mY, 50);
}


function draw() {
  background(220);
  randomCircle();
  noiseCircle();
  noiseMove();
}

function noiseCircle(){
  //draw a fixed circle with randomly
  //changing (but smooth, hopefully!) diametes
  d2 = noise(noiseTime);// yields value between 0-1
  d2 = map(d2, 0, 1, minSize , maxSize);
  fill(255,50,150);
  circle(x2, y2, d2);
  noiseTime += noiseSpeed;
}


function randomCircle (){
  // draw a fixed circle with randomly changing diame
  fill(50, 150, 250);
  d1 = random (minSize, maxSize);
  circle(x1, y1, d1);
}

