// Multiple Keys and Outlines
// Mr. Scott
// September 15, 2025

//keyIsDown( keycode ) → returns boolean

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  checkMulti();
}

function checkMulti(){
  
  strokeWeight(mouseX / 10);
  stroke(255,0,0);
  //check for multiple keypresses (3 simulateneous)
  let a = keyIsDown(65); //"a"
  let b = keyIsDown(66); //"b"
  let c = keyIsDown(67); //"c"
  textSize(40);
  text("a:" + a + "\tb:" + b + "\tc:" + c, 100, 300);
}
